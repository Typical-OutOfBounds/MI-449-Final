import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from '../images/profile.png';
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
            <Container className="g-5 mt-5">
                <Row className="g-5 fs-4">
                    <Col>
                        Hi, I'm Aidan! <br/><br/>
                        Learn about my senior year at Michigan State University and my preparation for life beyond college. <br/><br/>
                        Here you will find information about the classes I took and what I have learned. <br/><br/>
                        I’ll even throw in a few words about my job search for no extra charge. <br/><br/>
                        Feel free to comment on the feedback page!
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Image src={profile} fluid rounded alt='A photo of me'/>
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
                                        alt="brackets"
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
                                    alt="support vector machine"
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