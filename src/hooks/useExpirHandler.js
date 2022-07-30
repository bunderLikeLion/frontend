import { useNavigate } from 'react-router-dom';

const useExpirationHandler = () => {
  const accessToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const handleResponse = (res) => {
    const data = res.data;
    if (200 > res.status && res.status > 299) {
      if ([401, 403].includes(res.status) && accessToken) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        localStorage.clear();
        navigate('/login');
      }
      const error = (data && data.message) || res.statusText;
      return Promise.reject(error);
    }
    return data;
  };

  return { handleResponse };
};

export { useExpirationHandler };
