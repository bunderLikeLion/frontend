import styled from 'styled-components';
import Left_Component from 'components/MyPage/ItemDetail/Left_Component';
import Right_Component from 'components/MyPage/ItemDetail/Right_Component';
import { useParams } from 'react-router-dom';
import useSingleProductQuery from 'queries/product/useSingleProductQuery';
import WrapContainer from 'layouts/WrapContainer';

const Container = styled.div`
  width: 100%;
  height: 35rem;
  color: white;
  display: flex;
  overflow: hidden;
  padding-top: 0.5rem;
`;

const ItemDetail_Left = styled.div`
  width: 60%;
  padding: 0 5rem 0 5rem;
`;

const ItemDetail_Right = styled.div`
  width: 45%;
  height: 100%;
`;

const ItemDetail = () => {
  const { id: itemId } = useParams();
  const { data: singleItem, isSuccess: singleItemFetched } =
    useSingleProductQuery(itemId);

  return (
    <>
      {singleItemFetched && (
        <WrapContainer>
          <Container>
            <ItemDetail_Left>
              <Left_Component
                user={singleItem?.user}
                thumbnail={singleItem?.thumbnail}
                images={singleItem?.images}
                date={singleItem?.created_at}
              />
            </ItemDetail_Left>
            <ItemDetail_Right>
              <Right_Component />
            </ItemDetail_Right>
          </Container>
        </WrapContainer>
      )}
    </>
  );
};

export default ItemDetail;
