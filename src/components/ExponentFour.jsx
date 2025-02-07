const ExponentFour = ({ count = 0 }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">
      {count}⁴ = <span className="total">{!isNaN(count) ? Math.pow(count, 4) : 0}</span>
    </p>
  </div>
);

export default ExponentFour;
