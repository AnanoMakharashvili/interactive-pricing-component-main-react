import Pattern from "./assets/bg-pattern.svg";
import Circle from "./assets/pattern-circles.svg";
import Check from "./assets/icon-check.svg";

import "./App.css";

const Main = () => {
  return (
    <div className="main-container">
      <img className="Pattern" src={Pattern} alt="Pattern" />
      <div>
        <img className="Circle" src={Circle} alt="Circle" />
        <h1>Simple, traffic-based pricing</h1>
        <span>Sign-up for our 30-day trial. No credit card required. </span>
      </div>
      <h2>100K PAGEVIEWS</h2>
      <input type="range" name="range" step="25" />
      <span>$16.00</span>
      <span>/ month</span>
      <span>Monthly Billing</span>
      <span className="toggle-button"></span>
      <span>Yearly Billing</span>
      <span>-25%</span>
      <img className="icon-check" src={Check} alt="icon-check" />
      <span>Unlimited websites</span>
      <img className="icon-check" src={Check} alt="icon-check" />
      <spam>100% data ownership </spam>
      <img className="icon-check" src={Check} alt="icon-check" />
      <span>Email reports</span>
      <button>Start my trial</button>
    </div>
  );
};

function App() {
  return <Main />;
}

export default App;
