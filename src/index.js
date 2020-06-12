import './font.css';
import './index.css';
import Panel from './components/Panel';
import ReactPanelElement from './ReactPanelElement.js';

customElements.define('react-panel', ReactPanelElement(Panel));
