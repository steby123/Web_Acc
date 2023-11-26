    import { useEffect, useState } from 'react';
    import Navbar from '../../component/Navbar/Navbar';
    import Sidebar from '../../component/Sidebar/Sidebar';
    import classes from'./Penjualan.module.css';
    import Title from './title';
    import deleteButton from '../../assets/delete_FILL0_wght400_GRAD0_opsz24.svg';

    const Penjualan = () => {
        const number = Math.floor(Math.random().toLocaleString() * 100);
        const [menuData, setMenuData] = useState([]);
        const [filteredMenu, setFilteredMenu] = useState([]);
        const [selectedItems, setSelectedItems] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
        const totalBayar = selectedItems.reduce((total, item) => total + item.price, 0);
        const [url, setUrl] = useState('http://localhost:3000/food');

        const handlePilih = (selectedItem) => {
            setSelectedItems((prevSelectedItems) => [
                ...prevSelectedItems,
                {
                    nama: selectedItem.title,
                    qty: 1,
                    price: selectedItem.price,
                },
            ]);
        }

        useEffect(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setMenuData(data);
        
                    // Filter menu items based on the search term
                    const filtered = data.filter((item) =>
                        item.title.toLowerCase().includes(searchTerm.toLowerCase())
                    );
        
                    setFilteredMenu(filtered);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, [url, searchTerm]);

        return(
            <div className={classes.container}>
                <Navbar />
                <Sidebar />
                <Title />

                <div className={classes.title3}>
                    <input 
                        type="text" 
                        className={classes.ketik} 
                        placeholder="Type to Search" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={classes.foto}>
                    {filteredMenu.map((item) => (
                        <div className={classes.image} key={item.id}>
                            <img className={classes.makanan1} src={item.src} alt={item.title} />
                            <div className={classes.content}>
                                <div className={classes.text}>{item.title}</div>
                                <div className={classes.price}>Rp.{item.price}</div>
                            </div>
                            <button className={classes.center_button} onClick={() => handlePilih(item.id)}>Pilih</button>
                        </div>
                    ))}
                </div>

                <div className={classes.steby}>
                    <div className={classes.list}>
                        List Order
                    </div>
                    <hr />
                    <div className={classes.context}>
                        <div className={classes.customer}>
                        Customer ID
                        </div>
                        <div>
                            <input 
                                type={classes.number} 
                                className="number"      
                            />
                        </div>
                    </div>

                    <div className={classes.context}>
                        <div className={classes.customer}>
                            Tanggal Pesanan
                        </div>
                        <div>
                            <input 
                                type={classes.date} 
                                className="number" 
                            />
                        </div>
                    </div>
                    <hr />
                    <table>
                        <div className={classes.steby3}>
                            {selectedItems.length > 0 ? (
                                <div className={classes.sudah}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nama</th>
                                                <th>qty</th>
                                                <th>Subtotal</th>
                                                <th>#</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.title}</td>
                                                    <td>{item.qty}</td>
                                                    <td>Rp.{item.price}</td>
                                                    <td className={classes.centerItem}>
                                                        <img src={deleteButton} alt='Delete' />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className={classes.belum}>
                                    <p>Belum ada Orderan, Pilih Dulu Ya!</p>
                                </div>
                            )}
                        </div>
                    </table>
                    <hr />
                    <div className={classes.bayar}>
                        <div className={classes.steby5}>
                            <p className={classes.total}>
                                Total Bayar
                            </p>
                            <p className={classes.biaya}>
                                Rp.{totalBayar}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.steby6}>
                        <p>No.Order</p>
                        <p>#0RD00{number}</p>
                    </div>
                    <button className={classes.proses}>
                        Proses Pesanan
                    </button>
                </div>

                <div className={classes.sidebar}></div>
            </div>
        )
    }

export default Penjualan;