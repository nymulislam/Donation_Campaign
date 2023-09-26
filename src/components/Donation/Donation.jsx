import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/localStorage";
import DonationAdded from "../DonationAdded/DonationAdded";

const Donation = () => {
  const [donationsAdded, setDonationAdded] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  const donations = useLoaderData();

  useEffect(() => {
    const storedDonateIds = getStoredDonation();
    if (donations.length > 0) {
      const donationAdd = donations.filter((donation) =>
        storedDonateIds.includes(donation.id)
      );
      setDonationAdded(donationAdd);
    }
  }, []);
  return (
    <>
      <div className="mt-28 grid grid-cols-2 gap-6">
        {donationsAdded.slice(0, dataLength).map((donation) => (
          <DonationAdded key={donation.id} donation={donation}></DonationAdded>
        ))}
      </div>
      <div className={dataLength === donationsAdded.length && 'hidden'}>
        <button
          onClick={() => setDataLength(donationsAdded.length)}
          className="btn normal-case text-white text-lg font-medium mt-7 px-8 bg-green-700 hover:bg-green-600 text-center"
        >
          See All
        </button>
      </div>
    </>
  );
};

export default Donation;
