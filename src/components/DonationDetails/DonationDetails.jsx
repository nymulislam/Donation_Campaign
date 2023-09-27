import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
  const donationData = useLoaderData();
  const { id } = useParams();
  const donationCard = donationData.find((donate) => donate.id === id);

  const handleDonate = () => {
     toast.success("Jazakallah, Donate Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="mt-16">
      <div className="relative">
        <img
          className="w-full h-[70vh] mx-auto"
          src={donationCard.imageUrl}
          alt="donation"
        />
        <div
          className="bg-black opacity-50 bottom-0 w-full h-28 absolute
        "
        ></div>
        <button
          onClick={handleDonate}
          className="bg-red-500 hover:bg-green-600 absolute bottom-8 text-white left-10 btn"
        >
          Donate ${donationCard.price}
        </button>
        <ToastContainer></ToastContainer>
      </div>
      <div
        className="my-10 text-4xl font-semibold text-left"
        style={{ color: donationCard.textColor }}
      >
        <h1>{donationCard.heading}</h1>
      </div>
      <div className="text left text-justify">
        <p>{donationCard.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
