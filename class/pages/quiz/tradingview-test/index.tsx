// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright">트레이딩뷰 제공 <a href="https://kr.tradingview.com/symbols/EURUSD/?exchange=FX" rel="noopener" target="_blank"><span class="blue-text">EURUSD환율</span></a></div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
//   {
//   "symbol": "FX:EURUSD",
//   "width": 350,
//   "height": 220,
//   "locale": "kr",
//   "dateRange": "12M",
//   "colorTheme": "dark",
//   "trendLineColor": "rgba(41, 98, 255, 1)",
//   "underLineColor": "rgba(41, 98, 255, 0.3)",
//   "underLineBottomColor": "rgba(41, 98, 255, 0)",
//   "isTransparent": false,
//   "autosize": false,
//   "largeChartUrl": ""
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->

kakao.maps.event.addListener(map, "click", function (mouseEvent) {
  searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      let detailAddr = !!result[0].road_address
        ? "<div>도로명주소 : " + result[0].road_address.address_name + "</div>"
        : "";
      detailAddr +=
        "<div>지번 주소 : " + result[0].address.address_name + "</div>";

      let content =
        '<div class="bAddr">' +
        '<span class="title">법정동 주소정보</span>' +
        detailAddr +
        "</div>";

      // 마커를 클릭한 위치에 표시합니다
      marker.setPosition(mouseEvent.latLng);
      marker.setMap(map);

      // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
  });
});
