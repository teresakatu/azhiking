import Header from "./components/Header";
import TrailCard from "./components/TrailCard";
import trails from "./data/trails";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <p className="site-subtitle">
        Twelve trails worth driving for, from Camelback's front-yard scramble
        to the summit of the state's highest peak. Distances and elevation
        gain are for the out-and-back route described — always check current
        conditions before you go.
      </p>
      <main className="board">
        {trails.map((trail) => (
          <TrailCard key={trail.id} trail={trail} />
        ))}
      </main>
      <footer className="site-footer">
        <p>
          Distances, elevation gain, and difficulty are approximate and can
          vary by route and trailhead — check the National Park Service, the
          Forest Service, or Arizona State Parks for current trail conditions
          and any permits or fees before you head out.
        </p>
      </footer>
    </div>
  );
}

export default App;
