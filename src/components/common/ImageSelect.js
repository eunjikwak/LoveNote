import React, { useRef } from "react";
import Button from "./Button";

const ImageSelector = ({ onSelectImage, children }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 콜백으로 부모에 전달 (예: Redux dispatch 또는 상태 저장용)
    onSelectImage(file);
  };

  return (
    <div>
      <Button onClick={handleClick}>{children}</Button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default ImageSelector;
