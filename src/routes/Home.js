import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../logo2.png';
import "./Home.css"
import { Card } from "react-bootstrap";
import html_logo from '../images/jackson-sophat-_t-l5FFH8VA-unsplash.jpg'
import SVM from '../images/SVM_margin.png'
import { useNavigate } from 'react-router-dom';
import NavContext from '../contexts/NavContext'
import { useContext } from 'react'

const Home = () => {
    const fallClasses = ["STT 380", "GBL 323", "CSE 477", "CSE 498"];
    const springClasses = ["CSE 431", "CSE 482", "CSE 404", "CMSE 381", "MI 449"];
    const navigate = useNavigate();

    const handleClassesClick = () => {
        navigate('/classes')
    }

    const { onNavClick } = useContext(NavContext);

    const handleClick = () => {
        onNavClick('/classes');
        navigate('/classes');
    };

    return (
        <div className="home">
            <h2>Home</h2>
            <Container className="g-5">
                <Row className="g-5 fs-4">
                    <Col>
                        Learn about my senior year at Michigan State University and my preparation for life beyond college. <br/><br/>
                        Here you will find information about the classes I took and what I have learned. <br/><br/>
                        I’ll even throw in a few words about my job search for no extra charge. 
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Image src={logo} rounded />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <Card border="primary" style={{ height: '13rem' }} onClick={handleClick}>
                            <div className="row no-gutters h-100">
                                <div className="col-md-8">
                                    <Card.Body>
                                        <Card.Title>Fall</Card.Title>
                                        <Card.Text>
                                        <ul className="list-unstyled">
                                            {fallClasses.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className="col-md-4">
                                    <Card.Img
                                        src={html_logo}
                                        alt="Placeholder"
                                        className="h-100"
                                    />
                                </div>
                            </div>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card border="primary" style={{ height: '13rem' }} onClick={handleClassesClick}>
                            <div className="row no-gutters h-100">
                                <div className="col-md-8">
                                <Card.Body>
                                    <Card.Title>Spring</Card.Title>
                                    <Card.Text>
                                    <ul className="list-unstyled">
                                        {springClasses.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </Card.Text>
                                </Card.Body>
                                </div>
                                <div className="col-md-4">
                                <Card.Img
                                    src={SVM}
                                    alt="Placeholder"
                                    className="h-100"
                                />
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;