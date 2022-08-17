import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Pagination } from '@mui/material';
import { useState } from 'react';
import { useMyProductsQuery } from 'queries/product';
import AuctionListContainer from 'components/Shared/AuctionListContainer';
import AuctionListItem from 'components/Shared/AuctionListItem';
import { userAtom } from '../../states';
import WrapContainer from '../../layouts/WrapContainer';
import { useMyAuctionQuery } from 'queries/auction';
import timeLimitHandler from '../../utils/timeLimitHandler';
import isAuctionFinishedHandler from '../../utils/isAuctionFinishedHandler';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// TODO: 목록이 비어있는 경우 EmptyListPlaceholder 추가하기

const MyAuctionList = () => {
  const [pageNum, setPageNum] = useState(1);
  const user = useRecoilValue(userAtom);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum, 6);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  const { data: myAuctionData, isSuccess: myAuctionFetched } =
    useMyAuctionQuery(pageNum);

  // TODO: isFinished props
  const dummyImageUrl =
    'https://post-phinf.pstatic.net/MjAxOTA2MjhfMTk3/MDAxNTYxNjg3MTY2OTQ2.OXRI7eorUbDI_4lIP1YlGHL_6ZMhh6Zgn4U7POAMCHMg.ygJy1cG5GZZxMvJ-0xqEKLdVEBZj13acwYC-Cri56BMg.JPEG/candyofthemonthclub.jpg?type=w1200';

  return (
    <Container>
      <AuctionListContainer>
        {/* TODO: 하기 컴포넌트에 API 연결하기 */}
        {myAuctionFetched &&
          myAuctionData?.results.map((auction) => {
            return (
              <AuctionListItem
                title={auction.title}
                thumbnailUrl={auction.product?.thumbnail?.file}
                participantCount={auction.product_groups_count}
                startAt={auction.created_at.split('T')[0].replaceAll('-', '.')}
                period={timeLimitHandler(auction.end_at)}
                linkTo={`/auctions/${auction.id}`}
                linkCondition={isAuctionFinishedHandler(auction.end_at)}
              />
            );
          })}
      </AuctionListContainer>
      {/*Pagination*/}
      <PaginationContainer>
        <StyledPagination
          count={myProductsData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
    </Container>
  );
};

export default MyAuctionList;
