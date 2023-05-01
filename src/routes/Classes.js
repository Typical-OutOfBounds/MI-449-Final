import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const Classes = () => {
    return (
      <>
        <h2 className="text-center m-3">Classes</h2>
        <Container className="mb-5">
        <h2 className="mt-5">Fall 2022</h2>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>STT 380: Statistics for Data Scientists</Card.Title>
              <Card.Text>
              This was my favorite class this semester. I had taken AP Stats in high school, but this course was my first real brush with more advanced statistical ideas. 
              We started with covering that basics of probability and distributions, eventually moving towards simulations and ending with linear regression. 
              We also covered Bayesian inference, Monte Carlo Markov Chains, feature engineering, and much more. 
              I had grown tired of my more math related courses, but this class reignited my interest in math and statistics
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>GBL 323: Intro to Business Law</Card.Title>
              <Card.Text>
              I don’t think I would have ever taken a law class if this course was not required to finish my business cognate and minor, but I ended up finding the information much more interesting than I had originally expected.
               I must also say that my professor, Michael Behan was one of the kindest professor I have ever had.
               The concepts we learned were very basic and it seemed like the course was made to be fairly easy, but regardless I learned some useful info and gained a better understanding of our legal system.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>CSE 477: Web Architecture & Development</Card.Title>
              <Card.Text>
              I do not have whole lot to say about this course. I had a lot of prior experience with web development from my internship and prior courses. I did learn new technologies such as Flask and Jinja.
               Although I did not spend a terribly large amount of time on the course, I did learn how to use a streaming api to make a chat room and also user authentication.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>CSE 498: Capstone</Card.Title>
              <Card.Text>
              I have very mixed feelings about this course. 
              I had a great team and a cool sponsor which allowed me to meet Carl Page, but the class was definitely stressful.
               My TA, Griffin was fantastic, and I heard good stories about the other TAs. 
               Culturally, I don’t think I was a great fit with the course professors. I understood their degree of professionalism and promptness, but a few of their rules and attitudes did not fit with the workplaces I have had in the past, and where I would want to be in the future. They taught the course well and made sure every team turned out great results. 
              I learned a lot in the process and am glad to have finished.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2 className="mt-5">Spring 2023</h2>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>CSE 431: Algorithm Engineering</Card.Title>
              <Card.Text>
              
                CSE 431 is the big brother of CSE 331, and expands upon the first course to give the students a tool box of methods and algorithms to use to solve problems. 
                This course is much more challenging than its precursor, but I found solving the problems to be very rewarding. 
                Since I was unable to attend the live lectures due to a class conflict, I found myself treating this course as an after thought, and I really wish I hadn’t. The material is very mathematically interesting, especially when it got to optimization.
                My one big take away from this course is that I will never forget the Set Cover problem.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>CSE 482: Big Data Analysis</Card.Title>
              <Card.Text>
              This is again a course I have mixed feelings about. 
              I think with the growth of the CMSE department and data science as a whole at MSU, this course is struggling to find its place. 
              If I had not taken any CMSE courses, I believe I would have learned a lot more if I was just a standard Computer Science major.
               There were a few topics that were unique to this course such as using the twitter API, using hadoop, and working with streams with data. But everything else such as pandas, predictive models, clustering, and databases was taught in other courses and not as well.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>CSE 404: Intro to Machine Learning</Card.Title>
              <Card.Text>
              This was my hardest course this semester. 
              The material was really interesting and more conceptual and math focused instead of focused on programming models. 
              The homework assignments and quizzes took some time to think through, and I learned a lot about a few basic machine learning models, such as decision trees and neural networks.
               I was able to work on an interesting project with my team and explore how SMOTE affects imbalanced data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>CMSE 381: Fundamental of Data Science Methods</Card.Title>
              <Card.Text>
              I really enjoyed this class. The professor was funny and seemed to really care about teaching the material.
               We covered a lot in this course and it was my favorite class this semester. 
               I spent the most time with the material and really engaged with what it had to offer. 
               We started really understanding what it means to fit a model and make predictions, multiple types of regressions, splines, and much more. We did cover neural networks and decision trees, but not as heavily as in CSE 404. I am currently working on finishing the final project which involves predicting the number of of proteins expressed given an RNA gene sequence.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>MI 449: Advanced Web Dev + Database Management</Card.Title>
              <Card.Text>
              This course is the reason this website exists, since this site is my final project. MI 449 is an extension of MI 349, where we focus more on JavaScript, JavaScript frameworks, and css frameworks. We also worked with pulling information from a database. 
              Although I have had a lot of experience working with web dev, especially since I had to learn React for my Capstone in the fall, I did learn more about CSS frameworks and got to experience NextJS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </>
        
    );
}

export default Classes