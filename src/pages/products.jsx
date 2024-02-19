
import products from "../data";
import { Link } from "react-router-dom";

const Products = () => {
    return(
        <section className="section">
            <h2>Product</h2>
            <div className="products">
                {products.map((product) => (
                    <article key={product.id}>
                        <h5>{product.name}</h5>
                        <Link to={`/products/${product.id}`}>more info</Link>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default Products;