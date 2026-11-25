function InfoProdutoPC() {
    return (
        <div className="flex gap-10">
            <img src="" alt="Imagem do Produto" className="h-175 aspect-6/7 rounded-[0.3125rem] bg-white"/>
            <DetalhesProdutoPC/>
        </div>
    )
}

function DetalhesProdutoPC() {
    return (
        <div className="text-white w-full flex flex-col gap-20">
            <div>
              <h2 className='font-inter text-[2rem]'>Nome Produto</h2>
              <div className="flex items-end gap-2">
                <h3 className='text-4xl font-inter'>R$ 85,00</h3>
                <p className='text-xl font-inter'>ou até <span className='font-bold'>4x de 28,33</span> sem juros</p>
              </div>
            </div>

            <form className="flex flex-col gap-12">
              <div className="flex justify-between items-center border-b-2 border-white pb-2">
                <h3 className="text-2xl font-inter">Cor:</h3>
                <div className="flex w-86 justify-between items-center">
                  <button className="bg-red-600 rounded-full border border-black w-8 h-8"></button>
                  <button className="bg-yellow-400 rounded-full w-8 h-8"></button>
                  <button className="bg-purple-800 rounded-full w-8 h-8"></button>
                  <button className="bg-amber-900 rounded-full w-8 h-8"></button>
                  <button className="bg-white rounded-full w-8 h-8"></button>
                  <button className="bg-black rounded-full w-8 h-8"></button>
                  <button className="bg-gray-500 rounded-full w-8 h-8"></button>
                </div>
              </div>



              <div className="flex justify-between items-center border-b-2 border-white pb-2">
                <h3 className="text-2xl font-inter">Tamanho:</h3>
                <div className="flex w-86 justify-between items-center">
                  <button className="font-nunito text-center px-3">P</button>
                  <button className="font-nunito text-center px-3">M</button>
                  <button className="font-nunito text-center px-3">G</button>
                  <button className="font-nunito text-center px-3">GG</button>
                  <button className="font-nunito text-center px-3">XGG</button>
                </div>
              </div>

              <div className="flex gap-20 items-center">
                <label htmlFor="" className="text-2xl font-inter">Quantidade:</label>
                <input type="number" className="border-lilas border-3 font-inter text-2xl w-40 text-center py-1 rounded-[0.625rem]"/>
              </div>
            </form>
        </div>
    )
}