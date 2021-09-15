import { Wrapper, SlideTitle, CardImg, MySlider } from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <div>
        <SlideTitle> 인기 서비스</SlideTitle>
        <MySlider {...settings}>
          <div>
            <CardImg src="/images/Heart.svg"></CardImg>
          </div>
          <div>
            <CardImg src="/images/MySelected.svg"></CardImg>
          </div>
          <div>
            <CardImg src="/images/SearchPhoto.svg"></CardImg>
          </div>
          <div>
            <CardImg src="/images/Road.svg"></CardImg>
          </div>
          <div>
            <CardImg src="/images/Arrow1.svg"></CardImg>
          </div>
          <div>
            <CardImg src="/images/Arrow2.svg"></CardImg>
          </div>
        </MySlider>
      </div>
    </Wrapper>
  );
}
