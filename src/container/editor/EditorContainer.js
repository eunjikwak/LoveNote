import { useState } from "react";
import EditorTemplate from "../../components/editor/EditorTemplate";
import InvitationPage from "../../pages/InvitationPage";
import AccordionItem from "../../components/common/Accordion";
import Dropdown from "../../components/common/Dropdown";
import LabeledField from "../../components/common/LabelField";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import ColorPicker from "../../components/common/ColorPicker";
import PositionControl from "../../components/common/PositionControl";
const EditorContainer = () => {
  const fontOptions = [
    { label: "Arial", value: "Arial, sans-serif" },
    { label: "Courier New", value: "'Courier New', monospace" },
    { label: "Georgia", value: "Georgia, serif" },
    { label: "Verdana", value: "Verdana, sans-serif" },
  ];

  const [selectedFont, setSelectedFont] = useState(null);
  const [wording, setWording] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [position, setPosition] = useState(50);
  return (
    <EditorTemplate>
      <div className="mobile-none">
        <InvitationPage />
      </div>
      <div style={{ width: "100%" }}>
        <AccordionItem title="메인">
          <LabeledField label={"템플릿 타입"}>
            <Dropdown
              options={fontOptions}
              selected={selectedFont}
              onChange={setSelectedFont}
              placeholder="템플릿 타입을 선택하세요."
            />
          </LabeledField>
          <LabeledField label={"사진 선택"}>
            <Button>사진 선택</Button>
          </LabeledField>
          <LabeledField label={"문구 선택"}>
            <Input
              value={wording}
              onChange={(e) => setWording(e.target.value)}
              placeholder="문구를 입력하세요"
            />
          </LabeledField>
          <LabeledField label={"문구 색상"}>
            <ColorPicker onColorChange={setSelectedColor} />
          </LabeledField>
          <LabeledField label={"문구 위치"}>
            <PositionControl position={position} setPosition={setPosition} />
          </LabeledField>
        </AccordionItem>
      </div>
    </EditorTemplate>
  );
};

export default EditorContainer;
