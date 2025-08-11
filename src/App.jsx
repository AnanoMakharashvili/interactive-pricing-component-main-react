import { useState } from "react";
import Pattern from "./assets/bg-pattern.svg";
import Circle from "./assets/pattern-circles.svg";
import Check from "./assets/icon-check.svg";
import "./App.css";

const Main = () => {
  const [pageviews, setPageviews] = useState(100);
  const [isYearly, setIsYearly] = useState(false);

  const handleSliderChange = (e) => {
    setPageviews(Number(e.target.value));
  };

  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };

  const calculatePrice = () => {
    const priceMap = {
      25: 8,
      50: 12,
      75: 16,
      100: 24,
      125: 28,
      150: 32,
      175: 36,
      200: 40,
    };
    let base = priceMap[pageviews] || 16;

    if (isYearly) {
      base = base * 12 * 0.75;
    }

    return base.toFixed(2);
  };

  return (
    <div className="main-container">
      <img className="pattern" src={Pattern} alt="pattern" />
      <div className="header">
        <img className="circle" src={Circle} alt="circle" />
        <div className="pricing-for-30-days">
          <h1 className="simple-pricing">Simple, traffic-based pricing</h1>
          <span className="sign-up-span">
            Sign-up for our 30-day trial. No credit card required.
          </span>
        </div>
      </div>

      <div className="card">
        <h2 className="pageviews-style">{pageviews}K PAGEVIEWS</h2>

        <input
          className="slider"
          type="range"
          name="range"
          min="25"
          max="200"
          step="25"
          value={pageviews}
          onChange={handleSliderChange}
        />

        <div className="price-month">
          <span className="price">${calculatePrice()}</span>
          <span className="price-span">/ {isYearly ? "year" : "month"}</span>
        </div>

        <div className="billing-container">
          <span>Monthly Billing</span>
          <div
            className={`toggle-button ${isYearly ? "active" : ""}`}
            onClick={toggleBilling}
          >
            <span
              className={`toggle-circle ${isYearly ? "active" : ""}`}
            ></span>
          </div>
          <span>Yearly Billing</span>
          <span className="percent">-25%</span>
        </div>

        <div className="list">
          <div className="list-check">
            <img className="icon-check" src={Check} alt="icon-check" />
            <span>Unlimited websites</span>
          </div>
          <div className="list-check">
            <img className="icon-check" src={Check} alt="icon-check" />
            <span>100% data ownership</span>
          </div>
          <div className="list-check">
            <img className="icon-check" src={Check} alt="icon-check" />
            <span>Email reports</span>
          </div>
        </div>

        <button className="start-my-trial-button">Start my trial</button>
      </div>
    </div>
  );
};

function App() {
  return <Main />;
}

export default App;
