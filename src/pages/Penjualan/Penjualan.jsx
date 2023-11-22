import Navbar from '../../component/Navbar/Navbar';
import Sidebar from '../../component/Sidebar/Sidebar';
import louMie from '../../image/WhatsApp Image 2023-10-23 at 13.29.41.jpeg'
import sateMie from '../../image/WhatsApp Image 2023-10-23 at 13.30.25.jpeg';
import classes from'./Penjualan.module.css';

const Penjualan = () => {


    const number = Math.floor(Math.random().toString());
    return(
        <div className={classes.container}>
            <Navbar />
            <Sidebar />
            <div className={classes.title}>
                <h1>Order Menu</h1>
            </div>

            <div className={classes.title1}>
                <h2>Daftar Menu</h2>
            </div>

            <div className={classes.title2}>
                <h2>Makanan</h2>
            </div>

            <div className={classes.title3}>
                <input type="text" className={classes.ketik} placeholder="Type to Search" />
            </div>

            <div className={classes.foto}>
                <div className={classes.image}>
                <img className={classes.makanan1} src={louMie} alt="Lomie" />
                <div className={classes.content}>
                    <div className={classes.text}>Lomie</div>
                    <div className={classes.price}>Rp.20.000</div>
                </div>
                <button className={classes.center_button}>Pilih</button>
                </div>

                <div className={classes.image}>
                <img className={classes.makanan2} src={sateMie} alt="Sate Mie" />
                <div className={classes.content}>
                    <div className={classes.text}>Sate Mie</div>
                    <div className={classes.price}>Rp.20.000</div>
                </div>
                <button className={classes.center_button}>Pilih</button>
                </div>
            </div>

            <div className={classes.steby}>
                <div className={classes.list}>List Order</div>
                <hr />
                <div className={classes.context}>
                <div className={classes.customer}>Customer ID</div>
                <div>
                    <input type={classes.number} className="number" />
                </div>
                </div>
                <div className={classes.context}>
                <div className={classes.customer}>Tanggal Pesanan</div>
                <div>
                    <input type={classes.date} className="number" />
                </div>
                </div>
                <hr />
                <div className={classes.steby2}>
                <div className={classes.steby3}>
                    <p>Nama</p>
                    <p>City</p>
                    <p>Subtotal</p>
                    <p>#</p>
                </div>
                </div>
                <hr />
                <div className={classes.steby4}>
                <div className={classes.belum}>Belum ada Orderan, Pilih Dulu Ya!</div>
                <div className={classes.order_content} style={{ display: 'none' }}>
                    {/* Content to show when an order is placed */}
                </div>
                </div>
                <hr />
                <div className={classes.bayar}>
                <div className={classes.steby5}>
                    <p className={classes.total}>Total Bayar</p>
                    <p className={classes.biaya}>Rp.0</p>
                </div>
                </div>
                <hr />
                <div className={classes.steby6}>
                <p>No.Order</p>
                <p>#0RD00{number}</p>
                </div>
                <button className={classes.proses}>Proses Pesanan</button>
            </div>
            <div className={classes.sidebar}></div>
        </div>
    )
}

export default Penjualan;