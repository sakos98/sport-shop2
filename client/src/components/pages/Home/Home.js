import AllProduct from "../../features/AllProduct/AllProduct";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_URL } from "../../../config";
import { updateProducts } from "../../redux/productsRedux";

const Home = () => {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleUpdate = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        const data = await response.json();
       
        dispatch(updateProducts(data));
        setPending(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleUpdate();
  }, [dispatch]);

  return (
    <div>
      <h1>New Shoes Sport Collection:</h1>
      <AllProduct />
    </div>
  )
}

export default Home;