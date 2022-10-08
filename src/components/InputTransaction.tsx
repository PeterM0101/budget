import React, { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { BudgetItem } from "../types/budgetItem";
import { validation } from "../helpers/validation";
import SaveOrCancelButtons from "../UI/SaveOrCancelButtons";

interface InputTransactionProps {}

const InputTransaction: FC<InputTransactionProps> = () => {
  const [transaction, setTransaction] = useState<BudgetItem>({
    description: "",
    amount: "0",
    budgetItemType: "expense",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: content, name } = e.target;
    if (!(name === "amount" && validation.isNumber(content))) return;
    setTransaction({ ...transaction, [name]: content });
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(transaction);
  };

  return (
    <div>
      <h3>Add a new Transaction</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className="d-flex flex-md-row flex-sm-column align-items-sm-center justify-content-between mb-3">
          <Form.Group className="col-md-7 col-sm-12">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="New shinny thing"
              name="description"
              onChange={handleChange}
              value={transaction.description}
            />
          </Form.Group>

          <Form.Group className="col-md-4 col-sm-12">
            <Form.Label>Amount</Form.Label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Amount"
                name="amount"
                onChange={handleChange}
                value={transaction.amount}
              />
            </InputGroup>
          </Form.Group>
        </Form.Group>
        <SaveOrCancelButtons />
      </Form>
    </div>
  );
};

export default InputTransaction;
