import Navbar from '../../../component/Navbar/Navbar';
import Sidebar from '../../../component/Sidebar/Sidebar';
import classes from './Laporan.module.css';
import LaporanTable from '../LaporanTable/LaporanTable';

const Laporan = () => {
    return (
        <div className={classes.container}>
        <h1>Data Transaksi Penjualan</h1>
        <Navbar />
        <Sidebar />
            <div className={classes.box}>
                <div className={classes.context}>
                    <label>Mulai Tanggal</label>
                    <input type="date" />
                    <label>Sampai Tanggal</label>
                    <input type='date' />
                    <label>Choose a cash / bank:</label>
                        <select id="money" name="money">
                        <option value="Cash">Cash</option>
                        <option value="Bank">Bank</option>
                    </select>
                    <label>Search</label>
                    <input type='text'></input>
                </div>
            </div>
        <LaporanTable />
        </div>
    );
};

export default Laporan;
