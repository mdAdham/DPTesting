import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";

import "./Category.css"

const Category = () => {
    const {category} = useParams();
    const {prods, loading, error} = useSelector((state)=>state.products);
    const categoryNames = {
        mens:"men's clothing",
        womens:"women's clothing",
        electronics:"electronics",
        jewelery:"jewelery"
    }

    const selectedCategory = categoryNames[category];
    if (!selectedCategory){
        return <h2>Category is not found</h2>
    }

    const filterProducts = prods.filter((product)=>product.category===selectedCategory);

  return (
    <div className="Category">
      <h1>{selectedCategory.toUpperCase()}</h1>
      <p>Explore our {selectedCategory} Collection</p>
      {loading && <p>...Loading Products</p>}
      {error && <p>{error}</p>}
      {!loading && !error && filterProducts.length === 0 && (<p>No products found</p>)}
      <div className="productsGrid">
        {filterProducts.map((x)=>(
            <Card key={x.id} product={x}/>
        ))}
      </div>
    </div>
  );
}

export default Category;