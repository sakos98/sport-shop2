import React from 'react';
import styles from './BasketPage.module.scss'
import { Row, Col, Card, ListGroup, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BasketPage = (props) => {
  const { id } = useParams();
  const imageOne = `${process.env.PUBLIC_URL}/images/${id}.jpg`;
  
  return (
    <div>
      <h1>Basket</h1>
      <Row>
        <Row>
          <Col sm={8}>
            <Row>
              <div className={styles.positionBasket}>
                <Col sm={3}>
                  <Card.Img variant="top" src="images/302b5262-8e79-4367-814f-d678601bf1cd.jpg" className={styles.image} />
                </Col>
                <Col sm={6}>
                  <div className={styles.positionTitle}>
                    <ListGroup.Item className={styles.title}>Nike Zoom Vapor</ListGroup.Item>
                    <ListGroup.Item className={styles.describe}>Nike Zoom Vapor, rozmiar 45, color biały-czerwony</ListGroup.Item>
                  </div>
                </Col>
                <Col sm={2}>
                  <Form.Select aria-label="Default select example">
                    <option>1</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </Form.Select>
                </Col>
              </div>

            </Row>
          </Col>
          <Col sm={4}>
            <h1>Do zapłaty</h1>
            <div className={styles.price}>
              <p>Wartość produktów</p><p>900</p>
            </div>
            <div className={styles.priceDelivery}>
              <p>Wartość produktów</p><p>29,99</p>
            </div>
            <div className={styles.priceEnd}>
              <strong>Do zapłaty</strong><strong>929,99</strong>
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
};



export default BasketPage;
