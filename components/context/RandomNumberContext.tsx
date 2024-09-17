import { createContext, ReactNode, useState } from "react";

export interface RandomNumberContextType {
  num: number[];
  addNumber: (n: number) => void;
}

export const RandomNumberContext = createContext<RandomNumberContextType | undefined>(
  undefined
);

export const RandomNumberContextProvider = ({ children }: { children: ReactNode }) => {
  const [num, setNum] = useState<number[]>([]);
  const addNumber = (n: number) => {
    setNum((prev) => [...prev, n]);
  };
  return (
    <RandomNumberContext.Provider value={{ num , addNumber}}>
      {children}
    </RandomNumberContext.Provider>
  );
};

