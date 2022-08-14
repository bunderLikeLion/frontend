import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { useMyProductsQuery } from 'queries/product';

const StyledWrapContainer = styled.div`
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const CardContainer = styled(Card)`
  position: relative;
  width: 30%;
  margin: 1rem;
  border-radius: 3rem !important;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__primary} !important;
  box-shadow: 0 0 4px 7px ${(props) => props.theme.color_border__topleft} !important;
  :hover {
    transition: 0.5s;
    transform: translateY(-0.5rem);
  }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem 1rem 1.5rem;
`;

const CardProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 1.5rem;
  border-radius: 50%;
  background: #c9c9c9;
`;

const CardBottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem 1rem 1rem;
`;

const PersonCntBox = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 5rem;
  height: 2.4rem;
  margin: 0.3rem;
  border-radius: 4rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.color_font__number} !important;
  background: transparent;
`;

const EnterBox = styled(PersonCntBox)`
  width: 7rem;
  text-align: center;
  border: none;
  color: ${(props) => props.theme.color_font__secondary} !important;
  background: ${(props) => props.theme.color_background__success} !important;
`;

const MyCardMedia = styled(CardMedia)`
  height: 14rem;
  object-fit: cover;
`;

const MyCardHeader = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis !important;
  padding: 0.5rem;
  font-size: 1.4rem;
`;

const StyledCancelOutlinedIcon = styled(CancelOutlinedIcon)`
  position: absolute !important;
  right: 1rem;
  margin-top: 0.5rem !important;
  border-radius: 50rem !important;
  font-size: 2rem !important;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2%;
`;

const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    button {
      color: ${(props) => props.theme.color_font__secondary} !important;
    }
    .Mui-selected {
      color: ${(props) => props.theme.color_font__number} !important;
    }
  }
`;

export const FinishedOverlay = styled(Card)`
  position: absolute;
  display: ${(props) => (props.isFinished ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 2rem;
  background-color: rgba(57, 57, 65, 0.83) !important;
`;

const InterestedAuctionListCard = () => {
  const [pageNum, setPageNum] = useState(1);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum, 6);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <StyledWrapContainer>
      {/*Card_01*/}
      <CardContainer sx={{ maxWidth: '100%' }}>
        <StyledCancelOutlinedIcon />
        <MyCardMedia
          component="img"
          height="150"
          image="https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Card_02*/}
      <CardContainer sx={{ maxWidth: '100%' }}>
        <StyledCancelOutlinedIcon />
        <MyCardMedia
          component="img"
          height="150"
          image="https://hhsmedia.com/wp-content/uploads/2018/10/candies-e1541131061529-900x600.jpg"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Card_03*/}
      <CardContainer sx={{ maxWidth: '100%' }}>
        <StyledCancelOutlinedIcon />
        <MyCardMedia
          component="img"
          height="150"
          image="https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Card_04*/}
      <CardContainer sx={{ maxWidth: '100%' }}>
        <StyledCancelOutlinedIcon />
        <MyCardMedia
          component="img"
          height="150"
          image="https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Card_05*/}
      <CardContainer sx={{ maxWidth: '100%' }}>
        <StyledCancelOutlinedIcon />
        <MyCardMedia
          component="img"
          height="150"
          image="https://hhsmedia.com/wp-content/uploads/2018/10/candies-e1541131061529-900x600.jpg"
        />
        <CardTop>
          <CardProfile />
          <MyCardHeader>사탕 살래?</MyCardHeader>
        </CardTop>
        <CardBottom style={{ width: '100%' }}>
          <PersonCntBox>
            <PersonIcon />
            30명
          </PersonCntBox>
          <EnterBox>D-7</EnterBox>
        </CardBottom>
      </CardContainer>
      {/*Pagination*/}
      <PaginationContainer>
        <StyledPagination
          count={myProductsData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
    </StyledWrapContainer>
  );
};

export default InterestedAuctionListCard;
