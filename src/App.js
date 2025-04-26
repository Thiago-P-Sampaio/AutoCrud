import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import VeiculoForm from './components/Form/VeiculoForm.jsx';
import VeiculoCard from './components/Cards/VeiculoCard.jsx';

const App = () => {
  const [vehicles, setVehicles] = useState([]);

  const handleAddVehicle = (newVehicle) => {
    setVehicles([...vehicles, newVehicle]);
  };

  return (
    <>
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <Container className="my-4">
        {/* Formulário de Cadastro */}
        <VeiculoForm onAddVehicle={handleAddVehicle} />

        {/* Lista de Veículos */}
        <h5 className="mt-5 mb-3 fw-bold">Veículos cadastrados</h5>
        <Row className="g-4">
          {vehicles.map((vehicle, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <VeiculoCard 
                name={vehicle.name}
                brand={vehicle.brand}
                image={vehicle.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
