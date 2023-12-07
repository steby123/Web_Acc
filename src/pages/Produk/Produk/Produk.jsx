import { useState, useContext } from 'react'
import Navbar from '../../../component/Navbar/Navbar';
import Sidebar from '../../../component/Sidebar/Sidebar';
import classes from './Produk.module.css';
import TableMakanan from '../Table/TableMakanan';

import { AppContext } from '../../../context/context';

const Produk = () => {
    const [name, setName] = useState('');
    const [harga, setHarga] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [autoIncrement, setAutoIncrement] = useState(1);
    const [error, setError] = useState(false);
    const [focus, setFocus] = useState(false);
    const [focus1, setFocus1] = useState(false);
    const [focus2, setFocus2] = useState(false);

    const { productItems, setProductItems } = useContext(AppContext);

    const resetHandler = () => {
        setName('');
        setHarga('');
        setImageURL('');
    }

    const formValidation = (e) => {
        e.preventDefault();
        const newData = {
            name,
            harga,
            imageURL,
            autoIncrement
        };
        console.log(name, harga, imageURL, autoIncrement);

        if(name.trim().toString() && harga <= 4){
            return false;
        }
        setProductItems((previous) => [...previous, newData]);
        setAutoIncrement((prev) => prev + 1);
    };
    
    const deleteHandler = (index) => {
        setProductItems((previous) => previous.filter((_, i) => i !== index));
    };

    return(
        <div className={classes.container}>
            <Navbar />
            <Sidebar />
            <div className={classes.title}>
                <p>Data Menu Makan</p>
            </div>

            <div className={classes.bentuk}>
                <div className={classes.data}>
                    <h2 className={classes.tambah}>Form Tambah Data</h2>
                </div>
                <div>
                    <h5 style={{color:'rgba(171, 171, 171, 1)'}}>Kode Menu</h5>
                    <h5>NM23-00{autoIncrement}</h5>
                </div>
                <form onSubmit={formValidation} className={classes.isi}>
                    <div className={classes.kolom}>
                        <label>Nama Makanan</label>
                        <input
                            className={`${classes.input} ${error ? classes.error : ''} ${focus ? classes.focus : ''}`}
                            placeholder='Nama Makanan'
                            type='text'
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.trim().length <= 0) {
                                    setError(true);
                                } else {
                                    setError(false);
                                    setName(value);
                                }
                            }}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            value={name}
                            required
                        />
                        <label>Harga</label>
                        <input
                            className={`${classes.input} ${focus1 ? classes.focus1 : ''}`}
                            placeholder='Harga'
                            type='number'
                            onChange={(e) => setHarga(e.target.value)}
                            onFocus={() => setFocus1(true)}
                            onBlur={() => setFocus1(false)}
                            value={harga}
                            required
                        />
                        <label>Foto Makanan</label>
                        <input
                            className={`${classes.input} ${focus2 ? classes.focus2 : ''}`}
                            type='file'
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setImageURL(URL.createObjectURL(file));
                            }}
                            onFocus={() => setFocus2(true)}
                            onBlur={() => setFocus2(false)}
                            required
                        />
                        <div className={classes.tekan}>
                            <button 
                                type='submit' 
                                style={{ background: 'rgba(132, 243, 177, 1)' }}>Proses</button>
                            <button 
                                type='submit' 
                                onClick={resetHandler} 
                                style={{background:'rgba(255, 133, 133, 1)'}}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
            <TableMakanan onDelete={deleteHandler}/>
        </div>
    )
}

export default Produk;