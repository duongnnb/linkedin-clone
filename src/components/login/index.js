import { Container, Nav, Join, SignIn, Section, Hero, Form, Google } from './styles/login';
import { connect } from 'react-redux';
import { signInAPI } from '../../actions';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a>
          <img src="/images/login-logo.svg" alt="Login" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { user: state.userState.user };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
