import React from "react";
import { Container } from "react-bootstrap";
import BudgetSummary from "./components/BudgetSummary";
import BudgetHistory from "./components/BudgetHistory";
import InputTransaction from "./components/InputTransaction";

function App() {
  return (
    <Container
      fluid
      className="p-3 d-flex justify-content-center flex-column col-lg-8"
    >
      <h1 className="text-center">Budget</h1>
      <BudgetSummary />
      <BudgetHistory />
      <InputTransaction />
    </Container>
  );
}

export default App;
