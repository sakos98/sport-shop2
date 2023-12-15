import styles from './Login.module.scss';
const { Container, Form, Button } = require("react-bootstrap");

const Login = () => {
    return (
        <Container>
            <div className={styles.positionFrom}>
                <Form className={styles.form}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default Login;