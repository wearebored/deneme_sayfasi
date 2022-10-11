import { data } from "../../helper/data";
import Card from "../cards/Card";
import "./Header.css"
function Header(){
    return (
      <header>
        <div>
          <h1>POPULAR TOUR PLACES</h1>
        </div>
        <div className="kartlar">
          {data.map((a) => (
            <Card key={a.id} desc={a.desc} image={a.image} title={a.title} />
          ))}
        </div>
      </header>
    );
}
export default Header