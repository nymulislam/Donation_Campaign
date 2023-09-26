import "./Banner.css";

const Banner = () => {
  return (
    <div className="big-image mt-24">
      <div className="background-image"></div>
      <div className="overlay">
        <h1 className="mb-14 text-5xl font-semibold">
          I Grow By Helping People In Need
        </h1>
        <div className="form-control w-full">
          <div className="input-group justify-center">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-1/3"
            />
            <button className="btn btn-square hover:bg-red-600 w-fit px-3 text-white bg-[#FF444A] border-[#FF444A]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
