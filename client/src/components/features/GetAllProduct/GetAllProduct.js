import styles from './GetAllProduct.module.scss';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { IMG_URL } from '../../../config';

const GetAllProducts = ({  id, name, price, description }) => {

  const imageOne =  `${process.env.PUBLIC_URL}/images/${id}.jpg`;
  return (
    <>
    <div className={styles.card}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageOne} className={styles.image}/>
        <Card.Body>
          <Card.Title className={styles.title}>{name}</Card.Title>
          <ListGroup variant="flush">
            <Card.Text className={styles.description}>{description}</Card.Text>
            <div className={styles.priceButton}>
            <Card.Text className={styles.price}><strong>Price: </strong> {price}</Card.Text>
          <Link to={"/products/" + id}>
            <Button variant="dark" >Read more</Button>
          </Link>
          </div>
          </ListGroup>
        </Card.Body>
      </Card>
  </div>
  </>
  );
};

export default GetAllProducts;