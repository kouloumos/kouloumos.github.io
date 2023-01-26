import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "@emotion/styled";

const SpoilerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14%;
`;

const SpoilerText = styled.div`
  font-size: 24px;
  font-style: bold;
`;

const TwitterCTA = styled.a`
  align-self: flex-end;
`;

const twitterRef =
  "https://twitter.com/messages/compose?recipient_id=1074061591";

const Spoiler = () => {
  const [text, setText] = React.useState("");
  const [twitterCTA, setTwitterCTA] = React.useState("");
  const [twitterDM, setTwitterDM] = React.useState("");

  React.useEffect(() => {
    setText(document.getElementById("react-spoiler").getAttribute("data-text"));
    setTwitterCTA(
      document.getElementById("react-spoiler").getAttribute("data-twitter")
    );
    setTwitterDM(
      document.getElementById("react-spoiler").getAttribute("data-dm")
    );
  }, []);

  return (
    <SpoilerWrapper>
      <SpoilerText>{text}</SpoilerText>
      <TwitterCTA href={`${twitterRef}&text=${twitterDM}`} target="_blank">
        {twitterCTA}
      </TwitterCTA>
    </SpoilerWrapper>
  );
};

// Render to #root
ReactDOM.render(
  React.createElement(Spoiler, null),
  document.getElementById("react-spoiler")
);
