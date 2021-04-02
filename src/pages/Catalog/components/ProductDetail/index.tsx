import { useParams } from 'react-router';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetail = () => {

    const { productId } = useParams<ParamsType>();

    return (
        <div className="product-detail-container">
            <h1>Product detail {productId}</h1>
        </div>
    );
}

export default ProductDetail;