import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/common/Navbar";
import { logout } from "../../modules/user";

const HeaderContainer = () => {
  const user = useSelector((state) => state.user.user);
  const disptch = useDispatch();
  const onLogout = () => {
    disptch(logout());
  };
  return <Navbar user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
