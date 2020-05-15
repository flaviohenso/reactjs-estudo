import React from 'react'
import api from '../../services/api'

import './styles.css'

export default class Main extends React.Component {

    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProdutcs()
    }

    loadProdutcs = async () => {
        const response = await api.get('/products')
        this.setState({ products: response.data.docs })
    }

    render() {

        const { products } = this.state

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button>Anterior</button>
                    <button>Proximo</button>
                </div>
            </div>
        )
    }
}

/* const Main = () => ( //Só retorna um elemento JSX (se remover o DIV dá erro)
    <div>
        <h1>Hello Flávio Estudos</h1>
        <h2>Aprendendo ReactJS</h2>
    </div>
)

export default Main */