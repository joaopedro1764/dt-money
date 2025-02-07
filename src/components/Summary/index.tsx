import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <div className="w-full flex justify-center items-center ">
      <section className="w-full max-w-[1120px] grid grid-cols-3 gap-2 -mt-20">
        <div className="bg-gray-600 rounded-md p-8">
          <header className="flex justify-between items-center text-gray-300">
            <span>Entradas</span>
            <ArrowCircleUp size={32} color="#00B37E" />
          </header>
          <strong className="block mt-4 text-3xl">
            {priceFormatter.format(summary.income)}
          </strong>
        </div>
        <div className="bg-gray-600 rounded-md p-8">
          <header className="flex justify-between items-center text-gray-300">
            <span>Saídas</span>
            <ArrowCircleDown size={32} color="#f75a68" />
          </header>
          <strong className="block mt-4 text-3xl">
            {priceFormatter.format(summary.outcome)}
          </strong>
        </div>
        <div className="bg-green-700 rounded-md p-8">
          <header className="flex justify-between items-center text-gray-300">
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong className="block mt-4 text-3xl">
            {priceFormatter.format(summary.total)}
          </strong>
        </div>
      </section>
    </div>
  );
}
