import Navbar from '../../component/Navbar/Navbar';
import Sidebar from '../../component/Sidebar/Sidebar';
import classes from './Dashboard.module.css';

const DashBoard = () => {
    return(
        <div>
            <Navbar />
            <Sidebar />
        </div>
    )
}

export default DashBoard;