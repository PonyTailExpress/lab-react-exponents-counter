const ExponentTwo = ({ count = 0 }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">
      {count}² = <span className="total">{!isNaN(count) ? Math.pow(count, 2) : 0}</span>
    </p>
  </div>
);

export default ExponentTwo;

