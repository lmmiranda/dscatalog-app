import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import ProductPrice from 'core/components/ProductPrice';
import { Product } from 'core/types/Product';
import { doRequest } from 'core/utils/request';
import ProductDescriptionLoader from '../Loaders/ProductDescriptionLoader';
import ProductInfoLoader from '../Loaders/ProductInfoLoader';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetail = () => {
    const { productId } = useParams<ParamsType>();
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProduct] = useState<Product>()

    useEffect(() => {

        setIsLoading(true)
        doRequest({ path: `/products/${productId}` })
            .then(response => setProduct(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [productId]);

    return (
        <div className="product-detail-container">
            <div className="card-base border-radius-20 product-detail">
                <Link to="/products" className="product-detail-go-back">
                    <ArrowIcon className="icon-go-back" />
                    <h1 className="text-go-back">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 pr-5">
                        {isLoading ? <ProductInfoLoader /> : (
                            <>
                                <div className="product-detail-card text-center">
                                    <img className="product-detail-image" src={product?.imgUrl} alt={product?.name} />
                                </div>
                                <h1 className="product-detail-name">
                                    {product?.name}
                                </h1>

                                {product?.price && <ProductPrice price={product?.price} />}
                            </>
                        )}

                    </div>
                    <div className="col-6 product-detail-card">
                        {isLoading ? <ProductDescriptionLoader /> : (
                            <>
                                <h1 className="product-description-title">
                                    Descrição do produto
                                                    </h1>
                                <p className="product-description-text">
                                    {product?.description}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;