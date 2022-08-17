import { AddItemModal } from './index';
import { useState } from 'react';
import ItemListCard from './ItemListCard';
import styled from 'styled-components';
import { useMyProductsQuery } from 'queries/product';
import { Pagination } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EmptyListPlaceHolder from 'components/Shared/EmptyListPlaceholder';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  gap: 2rem 2rem;
  margin-top: 2rem;
`;

const ItemListContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
`;

const AddProductItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  font-size: 1rem !important;
  width: fit-content;
  height: 2rem;
  margin: 0.3rem;
  padding: 0.2rem 1.1rem;
  border: none;
  border-radius: 1.1rem;
  line-height: 2rem;
  background: ${(props) => props.theme.color_button__ok};
  color: ${(props) => props.theme.color_font__secondary};
`;

const PlusBtn = styled(AddBoxIcon)`
  font-size: 1.3rem !important;
  margin-right: 0.3rem;
  color: ${(props) => props.theme.color_font__secondary};
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

const ItemList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery(pageNum, 6);

  const handleModal = () => setIsModalOpened(!isModalOpened);

  const handleChange = (event, value) => {
    setPageNum(value);
  };

  return (
    <ItemListContainer>
      <AddProductItemButton onClick={handleModal}>
        <PlusBtn />
        아이템 추가
      </AddProductItemButton>
      {myProductFetched && (
        <>
          <p>총 {myProductsData?.total_count}개</p>
          {myProductsData?.total_count > 0 ? (
            <FlexContainer>
              {myProductsData.results.map((productData) => {
                return (
                  <ItemListCard
                    key={productData.id}
                    productData={productData}
                  />
                );
              })}
            </FlexContainer>
          ) : (
            <EmptyListPlaceHolder
              message="아직 등록한 아이템이 없습니다. 🥲"
              margin="2rem 0 0 0 "
            />
          )}
        </>
      )}
      <PaginationContainer>
        <StyledPagination
          count={myProductsData?.total_pages}
          page={pageNum}
          onChange={handleChange}
        />
      </PaginationContainer>
      <AddItemModal handleModal={handleModal} isModalOpened={isModalOpened} />
    </ItemListContainer>
  );
};

export default ItemList;
