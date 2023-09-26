import { saveDonation } from "../Utility/localStorage";

const Card = ({ card }) => {
  const {
    imageUrl,
    category,
    heading,
    textColor,
    textBackgroundColor,
    cardBackgroundColor,
    id,
  } = card;

  const handleDonation = () => {
    saveDonation(id);
  };
  return (
    <div>
      <div
        onClick={handleDonation}
        className="card card-compact bg-base-100 shadow-xl"
      >
        <figure>
          <img src={imageUrl} />
        </figure>
        <div
          className="card-body rounded-b-2xl"
          style={{ backgroundColor: cardBackgroundColor }}
        >
          <div
            className="w-fit px-2 py-1 rounded"
            style={{ backgroundColor: textBackgroundColor }}
          >
            <h2 className="text-left" style={{ color: textColor }}>
              {category}
            </h2>
          </div>
          <h4
            className="text-left text-lg font-semibold my-4"
            style={{ color: textColor }}
          >
            {heading}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
