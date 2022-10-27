import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import gmail from "./LinkImages/Gmail.png";
import hub from "./LinkImages/Github.png";
import res from "./LinkImages/Resume.png";
import linkedin from "../NavBar/NavBarImages/linkedin.png";
import DisplayHide from "../DisplayHide";

const LinkContainer = styled.div({
  marginTop: "25%",
  marginLeft: "20%",
  marginRight: "20%",
  height: "calc(33vw + 15vh)",
  marginBottom: "20%",
  // backgroundColor: "black"
});

const LinkTitle = styled.h1({
  color: "white",
  fontSize: "calc(1.8vw + .8vh)",
  marginTop: "3%",
});

const LinkAndBody = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: "3%",
});

const IndividualLinks = styled.div({
  display: "flex",
  background: "#232d3a",
  boxShadow: "2px 0px 0px 0px #9200ec",
  borderRadius: "20px",
  width: "23%",
  height: "calc(7vw + 4vh)",
  transition: "all .5s ease-in",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    boxShadow: "10px 0px 0px 0px #9200ec",
  },
});

const IndividualImage = styled.img({
  height: "calc(7vw + 2vh)",
  transition: "all .4s ease-in",
});

const BodyText = styled.p({
  opacity: "0%",
  color: "white",
  textAlign: "center",
  fontSize: "calc(1vw + .5vh)",
  marginLeft: "5%",
  transition: "opacity .3s ease-in",
});

const LinksComponent = React.forwardRef((props, ref) => {
  const mail = useRef();
  const github = useRef();
  const resume = useRef();
  const LinkedIn = useRef();

  const linkTitle = useRef();
  const mailRef = useRef();
  const gitRef = useRef();
  const resumeRef = useRef();
  const LinkedInRef = useRef();

  const handleEnter = (ref) => {
    ref.current.style.opacity = "100%";
  };

  const handleLeave = (ref) => {
    ref.current.style.opacity = "0%";
  };

  const handleLinkScroll = () => {
    // console.log(resumeRef.current.offsetTop < window.scrollY + window.innerHeight)
    if (resumeRef.current.offsetTop < window.scrollY + window.innerHeight) {
      DisplayHide.displayFunc(linkTitle, "3%");
      setTimeout(() => {
        DisplayHide.displayFunc(mailRef, "3%");
        setTimeout(() => {
          DisplayHide.displayFunc(gitRef, "3%");
          setTimeout(() => {
            DisplayHide.displayFunc(resumeRef, "3%");
            setTimeout(() => {
              DisplayHide.displayFunc(LinkedInRef, "3%");
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    } else {
      DisplayHide.hideFunc(linkTitle, "6%");
      DisplayHide.hideFunc(mailRef, "6%");
      DisplayHide.hideFunc(gitRef, "6%");
      DisplayHide.hideFunc(resumeRef, "6%");
      DisplayHide.hideFunc(LinkedInRef, "6%");
    }
  };

  useEffect(() => {
    DisplayHide.hideFunc(linkTitle, "6%");
    DisplayHide.hideFunc(mailRef, "6%");
    DisplayHide.hideFunc(gitRef, "6%");
    DisplayHide.hideFunc(resumeRef, "6%");
    DisplayHide.hideFunc(LinkedInRef, "6%");

    window.removeEventListener("scroll", handleLinkScroll);
    window.addEventListener("scroll", handleLinkScroll);
    return () => {
      window.removeEventListener("scroll", handleLinkScroll);
    };
  });

  return (
    <LinkContainer ref={ref}>
      <LinkTitle ref={linkTitle}>Links</LinkTitle>

      {/* Gmail Link */}
      <LinkAndBody ref={mailRef}>
        <IndividualLinks
          onMouseEnter={() => handleEnter(mail)}
          onMouseLeave={() => handleLeave(mail)}
        >
          <IndividualImage
            alt="Gmail"
            src={gmail}
            onClick={() => (window.location = "mailto:ravi0rwork@gmail.com")}
            onMouseEnter={() => (mailRef.current.style.cursor = "pointer")}
            onMouseLeave={() => (mailRef.current.style.cursor = "default")}
          />
        </IndividualLinks>

        <BodyText ref={mail}>Contact Me</BodyText>
      </LinkAndBody>

      {/* Github Link */}
      <LinkAndBody ref={gitRef}>
        <IndividualLinks
          onMouseEnter={() => handleEnter(github)}
          onMouseLeave={() => handleLeave(github)}
        >
          <IndividualImage
            alt="Github"
            src={hub}
            onClick={() => window.open("https://github.com/rrosyidi/")}
            onMouseEnter={() => (gitRef.current.style.cursor = "pointer")}
            onMouseLeave={() => (gitRef.current.style.cursor = "default")}
          />
        </IndividualLinks>

        <BodyText ref={github}>Check out my github</BodyText>
      </LinkAndBody>

      {/* Resume Link */}
      <LinkAndBody ref={resumeRef}>
        <IndividualLinks
          onMouseEnter={() => handleEnter(resume)}
          onMouseLeave={() => handleLeave(resume)}
        >
          <IndividualImage
            alt="Resume"
            src={res}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ZmYO6iXWFiy5TVzk_1PtpuxLuUuUMgQX/view?usp=sharing"
              )
            }
            onMouseEnter={() => (resumeRef.current.style.cursor = "pointer")}
            onMouseLeave={() => (resumeRef.current.style.cursor = "default")}
          />
        </IndividualLinks>

        <BodyText ref={resume}>Download my resume</BodyText>
      </LinkAndBody>

      {/* LinkedIn Link */}
      <LinkAndBody ref={LinkedInRef}>
        <IndividualLinks
          onMouseEnter={() => handleEnter(LinkedIn)}
          onMouseLeave={() => handleLeave(LinkedIn)}
        >
          <IndividualImage
            alt="LinkedIn"
            src={linkedin}
            onClick={() =>
              window.open("https://www.linkedin.com/in/ravi-rosyidi-081a84198")
            }
            onMouseEnter={() => (LinkedInRef.current.style.cursor = "pointer")}
            onMouseLeave={() => (LinkedInRef.current.style.cursor = "default")}
          />
        </IndividualLinks>

        <BodyText ref={LinkedIn}>Visit my LinkedIn</BodyText>
      </LinkAndBody>
    </LinkContainer>
  );
});

export default LinksComponent;
