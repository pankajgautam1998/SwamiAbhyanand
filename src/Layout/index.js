// import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="relative ">
        <Header />
        {children}
        <Footer />
        <div>
          <div className="fixed grid right-0 top-96  p-2 font-bold rounded bg-gradient-to-r from-orange-300 to-emerald-300">
            <p>LATEST EVENTS</p>
            <p>
              नवीनतम कार्यक्रम
              <span>
                <ArrowDropDown onClick={handleclick} />
              </span>
            </p>
          </div>
          <Link to="https://api.whatsapp.com/send/?phone=918881810100&text&type=phone_number&app_absent=0">
            <div className="right-0  top-[45%] p-8 fixed ">
              <img
                src="https://img.freepik.com/free-psd/whatsapp-icon-isolated-3d-render-illustration_47987-9785.jpg"
                alt=""
                className=" lg:hidden h-16 rounded"
              />
            </div>
          </Link>
        </div>
        <div className="max-lg:hidden fixed grid right-0 top-96  p-2 font-bold rounded bg-gradient-to-r from-orange-300 to-emerald-300">
          <p>LATEST EVENTS</p>
          <p>
            नवीनतम कार्यक्रम
            <span>
              <ArrowDropDown onClick={handleclick} />
            </span>
          </p>
        </div>
        <Link to="https://api.whatsapp.com/send/?phone=918881810100&text&type=phone_number&app_absent=0">
          <div className="max-lg:hidden right-0  top-[72%] p-8 fixed ">
            <img
              src="https://img.freepik.com/free-psd/whatsapp-icon-isolated-3d-render-illustration_47987-9785.jpg"
              alt=""
              className="h-16 rounded"
            />
          </div>
        </Link>
      </div>
      {open && (
        <div className="absolute top-48 bg-orange-300  rounded right-0  h-48 justify-evenly shadow-lg shadow-orange-400 ">
          <div className="flex justify-between px-10 pt-2">
            <p>प्रारंभ तिथि</p>
            <p>समाप्ति तिथि</p>
            <p>वक्ता</p>
            <p>स्थान</p>
          </div>
          <hr className="text-white" />
          <div className="flex justify-between px-5 pt-7">
            <p>2023-05-17</p>
            <p>2023-05-23</p>
            <p>स्वामी अभयानन्द सरस्वती जी महाराज</p>
            <p>गाजियाबाद</p>
          </div>
          <hr className="text-white" />
          <div className="flex justify-between px-2 pt-7">
            <p>2023-07-03</p>
            <p>2023-07-03</p>
            <p>
              अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभयानंद सरस्वती जी
            </p>
            <p>लखनऊ</p>
          </div>
          <hr className="text-white" />
          <div className="flex justify-between px-5 ">
            <p>2023-07-15</p>
            <p>2023-07-15</p>
            <p>स्वामी अभयानंद सरस्वती जी</p>
            <p>लखनऊ</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
