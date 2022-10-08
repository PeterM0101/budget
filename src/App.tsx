import React from "react";
import { Container } from "react-bootstrap";
import BudgetSummary from "./components/BudgetSummary";
import BudgetHistory from "./components/BudgetHistory";
import InputTransaction from "./components/InputTransaction";
import Header from "./UI/Header";

function App() {
  return (
    <Container
      fluid
      className="p-3 d-flex justify-content-center flex-column col-lg-8"
    >
      <Header title="Budget" type="h1" className="text-center" />
      <BudgetSummary />
      <BudgetHistory />
      <InputTransaction />
    </Container>
  );
}

export default App;
