import { CiHeart } from "react-icons/ci";

export function CardProduto() {
    return (
        <div className="flex flex-col w-66 gap-1">

            <div tabIndex={0} className="bg-white w-66 h-78.5 rounded-xl group relative overflow-hidden">
                <img src="" alt="Produto" className="absolute inset-0 w-full h-full" />

                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-focus-within:opacity-100 group-focus-within:pointer-events-auto md:group-hover:opacity-100 md:group-hover:pointer-events-auto">
                    <div className="flex items-center gap-2">
                        <a href="" className="rounded-lg bg-green-600 px-4 py-3 transition hover:bg-green-800 cursor-pointer text-sm font-bold text-white font-nunito">Visualizar produto</a>
                        {/* Alterar Funcionamento quando aplicar React*/}
                        <button type="button" className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-black transition hover:bg-red-500 hover:text-white cursor-pointer">
                            <CiHeart size={28} />
                        </button>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h4 className="text-white font-nunito w-40">Nome Produto</h4>
                <p className="text-right text-white font-nunito font-extrabold text-2xl ">R$ 40,00</p>
            </div>
        </div>
    )
}