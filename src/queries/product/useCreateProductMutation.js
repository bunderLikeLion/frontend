import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import productsRelatedAPI from 'apis/productsRelatredAPI';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';

const useCreateProductMutation = () => {
  return useMutation(
    (payload) => {
      toast.loading('아이템 생성 시도 중입니다....');
      return productsRelatedAPI.postProduct(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('아이템 생성 성공했습니다 👍');
        return queryClient.invalidateQueries(['myProductsData']);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateProductMutation;
