import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product, e) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id} className="ui grid wide ">
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="">
                <img
                  src={image}
                  className="ui image fluid small centered"
                  alt={title}
                />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price"> $ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default ProductComponent;
