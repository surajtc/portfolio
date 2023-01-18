import { useState } from "react";
import { Container } from "@chakra-ui/react";
import { Resume } from "./components/Resume";
import data from "./data";
// import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxW="container.lg" p={0}>
      <Resume resume={data} />
    </Container>
  );
}

export default App;
