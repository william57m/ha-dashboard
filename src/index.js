import './font.css';
import './index.css';
import Dashboard from './components/Dashboard';
import ReactPanelElement from './ReactPanelElement.js';

customElements.define('react-panel', ReactPanelElement(Dashboard));
