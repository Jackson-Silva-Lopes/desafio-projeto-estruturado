
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../models/product";
import * as productServices from '../services/product-services'
import * as cartServices from '../services/cart-services'
import { useNavigate, useParams } from "react-router-dom";
import { CategoryDTO } from "../models/category";
import { OrderDTO } from "../models/order";
import { ContextCartCount } from "../utils/context-carts";
import { hasAnyRoles, isAuthenticated } from "../services/auth-service";
//import { CategoryDTO } from "../models/category";







function useProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { setContextCartCount } = useContext( ContextCartCount)

  const [isLastPage, setisLastPage] = useState(false)

  const [product, setproduct] = useState<ProductDTO>()
 // const [productName, setProductName] = useState("")
  const [allProduct, setAllProduct] = useState<ProductDTO[]>([])
  const [cart, setCart] = useState<OrderDTO>(cartServices.getCart());

  const ojTest: CategoryDTO = { id: 8, name: 'Jardinagem' }

  useEffect(() => {

    localStorage.setItem("minhaCategoria", JSON.stringify(ojTest))

    productId && productServices.findById(Number(productId))
      .then(response => {
        setproduct(response.data)
      })
      .catch(() => {
        setTimeout(() => {

          navigate("/catalog")
        }, 6000);

      });


  }, [])

  type QueryParams = {

    page: number;
    name: string;
  }

  const [queryParams, setqueryParams] = useState<QueryParams>(
    {
      page: 0,
      name: ""
    }
  )


  useEffect(() => {

   console.log("teste", hasAnyRoles(['ROLE_CLIENT']))

    productServices.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        const nextPage = response.data.content;
        setAllProduct(allProduct.concat(nextPage));
        setisLastPage(response.data.last)
      })

  }, [queryParams])


  function updateCart(){
    return  setContextCartCount(cartServices.getCart().items.length)
  }


  function handleByClick() {
    if (product) {
      cartServices.addProduct(product)
   //  setContextCartCount(contextCartCount + 1)
    updateCart()
    }         
    navigate("/cart")

  }

  function handleClearClicl() {

    cartServices.clearCart()
    setCart(cartServices.getCart())
    updateCart()

  }

  function handleDecreaseItem(productID: number) {
    cartServices.decreaseItem((productID))
    setCart(cartServices.getCart())
    updateCart()


  }

  function handleIncreaseItem(productID: number) {
    cartServices.increaseItem(productID)
    setCart(cartServices.getCart())
    updateCart()

  }  
  

  function handleSearch(serachText: string) {
    setAllProduct([])
    setqueryParams({... queryParams,page: 0, name: serachText})
  }


  function handleNextPageClick(){
    setqueryParams({...queryParams, page: queryParams.page + 1})
  }

  return {
    product,
    allProduct,
    cart,
    handleByClick,
    handleClearClicl,
    handleDecreaseItem,
    handleIncreaseItem,
    handleSearch,
    handleNextPageClick,
    isLastPage
  }

}

export default useProduct;
