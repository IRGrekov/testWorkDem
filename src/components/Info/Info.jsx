import React, { useState, useEffect } from "react";
import TitleInfo from "./TitleInfo";
import TitleMoreInfo from "./TitleMoreInfo";
import TitleMoreInfoMobile from "./TitleMoreInfoMobile";
import "./styles.scss";

function Info() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 816;
      console.log("New isMobile value:", newIsMobile);
      setIsMobile(newIsMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("Rendering with isMobile:", isMobile);

  return (
    <div className="container">
      <TitleInfo />
      {isMobile ? <TitleMoreInfoMobile /> : <TitleMoreInfo />}
    </div>
  );
}


export default Info;
