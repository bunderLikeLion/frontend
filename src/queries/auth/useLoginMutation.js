import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import userRelatedAPI from '../../apis/userRelatedAPI';
import { useRecoilState } from 'recoil';
import { userAtom } from 'states';
import { useNavigate } from 'react-router-dom';

const useLoginMutation = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);

  return useMutation(
    (payload) => {
      toast.loading('로그인 시도중...');
      return userRelatedAPI.postLogin(payload);
    },
    {
      onSuccess: (res) => {
        toast.dismiss();
        toast.success('로그인 성공 👍');
        localStorage.setItem('access_token', res?.access_token);
        setUser(res?.user);
        navigate('/');
      },
      onError: (res) => {
        toast.dismiss();
        console.log(res, 'resss');
        toast.error(res.message);
      },
    }
  );
};

export default useLoginMutation;
