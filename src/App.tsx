import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Router } from "./Router";
import { TransactionProvider } from "./context/TransactionsContext";

export function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </TransactionProvider>
  );
}
