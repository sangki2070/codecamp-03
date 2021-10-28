import { Calendar } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyCalendar = styled(Calendar)`
  width: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
`;

export default function CalendarPage() {
  const [data, setDate] = useState("");

  function onSelect(value) {
    setDate(value.format("YYYY-MM-DD"));
    console.log(value);
  }

  //   function onPanelChange(value, mode) {
  //     console.log(value, mode);
  //   }

  return (
    <div>
      <MyCalendar
        fullscreen={false}
        //   onPanelChange={onPanelChange}
        onSelect={onSelect}
      />
      <div>{data}</div>
    </div>
  );
}

//   function onPanelChange(value, mode) {
//     console.log(value.format("YYYY-MM-DD"), mode);
//   }

//   return <Calendar onPanelChange={onPanelChange} />;
