import "./Card.css";
function Card(a) {
  return (
    <div className="bar">
      <div className="baslik">
        <p>{a.title}</p>
      </div>
      <div className="düzen">
        <div className="resim">
          <img src={a.image} alt={a.title} />
        </div>
        <div className="bilgi">
          <p>{a.desc}</p>
        </div>
      </div>
    </div>
  );
  
}
export default Card;
