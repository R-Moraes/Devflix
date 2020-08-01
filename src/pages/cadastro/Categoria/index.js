import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome:'',
    descricao: '',
    cor: '',
  }
  const [categoria, setCategoria] = useState([]);
  const [value, setValues] = useState(valoresIniciais);


  
  function setValue(chave, valor){
    setValues({
      ...value,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento){
    setValue(infosDoEvento.target.getAttribute('name'),
     infosDoEvento.target.value
     );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {value.nome}</h1>

      <form onSubmit={function handSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategoria([
          ...categoria,
          value
        ]);

        setValues(valoresIniciais);
      }}>
          <FormField
          label='Nome da Categoria'
          type='text'
          name='nome'
          value={value.nome}
          onChange={handleChange}
          />

          <FormField
          label='Decrição'
          type='textarea'
          name='descricao'
          value={value.descricao}
          onChange={handleChange}
          />

          {/* <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={value.descricao}
                name='descricao'
                onChange={handleChange}
              />
            </label>
          </div> */}

          <FormField
          label='Cor'
          type='color'
          name='cor'
          value={value.cor}
          onChange={handleChange}
          />

          {/* <div>
            <label>
              Cor:
              <input
                type="color"
                value={value.cor}
                name='cor'
                onChange={handleChange}
              />
            </label>
          </div> */}  
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categoria.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;