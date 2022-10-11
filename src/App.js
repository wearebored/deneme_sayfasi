import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import bar from "./helper/barlist";
import "./App.css";
import "./components/navbar/Navbar.css"
const liste = bar;
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          {liste.map((a) => (
            <Navbar key={a} veri={a} />
          ))}
        </ul>
      </nav>
      <Header />
    </div>
  );
}


export default App;
