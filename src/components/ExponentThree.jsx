const ExponentThree = ({ count = 0 }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      {count}³ = <span className="total">{!isNaN(count) ? Math.pow(count, 3) : 0}</span>
    </p>
  </div>
);

export default ExponentThree;
