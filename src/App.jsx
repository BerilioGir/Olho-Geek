import { useState } from 'react'
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { Produto } from './components/Produto';

function App() {
  const [produtos, setProdutos] = useState([])

  return (
    <body>
      <Header />
      <main className='bg-fundo'>
        <Produto />
      </main>
      <Footer />
    </body>
  )
}

export default App
