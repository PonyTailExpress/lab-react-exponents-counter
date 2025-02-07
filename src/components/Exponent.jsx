const Exponent = ({ num, exponent }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n<sup>{exponent}</sup></p>
      <p className="exponent-result">
        {num}
        <sup>{exponent}</sup> = <span className="total">{Math.pow(num, exponent)}</span>
      </p>
    </div>
  );
};

export default Exponent;
