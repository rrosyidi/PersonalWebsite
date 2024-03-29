import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
// import { display, hide } from "../DisplayHide";

const Name = styled.h1(
  {
    // fontSize: "7vw",
    fontSize: "calc(5vw + 2.5vh)",
    letterSpacing: "20px",
    textAlign: "center",
    fontWeight: 900,
    textShadow: "0px 0px 10px #9200ec",
    color: "white",
    transition: "all .3s ease-in",
    position: "absolute",
    alignSelf: "center",
    // backgroundColor: "black"
  },
  (props) => ({
    marginTop: props.marginTop,
    opacity: props.opac,
  })
);

const Container = styled.div({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const SubHeading = styled.h2(
  {
    textAlign: "center",
    color: "white",
    // fontSize: "1.3vw",
    fontSize: "calc(1vw + .5vh)",
    transition: "all .3s ease-in",
    // backgroundColor: "black"
  },
  (props) => ({
    marginTop: props.marginTop,
    opacity: props.opac,
  })
);


const Line = styled.hr(
  {
    position: "absolute",
    width: "70%",
    backgroundColor: "white",
    transition: "all 2s ease-in",
    marginTop: "95vh",
  },
  (props) => ({
    opacity: props.opac,
  })
);

const TitlePage = () => {
  // [MarginTop, Opacity, Transform]
  const [showName, setShowName] = useState(false);
  const [showSubHeading, setShowSubHeading] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowName(true);
      setShowLine(true);
    }, 1150);
    setTimeout(() => {
      setShowSubHeading(true);
    }, 1400);
    return () => {};
  });

  return (
    <Container>
      <Name
        marginTop={showName ? "-5%" : "40vh"}
        opac={showName ? "100%" : "0%"}
      >
        RAVI ROSYIDI
      </Name>
      <SubHeading
        marginTop={showSubHeading ? "8vh" : "40vh"}
        opac={showSubHeading ? "100%" : "0%"}
      >
        Full-Stack Software Engineer
      </SubHeading>
      <Line opac={showLine ? "100%" : "0%"} />
    </Container>
  );
};

export default TitlePage;
