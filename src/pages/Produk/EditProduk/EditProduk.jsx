import { useContext, useState } from 'react';
import classes from './EditProduk.module.css';
import Navbar from '../../../component/Navbar/Navbar';
import Sidebar from '../../../component/Sidebar/Sidebar';
import EditProdukFoto from '../EditProdukFoto/EditProdukFoto';
import { AppContext } from '../../../context/context';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const EditProduk = () => {
    const history = useHistory();
    const { id } = useParams();
    const { productItems, setProductItems } = useContext(AppContext);
    const [image, setImage] = useState();

    console.log(productItems);

    const productItem = productItems.find((item, index) => {
        console.log('shit');
        if (index === Number(id)) {
            return item;
        }
    });
    
    console.log(productItem);

    const {
        name,
        imageURL,
        autoIncrement
    } = productItem;

    const editFotoHandler = (e) => {
        const file = e.target.files[0];

        setImage(URL.createObjectURL(file));
    }

    const formValidation = (e) => {
        e.preventDefault();

        const newProductItemsMap = productItems.map(productItem => productItem);

        newProductItemsMap.forEach((item, index) => {
            if (index === Number(id)) {
                item.imageURL = image;
            }
        })

        setProductItems(newProductItemsMap);

        history.push('/produk');
    };
    

    return(
        <div className={classes.container}>
            <Navbar />
            <Sidebar />
            <div className={classes.title}>
                <p>Data Menu Makanan</p>
            </div>
            <div className={classes.context}>
                <form onSubmit={formValidation}>
                    <div className={classes.upload}>
                        <h2>Upload Gambar Menu</h2>
                    </div>
                    <div className={classes.menu}>
                        <label>Kode Menu</label>
                        <p>NM23-000{autoIncrement}</p> 
                        <label>Nama Menu</label>
                        <p>{name}</p>
                        <label>Pilih File</label>
                        <input className={classes.pilihFile} type='file' onChange={editFotoHandler} />
                        <div className={classes.pencet}>
                            <button type='submit' style={{ background: 'rgba(132, 243, 177, 1)' }}>Proses</button>
                            <button style={{background:'rgba(255, 133, 133, 1)'}}>Back</button>
                        </div>
                    </div>
                </form>
            </div>
            <EditProdukFoto imageURL={imageURL} name={name} />
        </div>
    )
}

export default EditProduk;