import { MagnifyingGlass } from "phosphor-react";

export function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        placeholder="Busque uma transação"
        className="flex-1 border-0 rounded-md bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
      />
      <button
        type="submit"
        className="flex items-center justify-center border-2 
        border-green-300  bg-transparent text-green-300 cursor-pointer
         font-bold gap-3 p-3 rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-[0.2s]"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  );
}
