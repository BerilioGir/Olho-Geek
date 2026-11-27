import { useEffect, useState } from "react";
import { CardProduto } from "./CardProduto";
import { API_URL } from "../api";

export function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/produtos`)
            .then((resposta) => resposta.json())
            .then((dados) => setProdutos(dados))
            .catch(() => setErro(true));
    }, []);

    return (
        <div>
            {erro && (
                <p className="text-center text-white font-nunito py-6">
                    Não foi possível carregar os produtos. A API está rodando? (npm run api)
                </p>
            )}

            <div className="block md:hidden">
                <ProdutosMobile produtos={produtos} />
            </div>

            <div className="hidden md:block">
                <ProdutosPC produtos={produtos} />
            </div>
        </div>
    )
}

function ProdutosMobile({ produtos }) {
    return (
        <div className="flex flex-col gap-10 items-center py-12">
            <h1 className="text-[2rem] font-nunito text-white font-bold">Todos os Produtos</h1>
            <GridProdutosMobile produtos={produtos} />
            <SeletorPaginaMobile/>
        </div>
    )
}

function GridProdutosMobile({ produtos }) {
    return (
        <div className="grid grid-cols-1 gap-y-15">
            {produtos.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
            ))}
        </div>
    )
}

function SeletorPaginaMobile() {
    return (
        <div className="grid grid-cols-[repeat(6,max-content)] justify-between w-[75%] mx-auto my-8">
            <BotaoPagina/>
            <BotaoPagina/>
            <BotaoPagina/>
            <BotaoPagina/>
            <BotaoPagina/>
            <BotaoPagina/>
        </div>
    )
}

function ProdutosPC({ produtos }) {
    return (
        <div className="py-20 flex flex-col gap-9">
            <div className="flex items-center justify-between">
                <h1 className="text-[2rem] font-nunito text-white font-bold">Todos os Produtos</h1>
                <select name="" id="" className="font-nunito text-2xl text-white border-2 rounded-[0.5625rem] border-lilas px-2">
                    <option value="">Filtrar</option>
                </select>
            </div>
            <GridProdutosPC produtos={produtos} />
            <SeletorPaginaPC/>
        </div>
    )
}

function GridProdutosPC({ produtos }) {
    return (
        <div className="grid grid-cols-[repeat(4,max-content)] gap-y-20 justify-between">
            {produtos.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
            ))}
        </div>
    )
}

function SeletorPaginaPC() {
    return (
        <div className="grid grid-cols-6 w-[25%] mx-auto my-10">
            <BotaoPagina/>
            <BotaoPagina/>
            <BotaoPagina/>
            <BotaoPagina/>
            <BotaoPagina/>
            <BotaoPagina/>
        </div>
    )
}

function BotaoPagina() {
    return (
        <button className="w-10 h-10 border-2 border-white rounded-[0.3125rem] font-nunito font-black text-xl text-white">1</button>
    )
}