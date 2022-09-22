import styled from "@emotion/styled";
import React, { useRef, useEffect} from "react";
import face from "../NavBar/NavBarImages/faceShot.jpg";
import DisplayHide from "../DisplayHide.js";

const AboutMeContainer = styled.div({
  marginTop: "35%",
  marginLeft: "15%",
  marginRight: "15%",
});

const AboutMeTag = styled.h1({
  opacity: "100%",
  transition: "all .5s ease-in",
  color: "white",
  fontSize: "1.8vw",
  position: "absolute",
  marginTop: "0%",
});

const AboutMeParagraphContainer = styled.div({
  marginTop: "3%",
  width: "50%",
  height: "50%",
  opacity: "100%",
  transition: "all .5s ease-in",
});

const AboutMeParagraph = styled.p({
  color: "white",
  fontSize: ".95vw",
});

const FaceContainer = styled.div({
  width: "40%",
  display: "flex",
  margin: "5%",
  alignContent: "center",
  justifyContent: "center",
  opacity: "100%",
  marginTop: "3%",
  transition: "all .5s ease-in",
});

const Face = styled.img({
  height: "15vw",
  borderRadius: "20%",
  boxShadow: "4px 4px 0px 2px #9200ec",
});

const AboutMeSection = () => {
  const aboutMeContainer = useRef();
  const aboutMeTag = useRef();
  const aboutMeMeta = useRef();
  const aboutMeImg = useRef();

  useEffect(() => {
    DisplayHide.hideFunc(aboutMeTag, "0%");
    DisplayHide.hideFunc(aboutMeMeta, "3%");
    DisplayHide.hideFunc(aboutMeImg, "3%");

    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);

    // console.log("Offset at start: ", aboutMeTag.current.offsetTop +  aboutMeContainer.current.clientHeight)
    // console.log("Bottom Window: ", window.scrollY+window.innerHeight)

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    // aboutMeTag.current.offsetTop/1.5 < window.scrollY
    if (aboutMeTag.current.offsetTop < window.scrollY+window.innerHeight/2) {
        DisplayHide.displayFunc(aboutMeTag, "-3%")
        setTimeout(()=> {
            DisplayHide.displayFunc(aboutMeMeta, "0%")
            DisplayHide.displayFunc(aboutMeImg, "0%")
        }, 200)
    } else {
        DisplayHide.hideFunc(aboutMeTag, "0%")
        DisplayHide.hideFunc(aboutMeMeta, "0%")
        DisplayHide.hideFunc(aboutMeImg, "0%")
    }
    // console.log("Offset is ", aboutMeTag.current.offsetTop)
    // console.log("Screen Bottom Y is ", window.scrollY+window.innerHeight);
  };

  return (
    <AboutMeContainer ref={aboutMeContainer}>
      <AboutMeTag ref={aboutMeTag}>About Me</AboutMeTag>
      <div style={{ display: "flex" }}>
        <AboutMeParagraphContainer ref={aboutMeMeta}>
          <AboutMeParagraph>
            I am an aspiring developer with experience in both frontend and
            backend developement. Some of the technologies that I have recently
            used are ReactJs/React Native, Express, Jira, and NodeJs.
          </AboutMeParagraph>
          <AboutMeParagraph>
            I was born in Jakarta, Indonesia currently living in the state of
            Maryland. I am a well-organized, detailed oriented problem solver
            with a huge passion to learn new techonlogies in the software
            engineering space. I love to play sports whether that be Soccer,
            Basketball, or even Bowling. I also love binge watching TV shows
            ranging from Arcane to Game of Thrones.
          </AboutMeParagraph>
          <AboutMeParagraph>
            I am currently working as a Junior Software Development Engineer @
            Publicis Sapient. Mainly using technologies such as Jira, Docker,
            and React to digitally transition companies, such as McDonalds, into
            the twenty-first century.
          </AboutMeParagraph>
          <AboutMeParagraph>
            I'm interested in working on ambitious projects with positive people
            and I'm always on the lookout and open for new opportunities!
          </AboutMeParagraph>
        </AboutMeParagraphContainer>

        <FaceContainer ref={aboutMeImg}>
          <Face src={face} alt="Face" />
        </FaceContainer>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMeSection;
