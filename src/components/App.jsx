import "../styles/index.scss";
import Recipes from "./Recipes";

const App = () => {
  return (
    <>
      <section className="hello"></section>
      <main>
        <section>
          <h1>hello React</h1>
        </section>
        <Recipes />
      </main>
    </>
  );
};

export default App;
