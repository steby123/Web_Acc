import classes from './LaporanTable.module.css';
import deleteLaporanIcon from '../../../assets/delete_FILL0_wght400_GRAD0_opsz24.svg';

const LaporanTable = () => {
    return(
        <>
            <table className={classes.table_penjualan}>
            <thead>
                <tr>
                    <th className={classes.header}>No. Invoice</th>
                    <th className={classes.header}>Metode Pembayaran</th>
                    <th className={classes.header}>Nama Makanan</th>
                    <th className={classes.header}>Jumlah Makanan</th>
                    <th className={classes.header}>Tanggal Order</th>
                    <th className={classes.header}>Total Harga</th>
                    <th className={classes.header}>Total Bayar</th>
                    <th className={classes.header}>#</th>
                    {/* ... more headers ... */}
                </tr>
            </thead>
            <tbody>
                <tr className={classes.row}>
                    <td className={classes.cell}>1</td>
                    <td className={classes.cell}>cash</td>
                    <td className={classes.cell}>lobster</td>
                    <td className={classes.cell}>1</td>
                    <td className={classes.cell}>101010</td>
                    <td className={classes.cell}>10000</td>
                    <td className={classes.cell}>1020120</td>
                    <td className={classes.cell}><img src={deleteLaporanIcon} /></td>
                    {/* ... more cells ... */}
                </tr>
            </tbody>
                <div>

                </div>
        </table>
        </>
    )
}

export default LaporanTable ;