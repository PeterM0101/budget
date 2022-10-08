import React, { FC, useState } from "react";

interface EditableFieldProps {
  editable: boolean;
  validValue: string;
  type: "number" | "string";
  onChange: (value: string) => void;
}

const EditableField: FC<EditableFieldProps> = ({
  editable,
  validValue,
  onChange,
  type,
}) => {
  const [value, setValue] = useState(validValue);

  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    const content = e.currentTarget.textContent;

    if (content) setValue(content);
    console.log({ content });
    if (content && content.trim()) return;
    if (type === "number" && !content?.match(/d/g)) return;
    if (content) onChange(content);
  };

  return (
    <div
      onChange={handleChange}
      suppressContentEditableWarning={true}
      contentEditable={editable}
    >
      {validValue}
    </div>
  );
};

export default EditableField;
