import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './style.css';

export default function Form(){

    const [ itens, setItens ] = useState([]);
    const [ itemAtual, setItemAtual] = useState({
        imagem: "",
        marca:  "",
        modelo: ""
    })

    const InputEditing = (e) => {
        const { name, value } = e.target;
        setItemAtual((prev) => ({...prev, [name]: value}))
    };  

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!itemAtual.marca | !itemAtual.modelo | !itemAtual.imagem ) {
            toast.warn('Erro ao cadastrar dados, preencha os campos corretamente');
            return;
        } 

        const novoItem = {
            ...itemAtual,
            id: Date.now(),
        }
        toast.success('Veículo cadastrado com sucesso');    
        setItens((prevItems) => [...prevItems, novoItem]);
        setItemAtual({ marca: "", modelo: "", imagem:""})
    }
    
    const cancel = (e) => {
        e.preventDefault();
        setItemAtual({ marca: "", modelo: "", imagem:""})
        
    }


    return(
        
        <div className='container-principal'>
             <ToastContainer autoClose ={3000} position='top-right' />
            <div className='container'>
                
            <h1 className='titulo-form'>Cadastrar veículo</h1>
            <form onSubmit={ handleSubmit }>
               <label>Marca</label>
               <input type='text' name='marca' value={ itemAtual.marca } onChange={ InputEditing }>
               </input>

               <label>Modelo</label>
               <input type='text' name='modelo' value={ itemAtual.modelo } onChange={ InputEditing }>
               </input>

               <label>Imagem</label>
               <input type='text' name='imagem' value={ itemAtual.imagem } onChange={ InputEditing }>
               </input>

               <button type='submit'>Adicionar</button>
               <button onClick={ cancel }>Cancelar </button>
            </form>
            </div>
            <div>
                {itens.map((item) => (
          <div key={item.id}>
            <h2>{item.marca} - {item.modelo}</h2>
            <img src={ item.imagem } alt={item.modelo}/>
          </div>
        ))}
      </div>
        </div>

        
    )

}
