import "./App.css";
import { Wrapper } from "../lib";
import { Flex } from "../lib/components/Flex";

function App() {
  return (
    <Flex gap={"10px"}>
      <Wrapper bgCol={"c300"} r={"radiusB"}>
        Box1
      </Wrapper>
      <Wrapper bgCol={"c300"} r={"radiusB"}>
        Box2
      </Wrapper>
    </Flex>
  );
}

export default App;
