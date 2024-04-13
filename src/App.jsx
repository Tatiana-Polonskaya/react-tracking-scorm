import ScormProvider from "@upandgo/react-scorm-provider";
import { Button } from "antd";
import Header from "./components/Header";
import Provider from "./components/Provider";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import ModalContent from "./components/ModalContent/ModalContent";

import { getListScorms } from "./api";
import "./App.css";

const customStyles = {
  content: {
    borderRadius: "20px",
    padding: "10px 50px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [listScorms, setListScorms] = useState();

  useEffect(() => {
    if (!listScorms) {
      const response = async () => {
        const res = await getListScorms();
        if (res.ok) {
          const json = await res.json();
          console.log("getListScorms", json);
          setListScorms(json);
        }
      };
      response();
    }
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [leftScorm, setLeftScorm] = useState();
  const [rightScorm, setRightScorm] = useState();
  const [isRightScorm, setIsRightScorm] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSelectedClick = (scorm) => {
    isRightScorm ? setRightScorm(scorm) : setLeftScorm(scorm);
    closeModal();
  };

  const handleLoadBtnClick = (right) => {
    setIsRightScorm(right ? true : false);
    openModal();
  };

  return (
    <>
      <ScormProvider>
        <Header />
        <div className="custom-flex-block">
          <div className="custom-col">
            <div className="custom-col-title">
              <h4>Новый интерактивный элемент</h4>
              <Button
                type="dashed"
                icon={<CloudDownloadOutlined />}
                onClick={() => handleLoadBtnClick()}
                disabled={!listScorms}
              >
                Загрузить
              </Button>
            </div>
            <div className="custom-col-content">
              <Provider scorm={leftScorm} />
            </div>
          </div>
          <div className="custom-col">
            <div className="custom-col-title">
              <h4>Новый интерактивный элемент</h4>
              <Button
                type="dashed"
                icon={<CloudDownloadOutlined />}
                onClick={() => handleLoadBtnClick(true)}
                disabled={!listScorms}
              >
                Загрузить
              </Button>
            </div>
            <div className="custom-col-content">
              <Provider scorm={rightScorm} isRight />
            </div>
          </div>
        </div>
      </ScormProvider>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {listScorms && (
          <ModalContent
            onSelectedClick={handleSelectedClick}
            onCloseClick={closeModal}
            scorms={listScorms}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
