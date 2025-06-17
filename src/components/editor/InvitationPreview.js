import React from "react";
import styled from "styled-components";

const InvitationWrapper = styled.div`
  width: 420px;
  margin: 0 auto;
  background: #fff9e6;
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 10px 20px rgba(244, 194, 89, 0.3);
  font-family: "MaruBuri", sans-serif;
  color: #4a3c1a;
  line-height: 1.6;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 8px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #a0781a;
`;

const CoupleNames = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin: 20px 0;
  color: #6b4e0f;
`;

const Message = styled.p`
  font-size: 16px;
  margin: 24px 0;
  padding: 0 8px;
  text-align: center;
`;

const InfoBlock = styled.div`
  background: #f0e2a4;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 600;
  color: #856b1a;
`;

const InfoText = styled.p`
  font-size: 15px;
  margin-bottom: 6px;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 180px;
  background: #d6c964;
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7a6a16;
  font-weight: 600;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #f4c259;
  border: none;
  padding: 14px 0;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #422e00;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9a72c;
  }
`;

const InvitationPreview = ({ bride, groom, date, venue, message }) => {
  return (
    <InvitationWrapper>
      <Header>
        <Title>우리 결혼합니다</Title>
        <Subtitle>사랑하는 여러분을 초대합니다</Subtitle>
      </Header>

      <CoupleNames>
        {bride} &nbsp;❤️&nbsp; {groom}
      </CoupleNames>

      <Message>{message}</Message>

      <InfoBlock>
        <InfoTitle>일시</InfoTitle>
        <InfoText>{date}</InfoText>
      </InfoBlock>

      <InfoBlock>
        <InfoTitle>장소</InfoTitle>
        <InfoText>{venue}</InfoText>
      </InfoBlock>

      <MapPlaceholder>지도 위치 (추후 구글맵 연동 예정)</MapPlaceholder>

      <Button onClick={() => alert("축하 메시지 보내기!")}>
        축하 메시지 보내기
      </Button>
    </InvitationWrapper>
  );
};

export default InvitationPreview;
