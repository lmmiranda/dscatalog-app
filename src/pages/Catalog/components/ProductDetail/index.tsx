import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/images/arrow.svg';
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg';
import ProductPrice from '../../../../core/components/ProductPrice';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetail = () => {

    const { productId } = useParams<ParamsType>();

    console.log(productId)

    return (
        <div className="product-detail-container">
            <div className="card-base border-radius-20 product-detail">
                <Link to="/products" className="product-detail-go-back">
                    <ArrowIcon className="icon-go-back" />
                    <h1 className="text-go-back">voltar</h1>
                </Link>
                <div className="row">
                    <div className="col-6 pr-5">
                        <div className="product-detail-card text-center">
                            <ProductImage className="product-detail-image" />
                        </div>
                        <h1 className="product-detail-name">
                            Computador Desktop - Intel Core i7
                        </h1>

                        <ProductPrice price="2.779,00" />
                    </div>
                    <div className="col-6 product-detail-card">
                        <h1 className="product-description-title">
                            Descrição do produto
                        </h1>
                        <p className="product-description-text">
                            Seja um mestre em multitarefas com a capacidade para exibir
                            quatro aplicativos simultâneos na tela. A tela está ficando
                            abarrotada? Crie áreas de trabalho virtuais para obter mais
                            espaço e trabalhar com os itens que você deseja. Além disso,
                            todas as notificações e principais configurações são reunidas
                            em uma única tela de fácil acesso.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;