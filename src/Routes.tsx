import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/Catalog/components/ProductDetail';
import Home from './pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact>
                <Catalog />
            </Route>
            <Route path="/products/:productId">
                <ProductDetail />
            </Route>
            <Route path="/">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;