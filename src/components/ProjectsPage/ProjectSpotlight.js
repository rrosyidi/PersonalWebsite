import styled from "@emotion/styled";
import React, { useRef } from "react";

const IndivProject = styled.div({
  width: "30%",
  height: "41.8vw",
  backgroundColor: "#232d3a",
  textAlign: "center",
  margin: "2%",
  borderRadius: "30px",
  transition: "all .5s ease-in",
  marginTop: "3%",
  opacity: "0%",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

const HeaderContainer = styled.div({
  width: "100%",
  background: "linear-gradient(-45deg, white -80%, #9200ec)",
  //   height: "8vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "0",
  borderTopLeftRadius: "30px",
  borderTopRightRadius: "30px",
});

const ProjectHeader = styled.h1({
  color: "white",
  fontSize: "1.3vw",
  borderRadius: "30px",
  margin: "5%",
});

const BodyScroll = styled.div({
  overflowY: "scroll",
  height: "80%",
  "::-webkit-scrollbar": {
    width: ".57vw",
    height: ".5vw",
  },
  "::-webkit-scrollbar-track": {
    background: "#232d3a",
  },
  "::-webkit-scrollbar-thumb": {
    background: "white",
    borderRadius: "20px",
  },
});

const ProjBody = styled.div({
  width: "80%",
  color: "white",
  marginLeft: "10%",
  marginRight: "10%",
  height: "100%",
  fontWeight: "600",
});

const FrontImage = styled.img({
  width: "80%",
  borderRadius: "20px",
  marginTop: "0%",
  marginBottom: "0%",
});

const ProjLine = styled.hr({
  // backgroundColor: "#9200ec",
  backgroundColor: "white",
  borderWidth: "0",
  height: "2px",
  borderRadius: "20px",
  marginTop: "6%",
});

const ImageScroll = styled.div({
  display: "flex",
  overflowX: "scroll",
  "::-webkit-scrollbar": {
    width: ".5vw",
    height: ".5vw",
  },
  "::-webkit-scrollbar-track": {
    background: "#232d3a",
  },
  "::-webkit-scrollbar-thumb": {
    background: "white",
    borderRadius: "20px",
  },
});

const SlidingProjectImg = styled.img({
  width: "80%",
  borderRadius: "20px",
  marginTop: "5%",
  marginLeft: "5%",
  marginBottom: "5%",
});

const ProjectButton = styled.button({
  marginTop: "15%",
  backgroundColor: "transparent",
  width: "70%",
  height: "10%",
  fontSize: "1vw",
  color: "white",
  borderRadius: "40px",
  borderWidth: ".5vw",
  borderColor: "white",
  marginBottom: "10%",
});

const ProjectSpotlight = React.forwardRef((props, ref) => {
  const link = props.data.buttonLink;
  const width = props.scrollImagesWidth;
  const height = props.scrollImagesHeight;
  const mainWidth = props.mainImgWidth;
  const buttonRef = useRef();

  return (
    <IndivProject ref={ref}>
      <HeaderContainer>
        <ProjectHeader>{props.data.projTitle}</ProjectHeader>
      </HeaderContainer>

      <BodyScroll>
        <ProjBody style={{ wordWrap: "break-word", fontSize: "1vw" }}>
          <p>{props.data.mainInfo}</p>
          <FrontImage
            src={props.mainImg}
            style={{ width: mainWidth }}
            alt="mainProjectImage"
          />
          <ProjLine />

          {props.data.extraInfo.map((info, index) => (
            <p style={{ wordWrap: "break-word", fontSize: "1vw" }} key={index}>
              {info}
            </p>
          ))}

          <ProjLine />
          <h2 style={{ fontSize: "1.25vw" }}>ScreenShots</h2>
          <ImageScroll>
            {props.scrollImages.map((img, index) => (
              <SlidingProjectImg
                key={index}
                src={img}
                style={{ width: width, height: height }}
                alt="ProjectImages"
              />
            ))}
          </ImageScroll>

          <ProjectButton
            ref={buttonRef}
            onClick={() => window.open(link)}
            onMouseOver={() => (buttonRef.current.style.cursor = "pointer")}
          >
            {props.data.buttonText}
          </ProjectButton>
        </ProjBody>
      </BodyScroll>
    </IndivProject>
  );
});

export default ProjectSpotlight;
