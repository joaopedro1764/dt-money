import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { TransactionsContext } from "../../context/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const { fetchTransactions } = useContext(TransactionsContext);

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchTransactions)}
      className="flex gap-4"
    >
      <input
        {...register("query")}
        placeholder="Busque uma transação"
        className="flex-1 border-0 rounded-md bg-gray-900 p-4 text-gray-300 placeholder:text-gray-500"
      />
      <button
        disabled={isSubmitting}
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
