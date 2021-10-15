import { useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { GlobalContext } from "../../../../../pages/_app";

declare const window: typeof globalThis & {
  kakao: any;
};

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`;
const WriteTitle = styled.div`
  font-size: 16px;
  font-weight: weight 500;
  padding-bottom: 16px;
`;

const GpsWrapper = styled.div``;

const WriteInput3 = styled.input`
  width: 108px;
  height: 52px;
  margin-right: 100px;
`;
const WriteInput2 = styled.input`
  width: 582px;
  height: 52px;
`;

const MapAdWrapper = styled.div`
  display: flex;
`;

export default function MapArea(props) {
  const { setMyLat, setMyLng, myLat, myLng } = useContext(GlobalContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0290023f3c59e26ad85f5ea9165188f";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });

        // 지도에 마커를 표시합니다
        marker.setMap(map);

        interface IMouseEvent {
          latLng: any;
        }

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: IMouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            setMyLat(latlng.getLat());
            setMyLng(latlng.getLng());
          }
        );
      });
    };
  }, []);

  return (
    <>
      <MapAdWrapper>
        <div id="map" style={{ width: "384px", height: "252px" }}></div>

        <AddressWrapper>
          <GpsWrapper>
            <WriteInput3 value={myLat}></WriteInput3>
            <WriteInput3 value={myLng}></WriteInput3>
          </GpsWrapper>
          <WriteTitle>주소</WriteTitle>
          <WriteInput2></WriteInput2>
          <WriteInput2></WriteInput2>
        </AddressWrapper>
      </MapAdWrapper>
    </>
  );
}
