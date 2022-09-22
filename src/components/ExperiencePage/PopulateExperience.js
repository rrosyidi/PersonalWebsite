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
  fontSize: "1vw",
  color: "white",
  alignSelf: "center",
  justifySelf: "center",
  width: "20%",
});

const NextLine = styled.hr({
  width: "10%",
  height: "2px",
  marginLeft: "0%",
  borderColor: "#9200ec",
  backgroundColor: "#9200ec",
  borderRadius: "40px",
  alignSelf: "center",
});

const ExpHeaderBody = styled.div({
  width: "55%",
});

const ExpHeader = styled.p({
  fontSize: "1.4vw",
  fontWeight: "bold",
  color: "white",
  marginBottom: "2.5%",
});

const ExpBody = styled.li({
  color: "white",
  marginBottom: "2.5%",
  fontSize: ".9vw",
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

    //   <div ref={ref} className="listExperience">
    //     <div className="individualSec">
    //       <p className="dates">{props.date}</p>
    //       <hr className="nextLine indivLine" />

    //       <div className="expHeaderBody">
    //         <p className="expHeader">
    //           {props.title}
    //           {props.company}
    //         </p>
    //         {props.meta.map((point, index) => (
    //           <li className="expBody" key={index}>
    //             {point}
    //           </li>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
  );
});

export default PopulateExperience;
