import { withScorm } from "@upandgo/react-scorm-provider";
import { useEffect, useState } from "react";
import { putScorm } from "../api";
import { BASE_URL } from "../api";

const SCORMEmbed = (props) => {
  const [timeLoaded, setTimeLoaded] = useState(props.scorm.time_render);
  let start = 0;

  useEffect(() => {
    start = new Date().getTime();
  }, []);

  const handleOnLoaded = () => {
    let end = new Date().getTime();
    const time = end - start;
    if (!timeLoaded) {
      const respone = async () => {
        const res = await putScorm(props.scorm.id, String(time).split(0,3));
      };
      respone();
    }
    setTimeLoaded(time);
  };

  return (
    <iframe
      src={BASE_URL + props.scorm.link}
      width="600px"
      height="600px"
      title="SCORM Project"
      onLoad={() => handleOnLoaded()}
    />
  );
};
export const ScoSCORMEmbed = withScorm()(SCORMEmbed);
