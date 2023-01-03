import './styles.scss'
const MobileSidebar = ({onClose, show}) => {
    return (
        <div className={`mobile-sidebarwrapper ${show === true ? 'active': ''}`}>
            <div className="sidebar">
             <button onClick={onClose}>dhd</button>
            </div>
            

        </div>
    )
}
export default MobileSidebar