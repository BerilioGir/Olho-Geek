import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Produtos } from './components/Produtos'

function Camisetas() {
  const [produtos, setProdutos] = useState([])

  return (
    <>
      <Header />
      <main className='bg-fundo md:px-[12%]'>
        <Produtos />
      </main>
      <Footer />
    </>
  )
}

export default Camisetas
