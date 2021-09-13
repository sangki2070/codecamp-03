import { Rate } from "antd";
import { useState } from "react";

const desc = ["1점", "2점", "3점", "4점", "5점"];

export default function StarPage() {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
    alert(value + "점");
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      <br />
      {value ? <div className="ant-rate-text">{desc[value - 1]}</div> : ""}
    </span>
  );
}
