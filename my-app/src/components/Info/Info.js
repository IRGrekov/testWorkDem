//import logo from "./logo.svg";
import "./styles.scss";
import TitleInfo from "./TitleInfo";
import TitleMoreInfo from "./TitleMoreInfo";
import TitleMoreInfoMobile from "./TitleMoreInfoMobile";
function Info() {
  return (
    <div className="container">
      <TitleInfo />
      <TitleMoreInfo />
      {/* <TitleMoreInfoMobile /> */}
    </div>
  );
}

export default Info;

//npm install @mui/material

// import React from "react";
// import { useMediaQuery } from "@mui/material";
// import TitleInfo from "./TitleInfo";
// import TitleMoreInfo from "./TitleMoreInfo";
// import TitleMoreInfoMobile from "./TitleMoreInfoMobile";

// function Info() {
//   const isMobile = useMediaQuery("(max-width: 600px)");

//   return (
//     <div className="container">
//       <TitleInfo />
//       {isMobile ? <TitleMoreInfoMobile /> : <TitleMoreInfo />}
//     </div>
//   );
// }

// export default Info;
