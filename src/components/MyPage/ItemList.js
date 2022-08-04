import { AddItemModal } from './index';
import { useState } from 'react';
import ItemListCard from './ItemListCard';
import styled from 'styled-components';
import AddBoxIcon from '@mui/icons-material/AddBox';
import useMyProductsQuery from 'queries/product/useMyProductsQuery';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
`;

const ItemListContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
`;

const PlusBtn = styled(AddBoxIcon)`
  color: #5d0fa2;
  font-size: 3rem !important;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const ItemList = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleModal = () => setIsModalOpened(!isModalOpened);

  const { data: myProductsData, isSuccess: myProductFetched } =
    useMyProductsQuery();

  return (
    <ItemListContainer>
      <PlusBtn onClick={handleModal} />
      <p>총 5개</p>
      <FlexContainer>
        {myProductFetched &&
          myProductsData.results.map((productData) => {
            return (
              <ItemListCard key={productData.id} productData={productData} />
            );
          })}
      </FlexContainer>
      <AddItemModal handleModal={handleModal} isModalOpened={isModalOpened} />
    </ItemListContainer>
  );
};

export default ItemList;
