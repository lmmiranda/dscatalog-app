import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import { doRequest } from 'core/utils/request';
import './styles.scss'
import { ProductPage } from 'core/types/Product';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import Pagination from 'core/components/Pagination';


const Catalog = () => {

    const [productPage, setProductPage] = useState<ProductPage>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0)

    useEffect(() => {

        const params = {
            page: activePage,
            itemsPerPage: 10
        }

        setIsLoading(true)

        doRequest({ path: '/products', params })
            .then(response => setProductPage(response.data))
            .finally(() => {
                setIsLoading(false)
            });
    }, [activePage])

    return (
        <div className="catalog-container">
            <h1 className='catalog-title'>
                Catálogo de produtos
        </h1>

            <div className="catolog-products">

                {isLoading ? <ProductCardLoader /> : (

                    productPage?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>)
                    ))}
            </div>

            {productPage && (
                <Pagination
                    activePage={activePage}
                    totalPages={productPage.totalPages}
                    onChange={activePage => setActivePage(activePage)}
                />
            )}
        </div>
    );
};

export default Catalog;