import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="user-name" placeholder="test" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="FullName">
        <Form.Label>FullName</Form.Label>
        <Form.Control type="full-name" placeholder="name" />
        
      </Form.Group>
            <Form.Group className="mb-3" controlId="Age">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="age" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;