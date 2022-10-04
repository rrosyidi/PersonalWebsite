import styled from "@emotion/styled";
import React from "react";

const ListExperience = styled.div({
  marginTop: "3%",
  backgroundColor: "#232d3a",
  borderRadius: "30px",
  boxShadow: "2px 2px 0px 1px #9200ec",
  transition: "all .5s ease-in",
//   backgroundColor: "white"
});

const IndividualSec = styled.div({
  display: "flex",
  marginLeft: "5%",
  marginRight: "5%",
});

const Date = styled.p({
  fontSize: "calc(.8vw + .4vh)",
  color: "white",
  alignSelf: "center",
  justifySelf: "center",
  width: "20%",
});

const NextLine = styled.hr({
  width: "10%",
  height: "2px",
  marginLeft: "2%",
  borderColor: "#9200ec",
  backgroundColor: "#9200ec",
  borderRadius: "40px",
  alignSelf: "center",
});

const ExpHeaderBody = styled.div({
  width: "55%",
});

const ExpHeader = styled.p({
  fontSize: "calc(1vw + .6vh)",
  fontWeight: "bold",
  color: "white",
  marginBottom: "2.5%",
});

const ExpBody = styled.li({
  color: "white",
  marginBottom: "2.5%",
  fontSize: "calc(.8vw + .4vh)",
});

const PopulateExperience = React.forwardRef((props, ref) => {
  return (
    <ListExperience ref={ref}>
      <IndividualSec>
        <Date>{props.date}</Date>
        <NextLine />

        <ExpHeaderBody>
          <ExpHeader>
            {props.title}
            {props.company}
          </ExpHeader>
          {props.meta.map((point, index) => (
            <ExpBody key={index}>{point}</ExpBody>
          ))}
        </ExpHeaderBody>
      </IndividualSec>
    </ListExperience>
  );
});

export default PopulateExperience;
