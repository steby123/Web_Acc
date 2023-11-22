import './App.css'
import LoginForm from './pages/Login/Login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Penjualan from './pages/Penjualan/Penjualan';
import Produk from './pages/Produk/Produk';
import DashBoard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';

const App =() => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/penjualan">
            <Penjualan />
          </Route>
          <Route path="/produk">
            <Produk />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
