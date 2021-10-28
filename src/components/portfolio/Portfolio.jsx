import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://camo.githubusercontent.com/e0a63b7f676cc1f2b85181b8bdf56a17fe2e9612e739d836d7b8df400bbd51c2/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313931383438312f3131313638392f35383864613535382d366166662d313165322d386331332d3363323661386161313136652e706e67"
            alt="starry night"
          />
        </div>
      </div>
    </div>
  );
}
