import './font.css'
import './index.css'
import { Provider } from './components/Provider'
import ReactPanelElement from './ReactPanelElement.js'

customElements.define('react-panel', ReactPanelElement(Provider))
