import "../styles/index.scss";
import Recipes from "./Recipes";
import logo from "../images/bag-logo.svg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>hello React</h1>
        </section>
        <img src={logo} alt="Buy a gift Logo" width="250" />
        <Recipes />
      </main>
    </>
  );
};

export default App;
