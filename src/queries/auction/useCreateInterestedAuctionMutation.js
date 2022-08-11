import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useCreateInterestedAuctionMutation = () => {
  return useMutation(
    (auctionId) => {
      toast.loading('아이템 등록 시도 중입니다....');
      return auctionRelatedAPI.postCreateInterestedAuction(auctionId);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('아이템 생성 성공했습니다 👍');
        return queryClient.invalidateQueries(['interestedAuctionList']);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateInterestedAuctionMutation;
