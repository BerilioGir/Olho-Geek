import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="bg-azul-foot flex items-center justify-between px-4 py-4 md:grid md:grid-cols-3">
      {/*primeira imagem*/}
      <Link to="/" aria-label="Página inicial" className="md:col-start-2 md:justify-self-center">
        <img src="/logo.png" alt="Olho Geek" className="block w-32 md:w-40"/>
      </Link>

      {/*div com os botões*/  }
  
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

          <button className="justify-self-start text-white flex items-center md:col-start-1 md:row-start-1 md:mx-10">
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
    </header>
  );
}