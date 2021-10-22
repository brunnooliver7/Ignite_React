import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// forma 1
// interface TransactionInput {
//   title: string,
//   amount: number,
//   category: string,
//   type: string
// }
  
// forma 2
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
  
// forma 3
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  useEffect(() => {
    api.get('transactions')
      .then((response: any) => setTransactions(response.data['transactions']))
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}