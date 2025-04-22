import React from 'react';
import './style.css';

const Card = ({ name, brand, onDelete, onEdit }) => {
  return (
    <div className="card">
      <div className="card-input-group">
        <label className="card-label">Nome:</label>
        <input className="card-input" type="text" value={name} readOnly />
      </div>
      <div className="card-input-group">
        <label className="card-label">Marca:</label>
        <input className="card-input" type="text" value={brand} readOnly />
      </div>
      <div className="card-buttons">
        <button className="btn btn-delete" onClick={onDelete}>Excluir</button>
        <button className="btn btn-edit" onClick={onEdit}>Editar</button>
      </div>
    </div>
  );
};

export default Card;
