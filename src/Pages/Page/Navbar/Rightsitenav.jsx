import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import Sociallogin from "../../../Firebase/Sociallogin";

const Rightsitenav = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-poppins font-medium p-3">Login With</h2>
        <div className="p-4 space-y-2">
          <Sociallogin />
        </div>
      </div>
      {/* 2nd box */}
      <div className="">
        <h2 className="text-2xl font-poppins font-medium mb-4 p-3">Find Us On</h2>
        <div className="p-4 rounded-t-lg">
          <a className="flex items-center gap-4 border p-3 rounded-t-lg" href="https://www.facebook.com/naymhossen3.0/">
            <GrFacebook /> Facebook
          </a>
          <a className="flex items-center gap-4 border p-3 rounded-t-lg" href="">
            <GrTwitter /> Twitter
          </a>
          <a className="flex items-center gap-4 border p-3 rounded-t-lg">
            <GrInstagram /> Instagram
          </a>
        </div>
      </div>

      {/* Q Zone Section */}
      <div className="m-8 bg-gray-400 p-1 rounded-md">
        <h1 className="font-bold mb-5">Q-Zone</h1>
        <img src="https://i.ibb.co/2SwQFfY/qZone1.png" alt="" />
        <img src="https://i.ibb.co/M2849VD/qZone2.png" alt="" />
        <img src="https://i.ibb.co/8zH7G14/qZone3.png" alt="" />
      </div>
      {/* slide section */}
      <div className="bg-[url('https://i.ibb.co/Q8vVPhy/bg1.png')] text-white font-poppins pb-5 mt-8">
        <div className="p-3">
          <div>
          <h2 className=" text-3xl font-bold text-center p-8">Create an Amazing Newspaper</h2>
          </div>
          <div className="text-center">
          <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          </div>
          <div className="flex items-center justify-center mt-5">
          <button className="btn bg-red-600 border-none text-white">Learn More</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Rightsitenav;
