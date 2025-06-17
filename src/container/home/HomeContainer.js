import Home from "../../components/home/Home";
import { useSelector } from "react-redux";
const HomeContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return (
    <>
      <Home user={user} />
    </>
  );
};
export default HomeContainer;
