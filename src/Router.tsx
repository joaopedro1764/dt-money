import { Route, Routes } from "react-router-dom";
import { Transaction } from "./pages/Transaction";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Transaction />} />
    </Routes>
  );
}
