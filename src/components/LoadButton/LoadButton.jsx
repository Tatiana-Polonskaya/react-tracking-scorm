import { useState, useRef } from "react";

import "./LoadButton.css";
import SVG from "../../assets/download-svgrepo-com.svg";

export default function LoadButton(props) {
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef();

  const handleFile = (file) => {
    props.setFile(file);
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="load-button">
      <form
        className="load-button-form"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          className="input-file-upload"
          accept=".zip,.rar"
          onChange={handleChange}
        />
        <label
          className={"label-file-upload" + (dragActive && " drag-active")}
          id="label-file-upload"
          htmlFor="input-file-upload"
        >
          <div className="text-upload">
            <img className="text-upload-icon" src={SVG} />
            <p className="text-upload-text">
              Перетащите архив сюда или{" "}
              <span className="upload-button" onClick={onButtonClick}>
                загрузите
              </span>
            </p>
          </div>
        </label>
        {dragActive && (
          <div
            className="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
    </div>
  );
}
