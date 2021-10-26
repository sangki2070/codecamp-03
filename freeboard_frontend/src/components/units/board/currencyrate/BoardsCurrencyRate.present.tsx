import {
  Wrapper,
  Flag,
  Fair,
  Rate,
  InnerWrapper,
  IconWrapper,
} from "./BoardsCurrencyRate.styles";
export default function CurrencyRateUI(props: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <IconWrapper>
          <Flag src="/images/usa.png"></Flag>
          <Flag src="/images/kor.png"></Flag>
        </IconWrapper>
        <Fair>USD/KRW</Fair>
        <Rate>{props.krw}원</Rate>
      </InnerWrapper>
      <InnerWrapper>
        <IconWrapper>
          <Flag src="/images/usa.png"></Flag>
          <Flag src="/images/jpy.png"></Flag>
        </IconWrapper>
        <Fair>USD/JPY</Fair>
        <Rate>{props.jpy}원</Rate>
      </InnerWrapper>
      <InnerWrapper>
        <IconWrapper>
          <Flag src="/images/usa.png"></Flag>
          <Flag src="/images/cny.png"></Flag>
        </IconWrapper>
        <Fair>USD/CNY</Fair>
        <Rate>{props.cny}원</Rate>
      </InnerWrapper>
      <InnerWrapper>
        <IconWrapper>
          <Flag src="/images/usa.png"></Flag>
          <Flag src="/images/hkd.png"></Flag>
        </IconWrapper>
        <Fair>USD/HKD</Fair>
        <Rate>{props.hkd}원</Rate>
      </InnerWrapper>
      <InnerWrapper>
        <IconWrapper>
          <Flag src="/images/usa.png"></Flag>
          <Flag src="/images/twn.png"></Flag>
        </IconWrapper>
        <Fair>USD/TWD</Fair>
        <Rate>{props.twd}원</Rate>
      </InnerWrapper>
      <InnerWrapper>
        <IconWrapper>
          <Flag src="/images/usa.png"></Flag>
          <Flag src="/images/gbp.png"></Flag>
        </IconWrapper>
        <Fair>USD/GBP</Fair>
        <Rate>{props.gbp}원</Rate>
      </InnerWrapper>
      <InnerWrapper>
        <IconWrapper>
          <Flag src="/images/usa.png"></Flag>
          <Flag src="/images/cad.png"></Flag>
        </IconWrapper>
        <Fair>USD/CAD</Fair>
        <Rate>{props.cad}원</Rate>
      </InnerWrapper>
      <InnerWrapper>
        <IconWrapper>
          <Flag src="/images/usa.png"></Flag>
          <Flag src="/images/aud.png"></Flag>
        </IconWrapper>
        <Fair>USD/AUD</Fair>
        <Rate>{props.aud}원</Rate>
      </InnerWrapper>
    </Wrapper>
  );
}
