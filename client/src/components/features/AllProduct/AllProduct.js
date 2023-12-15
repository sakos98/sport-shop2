import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productsRedux";
import { Row } from "react-bootstrap";
import GetAllProducts from "../GetAllProduct/GetAllProduct";

const AllProduct = () => {
  const products = useSelector(getAllProducts);
  

	return (
    <Row className="justify-content-between">
 {products && products.length > 0 ? (
        products.map((product) => (
          <GetAllProducts
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            photo={product.photo}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
  </Row> 
	);
};

export default AllProduct;