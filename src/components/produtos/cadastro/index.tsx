import {useState} from 'react'

import { Layout, Input} from 'components';

export const CadastroProdutos: React.FC = () => {
    const [sku, setSku] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    const submit = () => {
        const produto = {
            sku, preco, nome, descricao
        }
        console.log(produto)
    }

    return (
        <Layout title="Cadastro de Produtos">
            <div className="columns">
                <Input
                    columnClasses='is-half' 
                    id='input-sku' 
                    label='SKU *'
                    value={sku} 
                    onChange={setSku}
                    placeholder='Digite aqui o SKU do Produto'
                />
                <Input 
                    columnClasses='is-half' 
                    id='input-nome' 
                    label='Preco *'
                    value={preco} 
                    onChange={setPreco}
                    placeholder='Digite aqui o Preco do Produto'
                />
            </div>
    
            <div className="columns">
                <Input
                    columnClasses='is-full' 
                    id='input-nome' 
                    label='Nome *'
                    value={nome} 
                    onChange={setNome}
                    placeholder='Digite aqui o Nome do Produto'
                />
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