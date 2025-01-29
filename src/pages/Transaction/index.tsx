import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />
      <main className="w-full max-w-[1120px] mt-16 mx-auto px-7">
        <table className="w-full border-separate border-spacing-y-2 mt-6">
          <tbody>
            <tr>
              <td className="py-[1.25rem] px-[2rem] bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                Desenvolvimento de site
              </td>
              <td className="py-[1.25rem] px-[2rem] bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                <span>R$ 12.000,00</span>
              </td>
              <td className="py-[1.25rem] px-[2rem] bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                Venda
              </td>
              <td className="py-[1.25rem] px-[2rem] bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                13/08/2024
              </td>
            </tr>
            <tr>
              <td className="py-[1.25rem] px-[2rem] bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                Hamburguer
              </td>
              <td className="py-[1.25rem] px-[2rem] bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                <span>- R$ 50,00</span>
              </td>
              <td className="py-[1.25rem] px-[2rem] bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                Alimentação
              </td>
              <td className="py-[1.25rem] px-[2rem] bg-gray-700 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md">
                12/04/2024
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
