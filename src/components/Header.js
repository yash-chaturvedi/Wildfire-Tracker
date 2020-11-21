import {Icon} from '@iconify/react'
import LocationIcon from '@iconify/icons-mdi/fire-alert'


const Header = () => {
    return (
        <div className="header">
            <h1><Icon icon={LocationIcon} /> Wildfire Tracker (Powered by NASA)</h1>
        </div>
    )
}

export default Header
