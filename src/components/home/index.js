import { Container, Section, Layout } from './styles/home';
import LeftSide from './left-side';
import RightSide from './right-side';
import Main from './main';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>Find talented pros in record time with Upwork and keep business moving</p>
      </Section>
      <Layout>
        <LeftSide>Left side</LeftSide>
        <Main>Main</Main>
        <RightSide>Right side</RightSide>
      </Layout>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { user: state.userState.user };
};

export default connect(mapStateToProps)(Home);
