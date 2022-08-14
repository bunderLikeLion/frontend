import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//최상위 컨테이너
const StyledWrapContainer = styled.div`
  display: inline-flex !important;
  width: 100%;
  height: 100%;
`;

//Summary
const SummaryImg = styled(CardMedia)`
  height: 5rem !important;
  width: 5rem !important;
  margin-right: 3rem;
  border-radius: 10%;
`;

const StyledCardMediaImg = styled(CardMedia)`
  height: 12rem;
  width: 100% !important;
`;

const StyledDetailItemImg = styled(CardMedia)`
  height: 4rem;
  width: 25% !important;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 10%;
`;

const SummaryContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SummaryTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary} !important;
`;

const SummaryUploadDate = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color_font__tertiary} !important;
`;

const SummaryParticipantsWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;

const SummaryParticipantIcon = styled(PersonOutlineOutlinedIcon)`
  width: 5%;
  margin-right: 0.3rem;
`;

const SummaryParticipantsTxt = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color_font__number} !important;
`;

//Accordion
const StyledAccordionContainer = styled.div`
  width: 65%;
  margin-right: 10%;
  border-radius: 1rem;
`;

const StyledAccordion = styled(Accordion)`
  border-radius: 0.5rem !important;
  background: ${(props) => props.theme.color_background__primary} !important;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  & .MuiAccordionSummary-content {
    padding: 0 1.5rem;
  }
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  fill: ${(props) => props.theme.color_white} !important;
`;

const SummaryParticipantcontainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 2rem 1.5rem 2.3rem !important;
`;

const DetailsLeftContainer = styled.div`
  width: 45%;
`;

const StyledCardContent = styled(CardContent)`
  & .MuiCardContent-root {
    color: red;
  }
`;

const StyledCard = styled(Card)`
  overflow: hidden;
  border-radius: 0.7rem !important;
  background: ${(props) => props.theme.color_background__third} !important;
`;

const StyledTypography = styled(Typography)`
  color: ${(props) => props.theme.color_font__secondary} !important;
  margin-bottom: 0 !important;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
  padding: 0.5rem 1rem 1rem 1.5rem !important;
`;

const StyledCardButton = styled(Button)`
  width: 6rem;
  border-radius: 1rem !important;
  border: none !important;
  background: ${(props) => props.theme.color_button__ok} !important;
  overflow: hidden !important;
  font-weight: bold !important;
`;

const DetailsRightContainer = styled(DetailsLeftContainer)`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 41%;
`;

//전체화면 우측 영역
const RightContainer = styled.div`
  width: 25%;
`;

const RightSmallContainer = styled.div`
  position: relative;
  width: 100%;
  height: 7rem;
  margin-bottom: 1rem;
  padding: 8%;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const RankInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 600;
  height: 2.5rem;
`;

const MyScopeInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const MyScopeInfo = styled(StarIcon)`
  & .MuiSvgIcon-root {
    width: 2rem;
    height: 2rem;
  }
`;

const DealCountInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

const DealCountInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const DealCount = styled.p`
  padding: 0 0.5rem 0 1rem;
  font-size: 2rem;
`;

const ToprankInfoContainer = styled(RightSmallContainer)`
  height: fit-content;
`;

const ToprankInfoItem = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  background: #342d56;
`;

const ToprankTitle = styled.p`
  padding-top: 0.2rem;
  font-size: 0.8rem;
  color: #dfdcef;
`;

const ToprankDate = styled.p`
  font-size: 0.7rem;
  color: #817c97;
`;

const TransactionHistory = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledWrapContainer>
      <StyledAccordionContainer>
        {/*Accordion*/}
        <StyledAccordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <StyledAccordionSummary
            expandIcon={<StyledExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <SummaryImg
              component="img"
              image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
            />
            <SummaryContents>
              <SummaryTitle>제가 정말 아끼는 녀석...</SummaryTitle>

              <SummaryParticipantsWrapper>
                <SummaryUploadDate>2022.08.05</SummaryUploadDate>
                <SummaryParticipantcontainer>
                  <SummaryParticipantIcon color="secondary" />
                  <SummaryParticipantsTxt>38명</SummaryParticipantsTxt>
                </SummaryParticipantcontainer>
              </SummaryParticipantsWrapper>
            </SummaryContents>
          </StyledAccordionSummary>
          {/*AccordionDetails*/}
          <StyledAccordionDetails>
            <DetailsLeftContainer>
              <StyledCard sx={{ maxWidth: 280 }}>
                <StyledCardMediaImg
                  component="img"
                  image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
                />
                <StyledCardContent>
                  <StyledTypography gutterBottom variant="h5" component="div">
                    나이키 조던
                  </StyledTypography>
                </StyledCardContent>
                <StyledCardActions>
                  <StyledCardButton variant="contained" size="small">
                    상세보기
                  </StyledCardButton>
                </StyledCardActions>
              </StyledCard>
            </DetailsLeftContainer>
            <DetailsRightContainer>
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
              <StyledDetailItemImg
                component="img"
                image="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjdfMjIy/MDAxNTkzMjY3NTg0Njcy.NySvFjhnhYLM-lvl0_bJ5sQt7f6xEvY72s5G4gdr8E8g.HHhQCipGTqBHYbHxApL26gfK4JzxZhOymCbNz7FkHVAg.JPEG.yoonug10/Air-Jordan-1-Retro-High-OG-Defiant-SB-NYC-to-Paris-1-1024x730.jpg?type=w800"
              />
            </DetailsRightContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
      </StyledAccordionContainer>
      {/*우측 contents*/}
      <RightContainer>
        <RightSmallContainer>
          랭크
          <RankInfo>S</RankInfo>
        </RightSmallContainer>
        <RightSmallContainer>
          내 평점
          <MyScopeInfoContainer>
            <MyScopeInfo fontSize="large" />
            <MyScopeInfo fontSize="large" />
          </MyScopeInfoContainer>
        </RightSmallContainer>
        <RightSmallContainer>
          거래 횟수
          <DealCountInfoContainer>
            <DealCountInfo>
              총<DealCount>50</DealCount>회
            </DealCountInfo>
          </DealCountInfoContainer>
        </RightSmallContainer>
        <ToprankInfoContainer>
          명예의 전당 실적
          <ToprankInfoItem>
            <ToprankTitle>이번주의 챔피온</ToprankTitle>
            <ToprankDate>2022.08.01</ToprankDate>
          </ToprankInfoItem>
          <ToprankInfoItem>
            <ToprankTitle>이번주의 챔피온</ToprankTitle>
            <ToprankDate>2022.08.01</ToprankDate>
          </ToprankInfoItem>
        </ToprankInfoContainer>
      </RightContainer>
    </StyledWrapContainer>
  );
};

export default TransactionHistory;
