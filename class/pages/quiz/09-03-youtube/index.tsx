import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 5px solid yellow;
  width: 100px;
  height: 100px;
`;

export default function YoutubePage() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=Nh27WsNdymo"
      width={800}
      height={600}
      muted={true}
      playing={true}
    />
  );
}
