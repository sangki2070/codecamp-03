import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiPage() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    async function getImage() {
      const image = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImage(image.data.message);
    }
    getImage();
  }, []);

  return (
    <div>
      <div>오픈API</div>
      <div>{dogImage}</div>
    </div>
  );
}
// var requestURL = 'https://api.exchangerate.host/latest';
// var request = new XMLHttpRequest();
