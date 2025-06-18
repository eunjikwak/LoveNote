import Dropdown from "../common/Dropdown";
import ImageSelector from "../common/ImageSelect";
import Input from "../common/Input";
import ColorPicker from "../common/ColorPicker";
import PositionControl from "../common/PositionControl";
import Textarea from "../common/Textarea";
export const FieldRenderer = ({
  field,
  section,
  onChangeValue,
  onChangeInput,
  onSelectImage,
}) => {
  switch (field.type) {
    case "dropdown":
      return (
        <Dropdown
          {...field.props}
          selected={section[field.key]}
          onChange={onChangeValue(field.key)}
        />
      );
    case "button":
      return (
        <ImageSelector onSelectImage={onSelectImage}>
          {field.props.text}
        </ImageSelector>
      );
    case "input":
      return (
        <Input
          {...field.props}
          value={section[field.key]}
          onChange={onChangeInput}
          name={field.key}
        />
      );
    case "color":
      return <ColorPicker onColorChange={onChangeValue("selectedColor")} />;
    case "position":
      return (
        <PositionControl
          position={section[field.key]}
          setPosition={onChangeValue(field.key)}
        />
      );
    case "name":
      return (
        <div style={{ display: "flex", gap: "8px" }}>
          {field.fields.map(({ key, placeholder }) => (
            <Input
              key={key}
              placeholder={placeholder}
              value={section[key]}
              onChange={onChangeInput}
              name={key}
              style={
                placeholder === "성"
                  ? { width: "70px", flex: "none" }
                  : { width: "120px", flex: "none" }
              }
            />
          ))}
        </div>
      );
    case "textarea":
      return (
        <Textarea
          {...field.props}
          value={section[field.key]}
          onChange={onChangeInput}
          name={field.key}
        />
      );
    case "date":
      return (
        <Input
          {...field.props}
          value={section[field.key]}
          onChange={onChangeInput}
          name={field.key}
          type="date"
        />
      );
    case "account":
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
          }}
        >
          {field.fields.map(({ key, placeholder }) => (
            <Input
              key={key}
              placeholder={placeholder}
              value={section[key]}
              onChange={onChangeInput}
              name={key}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
};
