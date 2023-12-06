import classes from './EditProduk.module.css';
import Navbar from '../../../component/Navbar/Navbar';
import Sidebar from '../../../component/Sidebar/Sidebar';
import EditProdukFoto from '../EditProdukFoto/EditProdukFoto';

const EditProduk = () => {
    return(
        <div className={classes.container}>
            <Navbar />
            <Sidebar />
            <div className={classes.title}>
                <p>Data Menu Makanan</p>
            </div>
            <div className={classes.context}>
                <div className={classes.upload}>
                    <h2>Upload Gambar Menu</h2>
                </div>
                <div className={classes.menu}>
                    <label>Kode Menu</label>
                    <p>NM23-000{}</p> 
                    <label>Nama Menu</label>
                    <p>{}</p>
                    <label>Pilih File</label>
                    <input className={classes.pilihFile} type='file' />
                    <div className={classes.pencet}>
                        <button style={{ background: 'rgba(132, 243, 177, 1)' }}>Proses</button>
                        <button style={{background:'rgba(255, 133, 133, 1)'}}>Back</button>
                    </div>
                </div>
            </div>
            <EditProdukFoto />
        </div>
    )
}

export default EditProduk;