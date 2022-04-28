import Menu from "./comps/menu/Menu";

import Landing from "./comps/landing/landing";
import Navbar from "./comps/landing/navbar";
import Intro from "./Intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Intro />
      <Menu />
    </div>
  );
}

export default App;
