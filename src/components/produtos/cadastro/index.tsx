import {useState} from 'react'

import { Layout } from "components";

export const CadastroProdutos: React.FC = () => {
    const [sku, setSku] = useState('');
    const [preco, setPreco] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const submit = () => {
        const produto = {
            sku, preco, nome, descricao
        }
        console.log(produto)
    }

    return (
        <Layout title="Cadastro de Produtos">
            <div className="columns">
                <div className="field column is-half">
                    <label htmlFor="input-sku" className="label">SKU *</label>
                    <div className="control">
                        <input onChange={event => setSku(event.target.value)} value={sku}  id="input-sku" type="text" className="input" placeholder="Digite o SKU do Produto" />
                    </div>
                </div>

                <div className="field column is-half">
                    <label htmlFor="input-preco" className="label">Preço *</label>
                    <div className="control">
                        <input onChange={event => setPreco(event.target.value)} value={preco} id="input-preco" type="text" className="input" placeholder="Digite o Preço do Produto"/>
                    </div>
                </div>
            </div>
            
            <div className="columns">
                <div className="field column is-full">
                    <label htmlFor="input-nome" className="label">Nome *</label>
                    <div className="control">
                        <input onChange={event => setNome(event.target.value)} value={nome}  id="input-nome" type="text" className="input" placeholder="Digite o Nome do Produto"/>
                    </div>
                </div>
            </div>
 
            <div className="columns">
                <div className="field column is-full">
                    <label htmlFor="input-descricao" className="label">Descrição *</label>
                    <div className="control">
                        <textarea onChange={event => setDescricao(event.target.value)} value={descricao} id="input-descricao" className="textarea" placeholder="Digite a Descrição do Produto"></textarea>
                    </div>
                </div>
            </div>
            
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={submit}>Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}