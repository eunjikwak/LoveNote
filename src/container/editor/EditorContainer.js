import EditorTemplate from "../../components/editor/EditorTemplate";
import InvitationPage from "../../pages/InvitationPage";
import AccordionItem from "../../components/common/Accordion";
import Dropdown from "../../components/common/Dropdown";
import LabeledField from "../../components/common/LabelField";
import Input from "../../components/common/Input";
import ColorPicker from "../../components/common/ColorPicker";
import PositionControl from "../../components/common/PositionControl";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../modules/editor";
import editorFields from "../../lib/jsons/editorFields.json";
import ImageSelector from "../../components/common/ImageSelect";
import { selectEditorMainSection } from "../../modules/selector";
import { FieldRenderer } from "../../components/editor/FieldRenderer";
const EditorContainer = () => {
  const dispatch = useDispatch();
  // const { section } = useSelector(({ editor }) => ({
  //   section: editor.main,
  // }));
  const section = useSelector(selectEditorMainSection);
  const onChangeValue = (key) => (value) => {
    dispatch(changeField({ section: "main", key, value }));
  };
  const onChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ section: "main", key: name, value }));
  };

  const onSelectImage = (file) => {
    // 나중에 Firebase 업로드하거나 Redux 저장
    console.log("선택된 파일:", file);
    dispatch(changeField({ section: "main", key: "photo", value: file.name }));
  };

  const renderFields = (fields) =>
    fields.map((field) => (
      <LabeledField key={field.key} label={field.label}>
        <FieldRenderer
          field={field}
          section={section}
          onChangeValue={onChangeValue}
          onChangeInput={onChangeInput}
          onSelectImage={onSelectImage}
        />
      </LabeledField>
    ));

  const orderName = [
    {
      name: "메인",
      key: "main",
    },
    {
      name: "신랑측 정보",
      key: "groom",
    },
    {
      name: "신부측 정보",
      key: "bride",
    },
    {
      name: "예식장 정보",
      key: "weddingHallInfo",
    },
    {
      name: "인사말",
      key: "greeting",
    },
    {
      name: "신랑 신부 소개",
      key: "coupleIntroduce",
    },
    {
      name: "신랑 신부 연락처",
      key: "coupleContact",
    },
    {
      name: "혼주 연락처",
      key: "parentsContact",
    },
    {
      name: "축의금 계좌",
      key: "moneyAccount",
    },
    {
      name: "식순서 안내",
      key: "weddingSchedule",
    },
    {
      name: "리셉션 안내",
      key: "receptionGuide",
    },
  ];

  return (
    <EditorTemplate>
      <div className="mobile-none">
        <InvitationPage />
      </div>
      <div className="accordion-container">
        {orderName.map((val, index) => (
          <AccordionItem title={val.name} key={index}>
            {renderFields(editorFields[val.key])}
          </AccordionItem>
        ))}
      </div>
    </EditorTemplate>
  );
};

export default EditorContainer;
