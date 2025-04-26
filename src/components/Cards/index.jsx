import React from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const CardComponent = ({ name, brand, onDelete, onEdit }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="shadow-sm">
      <Card.Body>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" value={name} readOnly />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBrand">
          <Form.Label>Marca:</Form.Label>
          <Form.Control type="text" value={brand} readOnly />
        </Form.Group>

        <Row>
          <Col>
            <Button variant="danger" className="w-100" onClick={onDelete}>
              Excluir
            </Button>
          </Col>
          <Col>
            <Button variant="primary" className="w-100" onClick={onEdit}>
              Editar
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
