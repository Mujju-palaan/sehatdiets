import "./FlipperCard.css";

const FlipperCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>Front Side</p>
          </div>
          <div className="card-back">
            <p>Back Side</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipperCard;
