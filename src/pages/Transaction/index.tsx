import { SearchForm } from "../../components/SearchForm";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transaction() {
  const { transactions } = useContext(TransactionsContext);

  transactions.map((transaction) => {
    console.log(new Date(transaction.createdAt));
  });

  return (
    <div>
      <Header />
      <Summary />
      <main className="w-full max-w-[1120px] mt-16 mx-auto px-7">
        <SearchForm />
        <table className="w-full border-separate border-spacing-y-2 mt-6">
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-5 px-8 bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                  {transaction.description}
                </td>
                <td
                  className={`py-5 px-8 bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md ${
                    transaction.type === "income"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  <span>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </span>
                </td>
                <td className="py-5 px-8 bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                  {transaction.category}
                </td>
                <td className="py-5 px-8 bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                  {transaction.createdAt
                    ? dateFormatter.format(new Date(transaction.createdAt))
                    : "Data inválida"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
