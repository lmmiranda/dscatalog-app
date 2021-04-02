import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import { doRequest } from '../../core/utils/request';
import './styles.scss'
import { ProductPage } from '../../core/types/Product';


const Catalog = () => {

    const [productPage, setProductPage] = useState<ProductPage>();

    useEffect(() => {

        const params = {
            page: 0,
            itemsPerPage: 12
        }

        doRequest({ path: '/products', params })
            .then(response => setProductPage(response.data))
    }, [])

    return (
        <div className="catalog-container">
            <h1 className='catalog-title'>
                Catálogo de produtos
        </h1>

            <div className="catolog-products">
                {productPage?.content.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Catalog;