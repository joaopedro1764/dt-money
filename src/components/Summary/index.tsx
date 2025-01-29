import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <div className="w-full flex justify-center items-center ">
      <section className="w-full max-w-[1120px] grid grid-cols-3 gap-2 -mt-20">
        <div className="bg-gray-600 rounded-md p-8">
          <header className="flex justify-between items-center text-gray-300">
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00B37E" />
          </header>
          <strong className="block mt-4 text-3xl">R$ 17.400,00</strong>
        </div>
        <div className="bg-gray-600 rounded-md p-8">
          <header className="flex justify-between items-center text-gray-300">
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>
          <strong className="block mt-4 text-3xl">R$ 17.400,00</strong>
        </div>
        <div className="bg-green-700 rounded-md p-8">
          <header className="flex justify-between items-center text-gray-300">
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong className="block mt-4 text-3xl">R$ 57.400,00</strong>
        </div>
      </section>
    </div>
  );
}
