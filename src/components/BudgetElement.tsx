import React, { FC, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Input from "../UI/Input";
import { BudgetItem } from "../types/budgetItem";
import editIcon from "../assets/icons/edit.svg";
import trashIcon from "../assets/icons/trash.svg";

interface BudgetElementProps {
  item: BudgetItem;
}

const BudgetElement: FC<BudgetElementProps> = ({ item }) => {
  const [value, setValue] = useState<BudgetItem>(item);
  const [editable, setEditable] = useState(false);

  const handleChangeValue = (name: string, newValue: string) => {
    setValue({ ...value, [name]: newValue });
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-start p-0 mb-3"
      style={{
        borderRadius: ".3rem",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        borderRight: `3px solid ${
          item.budgetItemType === "expense" ? "red" : "green"
        }`,
        borderLeft: `3px solid ${
          item.budgetItemType === "expense" ? "red" : "green"
        }`,
      }}
    >
      <Input
        style={{ flexBasis: "60%" }}
        editable={editable}
        name="description"
        value={value.description}
        handleChangeValue={handleChangeValue.bind(null, "description")}
      />
      <Input
        style={{ flexBasis: "22%" }}
        editable={editable}
        name="amount"
        value={String(value.amount)}
        type="number"
        handleChangeValue={handleChangeValue.bind(null, "amount")}
      />
      <Container
        className="d-flex align-items-center p-0 justify-content-center"
        style={{ flexBasis: "18%" }}
      >
        <Button
          variant="outline-secondary"
          size="sm"
          className={`me-2 ${editable && "active"}`}
          onClick={() => setEditable((prevState) => !prevState)}
        >
          <Image src={editIcon} alt="edit icon" width={24} height={24} />
        </Button>
        <Button variant="outline-secondary" size="sm">
          <Image src={trashIcon} alt="trash icon" width={24} height={24} />
        </Button>
      </Container>
    </Container>
  );
};

export default BudgetElement;
