import logo from "../../assets/logo.svg";
export function Header() {
  return (
    <div className="flex justify-center bg-gray-900 pt-10 pb-32">
      <header className="w-full max-w-[1120px] px-3 flex justify-between items-center">
        <img alt="Logo Dt-Money" src={logo} />
        <button className="bg-green-500 rounded-md cursor-pointer h-[50px] border-0 p-4 text-white font-bold hover:duration-700 hover:bg-green-700">
          Nova transação
        </button>
      </header>
    </div>
  );
}
