import { userAtom } from 'state';
import { useUserActions } from '../../actions';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

const Login = ({ history }) => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const userActions = useUserActions();

  useEffect(() => {
    // redirect to home if already logged in
    if (user) navigate('/');
  }, []);

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  const onSubmit = ({ username, password }) => {
    userActions.login(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input type="text" {...register('username')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Password</label>
          <input type="text" {...register('password')} />
          <div>{errors.password?.message}</div>
        </div>
        <button disabled={isSubmitting}>
          {isSubmitting && 'Submitting...'}
          Login
        </button>
        {errors.apiError && <div>{errors.apiError?.message}</div>}
      </form>
    </div>
  );
};

export default Login;
