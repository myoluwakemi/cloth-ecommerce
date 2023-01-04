import { X } from 'react-feather'
import './styles.scss'

const MobileSidebar = ({onClose, show}) => {
    return (
        <div className={`mobile-sidebarwrapper ${show === true ? 'active': ''}`}>
            <div className="sidebar">
                 <X onClick={onClose}className="toggle-icon"/>
            </div>
            

        </div>
    )
}
export default MobileSidebar