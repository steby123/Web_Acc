import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProdukIcon from '../../../assets/edit_FILL0_wght400_GRAD0_opsz24.svg';
import DeleteProdukIcon from '../../../assets/delete_FILL0_wght400_GRAD0_opsz24.svg';
import classes from './TableMakanan.module.css';

const TableMakanan = ({ push, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPush = push.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    console.log(push);

    return (
        <div className={classes.te}>
            <div className={classes.data}>
                <h2 className={classes.tambah}>Data Customer</h2>
            </div>
            <hr />
            <div className={classes.search}>
                <label>Search:</label>
                <input
                    className={classes.hunt}
                    type='text'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Nama Makanan</th>
                        <th>Harga</th>
                        <th>Foto</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPush.map((item, index) => (
                        <tr key={index}>
                            <td>NM23-00{item.autoIncrement}</td>
                            <td>{item.name}</td>
                            <td>{item.harga}</td>
                            <td>
                            {item.imageURL && (
                                <img
                                    className={classes.thumbnail}
                                    src={item.imageURL}
                                    alt={item.name}
                                />
                            )}
                            </td>
                            <td className={classes.buttonContainer}>
                                <button className={`${classes.btn} ${classes.edit}`} ><Link to="edit-produk" className={classes.edit_produk}><img src={EditProdukIcon} /></Link></button>
                                <button className={`${classes.btn} ${classes.delete}`} onClick={() => onDelete(index)}><img src={DeleteProdukIcon} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableMakanan;
