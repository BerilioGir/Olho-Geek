export function Destaque() {
    return (
        <div>
            <div className="block md:hidden">
                <DestaqueMobile />
                <div className="h-px w-[75%] bg-white m-auto"></div>
            </div>

            <div className="hidden md:block">
                <DestaquePC />
                <div className="h-px w-[75%] bg-white m-auto"></div>
            </div>
        </div>
    )
}

function DestaqueMobile() {
    return (
        <div className="px-[5%] py-12">
            <BannerDestaqueMobile />
        </div>
    )
}

function BannerDestaqueMobile() {
    return (
        <>
            <img src="" alt="" className="w-full aspect-10/7 rounded-[0.625rem] bg-white" />
        </>
    )
}

function DestaquePC() {
    return (
        <div className="grid grid-cols-3 gap-x-30 gap-y-19 py-20">
            <div className="col-span-3">
                <BannerDestaquePC />
            </div>
            <div className="justify-self-start">
                <ProdutoDestaque />
            </div>
            <div className="justify-self-center">
                <ProdutoDestaque />
            </div>
            <div className="justify-self-end">
                <ProdutoDestaque />
            </div>
        </div>
    )
}

function BannerDestaquePC() {
    return (
        <>
            <img src="" alt="" className="w-full aspect-25/9 rounded-[0.625rem] bg-white" />
        </>
    )
}

function ProdutoDestaque() {
    return (
        <a href=""><img src="" alt="" className="h-95 w-80 rounded-[0.625rem] bg-white" /></a>
    )
}