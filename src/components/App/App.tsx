import { useEffect } from "react";
import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import { getCategories } from "../../store/categoriesSlice";
import { useAppDispatch } from "../../store/store";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
