import LoginForm from './pages/Login/Login';
import Penjualan from './pages/Penjualan/Penjualan';
import Produk from './pages/Produk/Produk/Produk';
import DashBoard from './pages/Dashboard/Dashboard';
import Laporan from './pages/Laporan/Laporan/Laporan';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/signup/SignUp';
import EditProduk from './pages/Produk/EditProduk/EditProduk';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { AppProvider } from './context/context';

const App =() => {

  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route> 
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/penjualan">
            <Penjualan />
          </Route>
          <Route path="/produk">
            <Produk />
          </Route>
          <Route path="/edit-produk/:id">
            <EditProduk />
          </Route>
          <Route path="/laporan">
            <Laporan />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App;
