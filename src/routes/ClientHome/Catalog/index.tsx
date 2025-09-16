



import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonCunstomized from '../../../components/ButtonCunstomized/Index';
import useProduct from '../../../hooks/useProduct';




export default function Catalog() {

  const {
    allProduct,
    handleSearch,
    handleNextPageClick,
    isLastPage

  } = useProduct();



  return (<>

    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            allProduct.map(product =>
              <CatalogCard key={product.id} product={product} />
            )
          }

        </div>
        {
          !isLastPage &&

          <div onClick={handleNextPageClick}>
            <ButtonCunstomized textButton='Carregar mais' />
          </div>

        }


      </section>
    </main>
  </>)
}