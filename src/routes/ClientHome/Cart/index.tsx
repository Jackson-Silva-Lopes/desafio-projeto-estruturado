import './styles.css'
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';



function Cart() {

    const {
        cart,
        handleClearClicl,
        handleDecreaseItem,
        handleIncreaseItem
        
    
      } = useProduct();
    
    
   

    return (
        <main>
            <section id="cart-container-section" className="dsc-container">

                {
                    cart.items.length === 0 ?
                        (
                            <div>
                                <h2 className='dsc-section-title dsc-mb20'> Carrinho Vazio</h2>
                            </div>
                        )

                        :
                        (

                            <div className="dsc-card dsc-mb20">
                                {
                                    cart.items.map(item => (
                                        <div key={item.productId} className="dsc-cart-item-container dsc-line-bottom">
                                            <div className="dsc-cart-item-left">
                                                <img src={item.imgUrl} alt={item.name} />
                                                <div className="dsc-cart-item-description">
                                                    <h3>{item.name}</h3>
                                                    <div className="dsc-cart-item-quantity-container">
                                                        <div onClick={() => handleDecreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">-</div>
                                                        <p>{item.quantity}</p>
                                                        <div onClick={() =>handleIncreaseItem(item.productId)} className="dsc-cart-item-quantity-btn">+</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dsc-cart-item-right">

                                              R$  {
                                                    item.subTotal
                                                }
                                            </div>
                                        </div>

                                    ))}

                                <div className="dsc-cart-total-container">
                                    <h3>  R$ {

                                        cart.total
                                    } 

                                    </h3>
                                </div>
                            </div>

                        )
                }

                <div className="dsc-btn-page-container">
                    <div className="dsc-btn dsc-btn-white">
                        Finalizar pedido
                    </div>
                    <Link to={"/catalog"}>
                    <div className="dsc-btn dsc-btn-white">
                        Continuar comprando
                    </div>
                    </Link>
                    <div onClick={handleClearClicl} className="dsc-btn dsc-btn-white">
                       Limpar Carrinho
                    </div>
                    
                </div>
            </section>
        </main>
    )
}

export default Cart