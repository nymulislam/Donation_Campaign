import { Link } from "react-router-dom";

const DonationAdded = ({ donation }) => {
  const {
    imageUrl,
    category,
    heading,
    textColor,
    textBackgroundColor,
    cardBackgroundColor,
    price, id
  } = donation;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img className="rounded-t-2xl md:rounded-l-2xl" src={imageUrl} alt="donation" />
        <div
          className="card-body rounded-r-2xl"
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
          <div className="w-fit">
            <h4
              className="text-left text-base font-black w-fit"
              style={{ color: textColor }}
            >
              {heading}
            </h4>
          </div>
          <div>
            <h2 className="text-left" style={{ color: textColor }}>
              ${price}
            </h2>
          </div>
          <Link to={`/donation/${id}`} className="text-left">
          <button className="btn normal-case text-white mt-5 w-2/3 sm:w-1/4 xl:w-fit" style={{ backgroundColor: textColor }}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationAdded;
