import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom"

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-azul-foot flex items-center justify-between px-4 py-4 md:grid md:grid-cols-3">
      <Link to="/" aria-label="Página inicial" className="md:col-start-2 md:justify-self-center">
        <img src="/logo.png" alt="Olho Geek" className="block w-32 md:w-40"/>
      </Link>
  
        <div className="flex items-center gap-5 md:contents">
          <div className="flex items-center gap-5 md:gap-10 md:col-start-3 md:row-start-1 md:justify-self-end md:mx-10">
            <button className="text-white flex items-center gap-3 p-2">
              <FaRegUser size="1.8rem"/>
              <p className="font-nunito hidden md:block">Meu Perfil</p>
            </button>

            <button className="text-white flex items-center gap-3 p-2">
              <LuShoppingCart size="1.8rem"/>
              <p className="font-nunito hidden md:block">Carrinho de Compras</p>
            </button>
          </div>

          <button onClick={() => setMenuAberto(true)} className="justify-self-start text-white flex items-center md:col-start-1 md:row-start-1 md:mx-10">
            <TiThMenu size="1.8rem"/>
            <p className="font-nunito hidden md:block">Menu</p>
          </button>
        </div>

      <nav className="pt-8 hidden md:flex md:col-span-3 md:justify-center">
        <ul className="flex flex-row justify-betwen items-center gap-12.5 ">
          <Link to="/camisetas" className="font-nunito text-white text-xl">Camisetas</Link>
          <Link to="/moletons" className="font-nunito text-white text-xl">Moletons</Link>
          <Link to="/acessorios" className="font-nunito text-white text-xl">Acessórios</Link>
          <Link to="/posters" className="font-nunito text-white text-xl">Posters</Link>
          <Link to="/personalizados" className="font-nunito text-white text-xl">Personalizados</Link>
        </ul>
      </nav>

      <div
        onClick={() => setMenuAberto(false)}
        className={`fixed top-0 left-0 z-40 h-full w-full bg-black/50 transition-opacity duration-300 ${menuAberto ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      ></div>

      {/*menu*/}
      <aside className={`fixed top-0 left-0 z-50 flex h-full w-full flex-col bg-[#1c1b22] transition-transform duration-300 md:w-[345px] ${menuAberto ? "translate-x-0" : "-translate-x-full"}`}>
        <button onClick={() => setMenuAberto(false)} className="text-white flex items-center gap-3 px-6 py-5">
          <TiThMenu size="1.8rem"/>
          <p className="font-nunito text-sm">Menu</p>
        </button>

        <nav className="flex-1 px-6">
          <ul className="flex flex-col gap-6">
            {/*esses 3 só aparecem no mobile*/}
            <Link to="/roupas" onClick={() => setMenuAberto(false)} className="font-nunito text-white text-lg md:hidden">Roupas</Link>
            <Link to="/acessorios" onClick={() => setMenuAberto(false)} className="font-nunito text-white text-lg md:hidden">Acessórios</Link>
            <Link to="/personalizados" onClick={() => setMenuAberto(false)} className="font-nunito text-white text-lg md:hidden">Itens personalizados</Link>

            <Link to="/perfil" onClick={() => setMenuAberto(false)} className="font-nunito text-white text-lg">Seu Perfil</Link>
            <Link to="/carrinho" onClick={() => setMenuAberto(false)} className="font-nunito text-white text-lg">Carrinho de compras</Link>
            <Link to="/pedidos" onClick={() => setMenuAberto(false)} className="font-nunito text-white text-lg">Meus Pedidos</Link>
            <Link to="/desejos" onClick={() => setMenuAberto(false)} className="font-nunito text-white text-lg">Lista de desejos</Link>
            <Link to="/rastreio" onClick={() => setMenuAberto(false)} className="font-nunito text-white text-lg">Rastrear seu pedido</Link>
          </ul>
        </nav>

        <div className="grid grid-cols-2">
          <Link to="/cadastro" onClick={() => setMenuAberto(false)} className="font-nunito bg-[#b9a8f5] py-4 text-center">cadastrar-se</Link>
          <Link to="/login" onClick={() => setMenuAberto(false)} className="font-nunito bg-[#76e5bc] py-4 text-center">entrar</Link>
        </div>
      </aside>
    </header>
  );
}