import React from 'react'
import styled from '@emotion/styled'

const ProfileContainer = styled.div`
    width: 70px;
    height: 70px;
    margin-right: 10px;
    margin-bottom: 20px;
    display: inline-block;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: ${(props) => (props.atHome ? 'none' : 'grayscale(100%)')};
`

export function ProfilePicture({ src, atHome }) {
    return (
        <ProfileContainer>
            <Image src={src} atHome={atHome} />
        </ProfileContainer>
    )
}
