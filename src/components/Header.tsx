export default function Header(){
  return (
    <>
      <header 
        className="bg-[url(https://img.freepik.com/fotos-gratis/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.jpg)]
        h-96 w-full bg-cover">
          <aside className="absolute h-96 w-full bg-black/65">
            <div className="flex items-center justify-center flex-col h-96 w-full">
              <h1 className="text-4xl text-white text-center">
                <span className="font-sans font-light">Marmitaria <br/> da </span>
                <span className="font-dancing text-5xl font-bold text-yellow-300"> <br/> Silvânia</span>
              </h1>
              <div className=" text-white my-4 ">
                <p className="text-center">Rua Santa Isabel, n° 2153</p>
                <p className="text-center bg-green-600 p-2 px-4 rounded-xl">Segunda à Sábado  9:00h as 20:00h</p>
              </div>
            </div>
          </aside>
      </header>
    </>
  )
}
