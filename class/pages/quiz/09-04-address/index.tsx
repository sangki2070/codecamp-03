import { useState } from "react";

import DaumPostcode from "react-daum-postcode";

// const [myZipcode, setMyZipcode] = useState("");
// const [myAdress, setMyAdress] = useState("");
// // const [isOpen, setIsOpen] = useState(false)

// const handleComplete = (data) => {
//   setMyZipcode(data.address);
//   setMyAdress(data.zonecode);

//   // setIsOpen(false)
// };

export default function AdressPage() {
  return (
    <>
      <DaumPostcode autoClose />;
    </>
  );
}
