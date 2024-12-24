import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import { Button } from "@material-ui/core";
import ComplexTitle from "./components/ComplexTitle";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      {/* <BasicTitle special>styled components</BasicTitle>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton>Click me</DefaultButton>
      <HipsterButton>Click me</HipsterButton> */}
      {/* <Button variant="contained" color="primary">
        Material UI Button
      </Button> */}
      <ComplexTitle title="This is a complex title" />
    </div>
  );
}

export default App;
