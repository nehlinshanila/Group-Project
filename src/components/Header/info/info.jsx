import { useState } from "react";
const Info = () => {
  const [info, setInfo] = useState({
    name: "Sherlina",
    id: 2031113642,
    major: "CSE",
  });
  return (
    <div>
      <h3>{info.name}</h3>
      <h3>{info.id}</h3>
      <h3>{info.major}</h3>
    </div>
  );
};

export default Info;
