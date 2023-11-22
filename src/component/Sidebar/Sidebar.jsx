import { Link } from 'react-router-dom';
import RumahIcon from '../../assets/noun-home-6305403.svg';
import ShopIcon from '../../assets/noun-shop-1196664.svg';
import CustomerIcon from '../../assets/noun-customer-care-4111691.svg'
import ProductIcon from '../../assets/noun-product-6289792.svg';
import DocumentIcon from '../../assets/noun-document-1266184.svg';
import './Sidebar.css';

const Sidebar = () => {

  return (
    <div className="sidenav">
      <div className="tanjungpinang">
        <h2>MAKANAN KHAS TANJUNGPINANG</h2>
      </div>
      <div className="posisi">
        <div className="general">
          <h2>General</h2>
        </div>
        <div className="bar">
          <Link to="/dashboard" className="link">
            <img src={RumahIcon} alt="Rumah" className="icon" />
            Dashboard
          </Link>
          <Link to="/penjualan" className="link">
            <img src={ShopIcon} alt="Rumah" className="icon" />
            Penjualan
          </Link>
          <Link to="/customer" className="link">
            <img src={CustomerIcon} alt='customer' className='icon' />
            Customer
          </Link>
          <Link to="/produk" className="link">
            <img src={ProductIcon} alt="Rumah" className="icon" />
            Produk
          </Link>
          <Link to="/Laporan" className="link">
            <img src={DocumentIcon} alt="Rumah" className="icon" />
            Laporan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
