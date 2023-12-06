import LoginForm from './pages/Login/Login';
import Penjualan from './pages/Penjualan/Penjualan';
import Produk from './pages/Produk/Produk/Produk';
import DashBoard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/signup/SignUp';
import EditProduk from './pages/Produk/EditProduk/EditProduk';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const App =() => {

  return (
    <>
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
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Route path="*">
            <Redirect to="/not-found" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
