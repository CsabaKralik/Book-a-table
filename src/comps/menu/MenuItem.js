import "../../menuitems.css";

function MenuItem(props) {
  return (
    <div className="menu-item">
      <img src={props.picture} alt={props.picture} className="menu-pics"></img>
      <div className="topping">
        <h2>{props.name}</h2>
        <ol>
          {props.toppings.map((topping) => {
            return <li key={topping.id}>{topping.name}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
export default MenuItem;
