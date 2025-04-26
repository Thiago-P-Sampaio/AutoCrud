import { useState, useEffect, use } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Card } from "react-bootstrap";
import "./style.css";

export default function Form() {
  const [itens, setItens] = useState([]);
  const [exibirModal, setExibirModal] = useState(false);
  const [itemAtual, setItemAtual] = useState({
    imagem: "",
    marca: "",
    modelo: "",
  });
  const [carregou, setCarregou] = useState(false);

  useEffect(() => {
    const itensSalvos = localStorage.getItem("cacheLocal");
    if (itensSalvos) {
      try {
        const dados = JSON.parse(itensSalvos);
        if (Array.isArray(dados)) {
          setItens(dados);
        }
      } catch (e) {
        console.error("Erro ao carregar os dados:", e);
      }
    }
    setCarregou(true);
  }, []);

  useEffect(() => {
    if (carregou) {
      localStorage.setItem("cacheLocal", JSON.stringify(itens));
    }
  }, [itens, carregou]);

  const EdicaoInput = (e) => {
    const { name, value } = e.target;
    setItemAtual((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!itemAtual.marca || !itemAtual.modelo || !itemAtual.imagem) {
      toast.warn("Erro ao cadastrar dados, preencha os campos corretamente");
      return;
    }

    if (itemAtual.id) {
      const novaLista = itens.map((item) =>
        item.id === itemAtual.id ? itemAtual : item
      );
      toast.success("Veículo atualizado com sucesso!");
      setItens(novaLista);
      return;
    }

    const novoItem = {
      ...itemAtual,
      id: Date.now(),
    };
    console.log(novoItem);
    toast.success("Veículo cadastrado com sucesso");
    setItens((prevItems) => [...prevItems, novoItem]);
    setItemAtual({ marca: "", modelo: "", imagem: "" });
    setExibirModal(false);
  };

  const Cancelar = (e) => {
    e.preventDefault();
    setItemAtual({ marca: "", modelo: "", imagem: "" });
    setExibirModal(false);
  };

  const excluirItem = (id) => {
    const confirmar = window.confirm("Deseja excluir o veículo?");
    if (confirmar) {
      const novaLista = itens.filter((item) => item.id !== id);
      setItens(novaLista);
      toast.info("Veículo removido");
    }
  };

  const editarItem = (id) => {
    let editar = itens.map((item) => item.id === id);
    if (editar) {
      editar = itens.find((item) => item.id === id);
      setItemAtual({
        marca: editar.marca,
        modelo: editar.modelo,
        imagem: editar.imagem,
        id: editar.id,
      });
    }
    setExibirModal(true);
  };

  return (
    <div className="container-principal">
      <button onClick={() => setExibirModal(true)}>Olá</button>
      <Modal show={exibirModal} onHide={() => setExibirModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar veículo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="d-flex flex-column gap-3" onSubmit={submitForm}>
            <div className="form-group">
              <label>Marca</label>
              <input
                type="text"
                name="marca"
                className="form-control"
                value={itemAtual.marca}
                onChange={EdicaoInput}
              />
            </div>

            <div className="form-group">
              <label>Modelo</label>
              <input
                type="text"
                name="modelo"
                className="form-control"
                value={itemAtual.modelo}
                onChange={EdicaoInput}
              />
            </div>

            <div className="form-group">
              <label>Imagem (URL)</label>
              <input
                type="text"
                name="imagem"
                className="form-control"
                value={itemAtual.imagem}
                onChange={EdicaoInput}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success">
                Adicionar
              </button>
              <button onClick={Cancelar} className="btn btn-secondary">
                Cancelar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>


      {/* Alterações aqui em baixo ↓ */}
      <Card>
        {itens.map((item) => (
          <div key={item.id}>
            <h2>
              {item.marca} - {item.modelo}
            </h2>
            <img src={item.imagem} alt={item.modelo} />
            <Button
              variant="danger"
              onClick={() => excluirItem(item.id)}
              className="mt-2"
            >
              Excluir
            </Button>
            <Button variant="warning" onClick={() => editarItem(item.id)}>
              Editar
            </Button>
          </div>
        ))}
      </Card>
    </div>
  );
}
