export function Footer() {
    return (
        <footer className="bg-azul-foot px-10 py-12 flex flex-col gap-12">
            <div className="flex justify-between items-center">
                <img src="./logo.png" alt="" className="h-12.25 w-25"/> 
                <nav>
                    <ul className="flex gap-10 items-center">
                        <li className="text-white font-nunito font-bold">Fale Conosco</li>
                        <li className="text-white font-nunito font-bold">Trocas e Devoluções</li>
                        <li className="text-white font-nunito font-bold">Rastrear Pedidos</li>
                        <li className="text-white font-nunito font-bold">FAQ</li>
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col gap-3">
                <h6 className="text-white font-nunito font-bold">Sobre Nós:</h6>
                <p className="text-white font-nunito font-bold w-200">Muito além de uma loja, a Olho Geek é uma loja de produtos criada para quem vive e respira a cultura geek e pop. Aqui você encontra produtos que representam suas paixões, seu estilo e sua personalidade</p>
            </div>
        </footer>
    )
}