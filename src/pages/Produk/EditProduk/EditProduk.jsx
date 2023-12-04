import classes from './EditProduk.module.css';
import Navbar from '../../../component/Navbar/Navbar';
import Sidebar from '../../../component/Sidebar/Sidebar';

const EditProduk = () => {
    return(
        <div className={classes.container}>
            <Navbar />
            <Sidebar />
            <div className={classes.title}>
                <p>Data Customer</p>
            </div>
        </div>
    )
}

export default EditProduk;