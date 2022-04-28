import MenuItem from "./MenuItem";
import "../../menu.css";

function Menu() {
  return (
    <div className="container" id="Menu">
      <h1>MENU</h1>
      <div className="menu">
        <MenuItem
          picture={require("../../images/szalamis-pizza.jpg")}
          name="Szalamis Pizza"
          toppings={[
            { name: "Paradicsomszósz", id: 0 },
            { name: "Szalámi", id: 1 },
            { name: "Sajt", id: 2 },
          ]}
        />
        <MenuItem
          picture={require("../../images/szalamis-pizza.jpg")}
          name="Szalamis Pizza"
          toppings={[
            { name: "Paradicsomszósz", id: 0 },
            { name: "Szalámi", id: 1 },
            { name: "Sajt", id: 2 },
          ]}
        />
        <MenuItem
          picture={require("../../images/szalamis-pizza.jpg")}
          name="Szalamis Pizza"
          toppings={[
            { name: "Paradicsomszósz", id: 0 },
            { name: "Szalámi", id: 1 },
            { name: "Sajt", id: 2 },
          ]}
        />
        <MenuItem
          picture={require("../../images/szalamis-pizza.jpg")}
          name="Szalamis Pizza"
          toppings={[
            { name: "Paradicsomszósz", id: 0 },
            { name: "Szalámi", id: 1 },
            { name: "Sajt", id: 2 },
          ]}
        />
        <MenuItem
          picture={require("../../images/szalamis-pizza.jpg")}
          name="Szalamis Pizza"
          toppings={[
            { name: "Paradicsomszósz", id: 0 },
            { name: "Szalámi", id: 1 },
            { name: "Sajt", id: 2 },
          ]}
        />
        <MenuItem
          picture={require("../../images/szalamis-pizza.jpg")}
          name="Szalamis Pizza"
          toppings={[
            { name: "Paradicsomszósz", id: 0 },
            { name: "Szalámi", id: 1 },
            { name: "Sajt", id: 2 },
          ]}
        />
      </div>
    </div>
  );
}

export default Menu;
