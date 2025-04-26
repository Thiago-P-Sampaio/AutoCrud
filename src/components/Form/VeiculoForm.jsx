import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const VeiculoForm = ({ onAddVehicle }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && brand && image) {
      onAddVehicle({ name, brand, image });

      // Limpar o formulário
      setName('');
      setBrand('');
      setImage('');
    }
  };

  return (
    <Card className="p-4 mb-5" style={{ background: '#d9d9d9' }}>
      <h5 className="fw-bold mb-4 text-center">Informações sobre o veículo</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>URL da Imagem:</Form.Label>
          <Form.Control 
            type="text" 
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Cole o link da imagem"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Marca:</Form.Label>
          <Form.Control 
            type="text" 
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Digite a marca"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nome:</Form.Label>
          <Form.Control 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome"
          />
        </Form.Group>
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" type="reset" onClick={() => { setName(''); setBrand(''); setImage(''); }}>
            Cancelar
          </Button>
          <Button variant="dark" type="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default VeiculoForm;
