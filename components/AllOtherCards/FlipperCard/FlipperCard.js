import "./FlipperCard.css";

const FlipperCard = () => {
  return (
    <>
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <p>Front Side</p>
          </div>
          <div class="card-back">
            <p>Back Side</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipperCard;
