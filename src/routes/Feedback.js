import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // do something with formData, e.g. submit to server
        fetch('https://www.purgomalum.com/service/json?text=' + formData.comment)
        .then((response) => response.json())
        .then((data) => setData(data));
        if (data.result != formData.comment) {
            alert("Please do not use profanity");
        }
        console.log(data);
      };

      function AllFeedback() {
        return (
          <table className="book-table">
            <tr>
              <th>Email</th>
              <th>comment</th>
            </tr>
          {
            comments == null ? <></> :
            comments.map(b => (
              <tr>
                <td>{b.email}</td>
                <td>{b.comment}</td>
              </tr>
            ))
          }
          </table>
        )
      }
      

    return (
        <div>
            <h2>Feedback</h2>
            <Container>
            <Card>
            <Form className="m-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleInputChange} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicComment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control onChange={handleInputChange} name="comment" type="comment" placeholder="Comment" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
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