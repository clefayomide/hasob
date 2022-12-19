import { useSelector } from "react-redux";

const useStore = () => {
  const user = useSelector((state) => state.user);

  return { user };
};

export default useStore;
