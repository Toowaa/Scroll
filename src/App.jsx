import { useState } from "react";

import "./App.css";
import Scroll from "./assets/components/scroll";
import Imagen from "./assets/components/imagen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <header>
          <Scroll />
        </header>
        <Imagen />
      </main>
    </>
  );
}

export default App;
