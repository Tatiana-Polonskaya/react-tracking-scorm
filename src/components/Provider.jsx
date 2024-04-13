import { useState, useEffect } from "react";
import { loadArchive } from "../api";
import LoadButton from "../components/LoadButton/LoadButton";
import Table from "../components/Table/Table";
import { ScoSCORMEmbed } from "../components/SCORMEmbed";

export default function Provider(props) {
  const [newScorm, setNewScorm] = useState();

  const [info, setInfo] = useState(props.scorm);

  useEffect(() => {
    if (props.scorm) setInfo(props.scorm);
  }, [props.scorm]);

  const handleSetNewScorm = (file) => {
    setNewScorm(file);
  };

  useEffect(() => {
    if (newScorm) {
      const response = async () => {
        const res = await loadArchive(newScorm);
        if (res.ok) {
          const json = await res.json();
          setInfo(json.data);
        }
      };
      response();
    }
  }, [newScorm]);

  return (
    <div>
      {!!info ? (
        <>
          <ScoSCORMEmbed scorm={info} />
          <Table
            title={info.title}
            time_download={info.time_download}
            time_render={info.time_render}
            archive_size={info.archive_size}
          />
        </>
      ) : (
        <LoadButton setFile={handleSetNewScorm} />
      )}
    </div>
  );
}
