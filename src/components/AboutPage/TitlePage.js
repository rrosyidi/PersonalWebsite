import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
// import { display, hide } from "../DisplayHide";

const Name = styled.h1(
  {
    fontSize: "7vw",
    letterSpacing: "20px",
    textAlign: "center",
    fontWeight: 900,
    textShadow: "0px 0px 10px #9200ec",
    color: "white",
    transition: "all .3s ease-in",
    position: "absolute",
    alignSelf: "center",
  },
  (props) => ({
    marginTop: props.marginTop,
    opacity: props.opac,
  })
);

// const Container = styled.div`
//   height: 90vh;
//   // background-color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

const Container = styled.div({
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

// const SubHeading = styled.h2`
//   text-align: center;
//   color: white;
//   font-size: 1.3vw;
//   transition: all 0.3s ease-in;
//   // background-color: black;
//   margin-top: ${(props) => props.marginTop};
//   opacity: ${(props) => props.opac};
// `;

const SubHeading = styled.h2(
  {
    textAlign: "center",
    color: "white",
    fontSize: "1.3vw",
    transition: "all .3s ease-in",
  },
  (props) => ({
    marginTop: props.marginTop,
    opacity: props.opac,
  })
);

// const Line = styled.hr`
//   position: absolute;
//   width: 70%;
//   background-color: white;
//   transition: all 2s ease-in;
//   opacity: ${(props) => props.opac};
//   margin-top: 95vh;
// `;

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
  }, []);

  return (
    <Container>
      <Name
        marginTop={showName ? "-5%" : "30%"}
        opac={showName ? "100%" : "0%"}
      >
        RAVI ROSYIDI
      </Name>
      <SubHeading
        marginTop={showSubHeading ? "7%" : "40%"}
        opac={showSubHeading ? "100%" : "0%"}
      >
        Full-Stack Software Engineer | Recent New Grad
      </SubHeading>
      <Line opac={showLine ? "100%" : "0%"} />
    </Container>
  );
};

export default TitlePage;
