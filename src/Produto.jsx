import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { InfoProduto } from './components/InfoProduto'

function Produto() {
    return (
        <>
            <Header />
            <main className='bg-fundo md:px-[12%]'>
                <InfoProduto />
            </main>
            <Footer />
        </>
    )
}

export default Produto