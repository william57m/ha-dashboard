import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('html')

const ModalStyle = {
  overlay: {
    position: 'fixed',
    padding: 0,
    backgroundColor: '#404040CC'
  },
  content: {
    background: 'transparent',
    border: 'none',
    padding: 0,
    top: '50px',
    right: 'initial',
    bottom: 'initial',
    left: 'calc(50% - 150px)',
  }
};

const ModalContainer = styled.div`
  background-color: #303030F0;
  width: 300px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
`;

const ModalHeader = styled.div`
  height: 24px;
  padding: 10px;
  font-size: ${props => props.theme.title.size};
  font-weight: ${props => props.theme.title.weight};
  color: ${props => props.theme.title.color};
  background-color: #202020F0;
  position: relative;
`

const CloseIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.title.color};
  font-size: 16px;
  margin: auto;
`;

const CloseIconContainer = styled.div`
  color: ${props => props.theme.title.color};
  background: #404040F0;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  right: 10px;
  top: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const ModalContent = styled.div`
  padding: 10px;
  text-align: center;
  height: 100%;
`

const ColorsContainer = styled.div`
  padding-top: 10px;
  width: 180px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
`;

const Color = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${props => props.color};
  margin: 5px;
  display: inline-block;
  cursor: pointer;
`

const SliderContainer = styled.div`
  height: 280px;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  /* Width */
  height: 90px; 
  /* Height */
  width: 260px;
  margin-left: calc(50% - 45px);
  margin-top: 70px;
  outline: none;
  border-radius: 17px;
  background: gray;
  overflow: hidden;
  transform-origin:100px 100px;
  transform: rotate(-90deg);

  &::-webkit-slider-thumb {
    -webkit-appearance:none;
    width: 20px;
    height: 40px;
    border-radius: 20px;
    border: 8px solid ${props => props.color};
    background: lightgrey;
    box-shadow: -100vw 0 0 100vw ${props => props.color};
  }
`

var timeout;

export function ModalLight(props) {
  const brightness = Math.floor(props.entity.attributes.brightness*100/255);
  const [percentage, setPercentage] = useState(brightness);
  const [color, setColor] = useState('#FFFFFF');

  function handlePercentageChange(event) {
    const value = event.target.value;
    setPercentage(value);
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      const brightness = Math.floor(value*255/100);
      props.hass.callService('light', 'turn_on', {
        entity_id: props.entity.entity_id,
        brightness: brightness
      });
    }, 500);
  }

  function handleColorChange(color) {
    setColor(color);
  }

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      style={ModalStyle}
    >
      <ModalContainer>
        <ModalHeader>
          {props.entity.attributes.friendly_name}
          <CloseIconContainer onClick={props.closeModal}>
            <CloseIcon icon={faTimes} />
          </CloseIconContainer>
        </ModalHeader>
        <ModalContent>
          <SliderContainer>
            <Slider
              type="range"
              min="1"
              max="100"
              value={percentage}
              onChange={handlePercentageChange}
              color={color}
            />
          </SliderContainer>
          <ColorsContainer>
            <Color color="#AB7A47" onClick={() => handleColorChange('#AB7A47')} />
            <Color color="#EBA761" onClick={() => handleColorChange('#EBA761')} />
            <Color color="#F2C596" onClick={() => handleColorChange('#F2C596')} />
            <Color color="#7561ED" onClick={() => handleColorChange('#7561ED')} />
            <Color color="#B1AFB8" onClick={() => handleColorChange('#B1AFB8')} />
            <Color color="turquoise" onClick={() => handleColorChange('turquoise')} />
          </ColorsContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}