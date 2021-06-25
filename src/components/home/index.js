import { Container, Content, Section, Layout } from './styles/home';
import LeftSide from './left-side';
import RightSide from './right-side';
import Main from './main';

const Home = () => {
  return (
    <Container>
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

export default Home;
