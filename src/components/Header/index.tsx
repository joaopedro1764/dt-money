import logo from "../../assets/logo.svg"
export function Header() {

  return (

    <div className="w-full">
    <header className="w-full flex justify-between">
        <img alt="Logo Dt-Money" src={logo}/>
        <button className="bg-green-500 rounded-md p-[10px]">Nova transação</button>
    </header>
    </div>
  )
}
