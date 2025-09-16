
import ButtonCunstomized from "../../../components/ButtonCunstomized/Index";
import ProductDatailsCard from "../../../components/ProductDatailsCard";
import "./styles.css";
import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import NotFound from "../../../components/NotFound";



export default function ProductDetails() {




  const { 
   
    product,   
    handleByClick,
    


  } = useProduct();

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product ? <ProductDatailsCard product={product}  /> : <NotFound />}

        {
          product && <div className="dsc-btn-page-container">
            <div onClick={handleByClick}>
            <ButtonCunstomized textButton="Comprar" />
            </div>
        
          <Link to={"/"}>
            <ButtonCunstomized textButton="Inicio" />
          </Link>
        </div>
        }

        
      </section>
    </main>
  );
}
