import React, { FC } from "react";
import { Table } from "react-bootstrap";
import { currencyFormat } from "../helpers/currencyFormat";
import Header from "../UI/Header";

const BudgetSummary: FC = () => {
  return (
    <>
      <Header title="Your Balance:" type="h5" />
      <Header title={currencyFormat(2555.53)} type="h3" />
      <Table bordered hover className="text-center">
        <thead>
          <tr>
            <th>{"Incoming:".toUpperCase()}</th>
            <th>{"Expenses:".toUpperCase()} </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ color: "green" }}>{currencyFormat(1005.51)}</td>
            <td style={{ color: "red" }}>{currencyFormat(5.51)}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default BudgetSummary;
