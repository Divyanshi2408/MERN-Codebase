import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";

export const useAuth = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return {
    user,
    isAuthenticated,
    login: (userData) => dispatch(login(userData)),
    logout: () => dispatch(logout()),
  };
};
