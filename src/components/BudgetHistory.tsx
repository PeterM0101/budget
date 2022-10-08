import React, { FC } from "react";
import { BudgetItem } from "../types/budgetItem";
import BudgetElement from "./BudgetElement";

const historyData: BudgetItem[] = [
  { description: "Table", budgetItemType: "expense", amount: "35" },
  { description: "Salary", budgetItemType: "incoming", amount: "1000" },
  { description: "BD party", budgetItemType: "expense", amount: "300" },
];

interface BudgetHistoryProps {}

const BudgetHistory: FC<BudgetHistoryProps> = () => {
  if (!historyData) return <p>History is unavailable</p>;
  return (
    <>
      <h3>History: </h3>
      {historyData.length === 0 && <p>List of transactions is empty...</p>}
      {historyData.map((item, index) => (
        <BudgetElement item={item} key={index} />
      ))}
    </>
  );
};

export default BudgetHistory;
