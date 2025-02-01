import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-[rgba(0,0,0,0.75)]" />
      <Dialog.Content className="fixed min-w-[32rem] min-h-[500px] rounded-md py-10 px-12 inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800">
        <Dialog.Title>Nova transação</Dialog.Title>
        <Dialog.Close>
          <X
            size={24}
            className="absolute right-3 top-4 cursor-pointer text-gray-500"
          />
        </Dialog.Close>
        <form className="mt-8 flex flex-col gap-4">
          <input
            className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            placeholder="Descrição"
          />
          <input
            type="number"
            className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            placeholder="Preço"
          />
          <input
            className="rounded-md border-0 bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500"
            placeholder="Categoria"
          />
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button className="bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-0 text-gray-300">Entrada</button>
            <button className="bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-0 text-gray-300">Saída</button>
          </div>
          <button className="h-[58px] border-0 bg-green-500 text-white font-bold px-5 top-6 rounded-md cursor-pointer hover:bg-green-700 hover:duration-300">
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
