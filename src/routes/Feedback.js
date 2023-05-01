import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'
import { Row, Col } from 'react-bootstrap';

const Feedback = () => {
    const [formData, setFormData] = useState({ comment: '', email: '' });
    const [data, setData] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
         async function fetchData () {
            const { data: comments } = await supabase
                .from('feedback')
                .select('*')
                setComments(comments);
        }
        fetchData();
    }, []);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // do something with formData, e.g. submit to server
        const profanityRespone = await fetch('https://www.purgomalum.com/service/json?text=' + formData.comment);
        const json = await profanityRespone.json();
        setData(json);
        if (json.result !== formData.comment) {
            alert("Please do not use profanity");
        } else {
          async function inserData() {
            const {error} = await supabase
            .from('feedback')
            .insert({ email: formData.email, comment: formData.comment })
            if (error) {
              alert("There was an error submitting your feedback");
            }
          }
          inserData();
          setFormData({ comment: '', email: '' });
        }
        console.log("Here is the data", json);

        // fetch('https://www.purgomalum.com/service/json?text=' + formData.comment)
        // .then((response) => response.json())
        // .then((data) => setData(data))
        // .then(() => {
        // if (data.result !== formData.comment) {
        //     alert("Please do not use profanity");
        // } else {
        //   async function inserData() {
        //     const {error} = await supabase
        //     .from('feedback')
        //     .insert({ email: formData.email, comment: formData.comment })
        //     if (error) {
        //       alert("There was an error submitting your feedback");
        //     }
        //   }
        //   inserData();
        //   setFormData({ comment: '', email: '' });
        // }
        // console.log("Here is the data", data);
        // });
      };

      function AllFeedback() {
        return (
          <Container>
          {
            comments == null ? <></> :
            comments.map(b => (
              <Row className="mt-3">
                <Col>
                {b.email} said: {b.comment}
                </Col>
              </Row>
            ))
          }

          </Container>
          
        )
      }
      

    return (
        <div>
            <h2 className="text-center m-3">Feedback</h2>
            <Container>
            <Card>
            <Form className="m-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleInputChange} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicComment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control onChange={handleInputChange} name="comment" type="comment" placeholder="Comment" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Card>
            </Container>
            <AllFeedback/>
            
        </div>
    )
}

export default Feedback;