import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

export function Header() {
  return (
    <header className="bg-azul-foot px-30 py-8">
      <div className="grid grid-cols-3 items-center">
        <button className="justify-self-start text-white flex items-center gap-4">
          <TiThMenu size="1.8rem"/>
          <p className="font-nunito">Menu</p>
        </button>
        <img src="./logo.png" alt="" className="justify-self-center"/>
        <div className="justify-self-end flex items-center gap-12">
          <button className="text-white flex items-center gap-4">
            <FaRegUser size="1.8rem"/>
            <p className="font-nunito">Meu Perfil</p>
          </button>
          <button className="text-white flex items-center gap-4">
            <LuShoppingCart size="1.8rem"/>
            <p className="font-nunito">Carrinho de Compras</p>
          </button>
        </div>
      </div>
      <nav className="flex justify-center pt-8">
        <ul className="flex flex-row justify-betwen items-center gap-12.5 ">
          <li className="font-nunito text-white text-xl"> <a href="">Camisetas</a> </li>
          <li className="font-nunito text-white text-xl"><a href="">Moletons</a></li> 
          <li className="font-nunito text-white text-xl"><a href="">Acessórios</a></li>
          <li className="font-nunito text-white text-xl"><a href="">Posters</a></li>
          <li className="font-nunito text-white text-xl"><a href="">Personalizados</a></li>
        </ul>
      </nav>
    </header>
  );
}