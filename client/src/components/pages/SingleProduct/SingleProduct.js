import styles from './SingleProduct.module.scss';
import { useSelector } from 'react-redux';
import { getProductById } from '../../redux/productsRedux';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../redux/productsRedux';
import {Card,  Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { BasketContext } from '../../redux/BasketContext';


const SingleProduct =( props) => {
  const { addToBasket } = useContext(BasketContext);

  const handleAddToBasket = (productId) => {
    addToBasket(productId);
  };

  const { id } = useParams();
  const proData = useSelector(state => getProductById(state, id));

  

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const deleteAd = e => {
    e.preventDefault();
    dispatch(removeProduct(id));

    const options = {
      method: 'DELETE',
      credentials: 'include',
    };
    fetch(`${API_URL}/api/products/${proData.id}`, options)
      .then(res => {
        handleClose();
        navigate('/');
      });
  };

  if (!proData) {
    return <div>Loading...</div>;
  }
  const imageOne =  `${process.env.PUBLIC_URL}/images/${id}.jpg`;


  return (
    <div className={styles.cardPosition}>
      <Card style={{ width: '60%' }}>
      <ListGroup.Item className={styles.title}>{proData.name}</ListGroup.Item>
      <Row>
        <Col>
        <div className={styles.imageposition}>
        <Card.Img variant="top" src={imageOne}  className={styles.image}/>
        </div>
        </Col>
        <Col>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className={styles.description}><strong>Describe: </strong>{proData.description}</ListGroup.Item>
            <ListGroup.Item className={styles.price}><strong>Price: </strong>{proData.price}</ListGroup.Item>
            <div className={styles.buttonPosition}>
            <Link key={props.id} to={"/basket"}>
              <Button variant='outline-info m-1' onClick={handleAddToBasket} className={styles.buttonCard}>Add to cart</Button>
            </Link>
            </div>
          </ListGroup>
        </Card.Body>
        </Col>
      </Row>
      
        
          
      </Card>
    </div>
  );
};

export default SingleProduct;