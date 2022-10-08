import React, { FC } from "react";
import { Button, Form } from "react-bootstrap";

interface SaveOrCancelButtonsProps {}

const SaveOrCancelButtons: FC<SaveOrCancelButtonsProps> = () => {
  return (
    <Form.Group className="col-sm-12">
      <Button variant="danger" type="button" className="me-5">
        Cansel
      </Button>
      <Button variant="success" type="submit">
        Ok
      </Button>
    </Form.Group>
  );
};

export default SaveOrCancelButtons;
