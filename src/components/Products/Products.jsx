import "./Products.scss";
import Product from "./Product/Product"
const Products = () => {
    return <div className="products-container">
        <div className="sec-heading">sectoin heading</div>
        <div className="Products">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>
    </div>;
};

export default Products;
