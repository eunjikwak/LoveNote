import EditorContainer from "../container/\beditor/EditorContainer";
import HeaderContainer from "../container/common/HeaderContainer";
import BaseLayout from "../components/common/BaseLayout";

const InvitationEditorPage = () => {
  return (
    <>
      <HeaderContainer />
      <BaseLayout>
        <EditorContainer />
      </BaseLayout>
    </>
  );
};

export default InvitationEditorPage;
