import React from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends React.Component {

    /* O state do componente é similar as props, mas é privado e totalmente controlado pelo componente. */
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    /* Metodos do ciclo de vida */
    /* sempre é chamado pelo React após a saida do componete ter sido renderizada no DOM */
    componentDidMount() {
        this.loadProdutcs()
    }

    componentWillUnmount() {

    }
    /* Fim dos metodos do ciclo de vida */

    loadProdutcs = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...productInfo } = response.data

        this.setState({ products: docs, productInfo, page })
    }

    prevPage = () => {
        const { page, productInfo } = this.state

        if (page <= 1) return null

        const pageNumber = page - 1

        this.loadProdutcs(pageNumber)
    }

    nextPage = () => {
        const { page, productInfo } = this.state

        if (page === productInfo.pages) return null

        const pageNumber = page + 1

        this.loadProdutcs(pageNumber)
    }

    render() {

        const { products, page, productInfo } = this.state

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
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