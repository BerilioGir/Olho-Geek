import { useState } from "react";

export function Header()  {
  const [aberto, setAberto] = useState(false);

  const links = [
    { nome: "Menu", href: "#menu" },
    { nome: "Perfil", href: "#perfil" },
    { nome: "Carrinho", href: "#carrinho" },
  ];

  return (
    <header className="bg-[#1e1e24]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#menu" className="text-2xl font-bold">Olho Geek</a>

        <button
          className="text-2xl md:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
          aria-expanded={aberto}
        >
          ☰
        </button>

        <nav
          className={`${aberto ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col bg-gray-900 md:static md:flex md:flex-row md:gap-6`}
        >
          {links.map((link) => (
            <a
              key={link.nome}
              href={link.href}  
              onClick={() => setAberto(false)}
              className="border-t border-gray-800 px-6 py-4 text-gray-300 hover:text-white md:border-0 md:p-0"
            >
              {link.nome}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}