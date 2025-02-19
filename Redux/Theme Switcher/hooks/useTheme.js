import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

export const useTheme = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return {
    darkMode,
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
