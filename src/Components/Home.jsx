import { Col, Row, Container } from "react-bootstrap";
import Showcase from "./Showcase";

const Home = () => {
  return (
    <Container fluid>
      <h1 className="text-center m-3">Strive Job Finder</h1>
    
        <Row>
          <Col>
            <Showcase/>
          </Col>
        </Row>
    
   </Container>
  );
};

export default Home;
