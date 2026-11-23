import { CardProduto } from "./CardProduto";

export function Produtos() {
    return (
        <div>
            <div className="block md:hidden">
                <ProdutosMobile />
            </div>

            <div className="hidden md:block">
                <ProdutosPC />
            </div>
        </div>
    )
}

function ProdutosMobile() {
    return (
        <div className="flex flex-col gap-10 items-center py-12">
            <h1 className="text-[2rem] font-nunito text-white font-bold">Todos os Produtos</h1>
            <GridProdutosMobile />
            <SeletorPaginaMobile/>
        </div>
    )
}
function GridProdutosMobile() {
    return (
        <div className="grid grid-cols-1 grid-rows-6 gap-y-15">
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
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

function ProdutosPC() {
    return (
        <div className="py-20 flex flex-col gap-9">
            <div className="flex items-center justify-between">
                <h1 className="text-[2rem] font-nunito text-white font-bold">Todos os Produtos</h1>
                <select name="" id="" className="font-nunito text-2xl text-white border-2 rounded-[0.5625rem] border-lilas px-2">
                    <option value="">Filtrar</option>
                </select>
            </div>
            <GridProdutosPC/>
            <SeletorPaginaPC/>
        </div>
    )
}

function GridProdutosPC() {
    return (
        <div className="grid grid-cols-[repeat(4,max-content)] grid-rows-4 gap-y-20 justify-between">
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
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