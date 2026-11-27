import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

export function Header() {
  return (
    <header className="bg-azul-foot flex items-center justify-between px-4 py-4 md:grid md:grid-cols-3">
      {/*primeira imagem*/}
      <img src="./logo.png" alt="" className="flex flex-item justify-center w-32 md:col-start-2 md:justify-self-center md:w-40"/>
      {/*div com os botões*/  }
  
        <div className="flex items-center gap-5 md:gap-10 md:col-start-3 md:justify-self-end md:mx-10">
          
          <button className="text-white flex items-center gap-3 p-2">
            <FaRegUser size="1.8rem"/>
            <p className="font-nunito hidden md:block">Meu Perfil</p>
          </button>
          
          <button className="text-white flex items-center gap-3 p-2">
            <LuShoppingCart size="1.8rem"/>
            <p className="font-nunito hidden md:block">Carrinho de Compras</p>
          </button>

          <button className="justify-self-start text-white flex items-center  md:hidden">
            <TiThMenu size="1.8rem"/>
            <p className="font-nunito hidden md:block">Menu</p>
          </button>
        </div>

      {/*menu de navegação, ainda não sei como implementar no mobile como menu hamburger*/ }

      
        <nav className="pt-8 hidden md:flex md:col-span-3 md:justify-center">
          <ul className="flex flex-row justify-between items-center gap-12.5 ">
            <li className="font-nunito text-white text-xl"> <a href="">Camisetas</a> </li>
            <li className="font-nunito text-white text-xl"><a href="">Moletons</a></li>
            <li className="font-nunito text-white text-xl"><a href="">Acessórios</a></li>
            <li className="font-nunito text-white text-xl"><a href="">Posters</a></li>
            {/*<li className="font-nunito text-white text-xl"><a href="">Personalizados</a></li>*/}
          </ul>
        </nav>
      
    </header>
  );
}