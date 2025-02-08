import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "../lib/axios";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsContextProps {
  transactions: TransactionsProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransactions: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface CreateTransactionInput {
  category: string;
  description: string;
  price: number;
  type: "income" | "outcome";
}

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await API.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransactions((state) => [response.data, ...state]);
  }

  async function createTransactions(data: CreateTransactionInput) {
    const { category, description, price, type } = data;

    await API.post("/transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    });
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
