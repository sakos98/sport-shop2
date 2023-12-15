import styles from './Register.module.scss';
const { Container, Form, Button, Row, Col } = require("react-bootstrap");

const Register = () => {
    return (
        <Container>
        <div className={styles.positionFrom}>
        <Form className={styles.form}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    We'll never share your password with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Repeat Password" />
                <Form.Text className="text-muted">
                    We'll never share your password with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
        </div>
    </Container>
    )
}

export default Register;