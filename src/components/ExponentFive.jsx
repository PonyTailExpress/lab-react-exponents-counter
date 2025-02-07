const ExponentFive = ({ count = 0 }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
      {count}⁵ = <span className="total">{!isNaN(count) ? Math.pow(count, 5) : 0}</span>
    </p>
  </div>
);

export default ExponentFive;
