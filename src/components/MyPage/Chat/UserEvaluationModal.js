import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@material-ui/core/Box';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ModalContainer = styled(Box)`
  position: relative;
  width: 60%;
  height: 80%;
  top: 50%;
  left: 50%;
  padding: 2rem 4rem;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__default};
`;

const DealEvaluate = styled.p`
  padding-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_white};
`;

const EvaluateContainer = styled.div`
  width: 100%;
  height: 50%;
  top: 10%;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
`;

const EvaluateTopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30%;
  padding: 1rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const MyItemImg = styled(CardMedia)`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 1.5rem;
  border-radius: 0.5rem;
  background: red;
`;

const ItemTitle = styled.p`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const ItemUploadDate = styled.p`
  color: ${(props) => props.theme.color_font__tertiary};
`;

const EvaluateBottomContainer = styled.div`
  width: 100%;
  height: 70%;
  padding: 1.5rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const UserEvaluate = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_white};
`;

const StarRatingContainer = styled.div`
  width: 55%;
  height: 40%;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color_background__third};
`;

const StarRating = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DealSummarize = styled.p`
  padding-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
`;

const DealSummarizeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20%;
  bottom: 15%;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.color_background__secondary};
  border-radius: 1rem;
`;

const MyItemImgSummarize = styled(CardMedia)`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  background: red;
`;

const ArrowIcon = styled(SyncAltIcon)`
  font-size: 10rem;
  color: white;
`;
const OpponentItemImg = styled(CardMedia)`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  background: pink;
`;

const ExtraIcon = styled(MoreHorizIcon)`
  color: white;
`;

const EvaluateConfirmButton = styled.button`
  width: 5rem;
  height: 1.7rem;
  border-radius: 0.5rem;
`;

const ConfirmButton = styled.button`
  width: 5rem;
  height: 1.7rem;
  border-radius: 0.5rem;
`;

const UserEvaluationModal = ({ handleModal, isModalOpened }) => {
  const [value, setValue] = React.useState(2);
  return (
    <Modal
      open={isModalOpened}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <DealEvaluate>이번 거래, 평가하기</DealEvaluate>
        <EvaluateContainer>
          <EvaluateTopContainer>
            <MyItemImg />
            <div>
              <ItemTitle>
                커피 온도를 그대로 담을 수 있는 하얀색 컵 입양하세요.
              </ItemTitle>
              <ItemUploadDate>2022.08.07</ItemUploadDate>
            </div>
          </EvaluateTopContainer>
          <EvaluateBottomContainer>
            <UserEvaluate>허유라님과의 거래를 평가하기.</UserEvaluate>
            <StarRatingContainer>
              <StarRating component="fieldset" mb={0} borderColor="transparent">
                <Typography component="legend"></Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </StarRating>
            </StarRatingContainer>
            <EvaluateConfirmButton>확인</EvaluateConfirmButton>
          </EvaluateBottomContainer>
        </EvaluateContainer>
        <DealSummarize>이번 거래, 요약하기</DealSummarize>
        <DealSummarizeContainer>
          <MyItemImgSummarize />
          <ArrowIcon />
          <OpponentItemImg />
          <OpponentItemImg />
          <OpponentItemImg />
          <OpponentItemImg />
          <ExtraIcon />
        </DealSummarizeContainer>
        <ConfirmButton>확인</ConfirmButton>
      </ModalContainer>
    </Modal>
  );
};

export default UserEvaluationModal;
