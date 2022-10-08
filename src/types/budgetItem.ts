export interface BudgetItem {
  budgetItemType: "expense" | "incoming";
  description: string;
  amount: string;
}
