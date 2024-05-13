import Navbar from "./components/navbar/navbar.js";
import Main from "./components/main/main.js";
import { data } from "./helper/data";
function App() {
  return (
    <div >
      <Navbar/>
      <Main data={data}/>
    </div>
  );
}

export default App;
