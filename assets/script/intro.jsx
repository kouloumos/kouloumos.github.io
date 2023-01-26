import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "@emotion/styled";

const IntroWrapper = styled.div`
  font-size: 12px;
  font-style: italic;
  padding-bottom: 7px;
  border-bottom: 1px dashed grey;
`;

const Intro = () => {
  const [number, setNumber] = React.useState("");

  React.useEffect(() => {
    setNumber(document.getElementById("react-intro").getAttribute("data-text"));
  }, []);

  return (
    <IntroWrapper>
      <span>{`This is ${
        number != " " ? `the ${number}` : ""
      } part of my `}</span>
      <a href="/getting-to-base-camp">"Getting to Base Camp"</a>{" "}
      <span>{`series; a reflection of my first year as an aspiring Bitcoin Core contributor and a call to other bystanders.`}</span>
    </IntroWrapper>
  );
};

// Render to #root
ReactDOM.render(
  React.createElement(Intro, null),
  document.getElementById("react-intro")
);
