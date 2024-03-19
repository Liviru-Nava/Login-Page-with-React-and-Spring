import React, { /*useState*/ } from 'react';
import {Container, Form} from "reactstrap";
import './Login.css';

const Login = () => {
    // State variables
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // // Event handlers
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add your login logic here
    // };

    return (
        <section className='Form'>
            <Container>
                <Form>
                    <div className="form_container">
                        <div className="form_heading">
                            <h1>Sign In</h1>
                        </div>
                        <div className="input_container">
                            <div className="username_input">
                                <input type="text" placeholder="Username" id='username'/>
                            </div>
                            <div className="password_input">
                                <input type="password" placeholder="Password" id='password'/>
                            </div>
                        </div>
                        <div className="button_submit">
                            <button type="submit" id='submit'><span></span>Login</button>
                        </div>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default Login;