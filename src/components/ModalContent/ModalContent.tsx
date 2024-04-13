import React, { useState } from "react";
import "./ModalContent.css";

export default function ModalContent(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectedClick = () => {
    if (selectedIndex !== -1)
      props.onSelectedClick(props.scorms[selectedIndex]);
  };
  return (
    <div className="modal-conteiner">
      <h2 className="modal-title">Выберите загруженный скорм-пакет</h2>
      <div className="modal-table">
        <div className="modal-table-row ">
          <p className="modal-table-header">№</p>
          <p className="modal-table-header">Название</p>
        </div>
        {props.scorms.map((el, i) => (
          <div
            onClick={() => setSelectedIndex(i)}
            className={`modal-table-row hovered ${
              selectedIndex === i ? "checked" : ""
            }`}
            key={el.id}
          >
            <p className="modal-table-cell">{i+1}</p>
            <p className="modal-table-cell">{el.title}</p>
          </div>
        ))}
      </div>
      <div className="modal-table-row ">
        <button
          onClick={handleSelectedClick}
          className="modal-table-button bg-green"
        >
          Выбрать
        </button>
        <button
          onClick={props.onCloseClick}
          className="modal-table-button bg-red"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
