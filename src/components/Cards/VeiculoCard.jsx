import React from 'react';
import { Card, Button } from 'react-bootstrap';

const VeiculoCard = ({ name, brand, image }) => {
  return (
    <Card className="p-3" style={{ background: '#d9d9d9' }}>
      <div 
        style={{
          background: '#ffecec',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '10px'
        }}
      >
        {image ? (
          <img src={image} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ) : (
          <span>IMAGEM</span>
        )}
      </div>
      <div className="mt-3">
        <p><strong>Nome:</strong></p>
        <p className="bg-white p-2 rounded">{name}</p>

        <p><strong>Marca:</strong></p>
        <p className="bg-white p-2 rounded">{brand}</p>

        <div className="d-flex justify-content-between mt-3">
          <Button variant="light" className="fw-bold border">Excluir</Button>
          <Button variant="light" className="fw-bold border">Editar</Button>
        </div>
      </div>
    </Card>
  );
};

export default VeiculoCard;
