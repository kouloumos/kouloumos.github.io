import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  border: 2px dotted rgba(43, 188, 138, 0.4);
  border-radius: 10px;
  margin: 1% 10%;
`;

const Text = styled.div`
  padding: 10px 30% 10px 3%;
`;

const TextRight = styled(Text)`
  text-align: right;
  font-weight: bold;
  padding: 10px 3% 10px 30%;
`;

const Discussion = () => {
  return (
    <Wrapper>
      <Text>{`> “What do you have to show for?"`}</Text>
      <TextRight>{`"Nothing, almost nothing." <<`}</TextRight>
      <Text>{`> “You are inventing work. You are avoiding of doing the work.”`}</Text>
    </Wrapper>
  );
};

// Render to #root
ReactDOM.render(
  React.createElement(Discussion, null),
  document.getElementById("react-discussion")
);
