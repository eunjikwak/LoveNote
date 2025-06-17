import Navbar from "../components/common/Navbar";
import AccountContainer from "../container/account/AccountContainer";
import BaseLayout from "../components/common/BaseLayout";
const AccountPage = () => {
  return (
    <>
      <Navbar />
      <BaseLayout>
        <AccountContainer />
      </BaseLayout>
    </>
  );
};
export default AccountPage;
