const ExponentSix = ({ count = 0 }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {count}⁶ = <span className="total">{!isNaN(count) ? Math.pow(count, 6) : 0}</span>
    </p>
  </div>
);

export default ExponentSix;
