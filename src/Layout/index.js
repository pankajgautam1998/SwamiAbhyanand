// import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    setOpen(!true);
  };
  useEffect(() => {
    handleclick();
  }, []);

  return (
    <>
      <div className="relative">
        <Header />
        {children}
        <Footer />
        <div className="fixed grid right-0 top-96 bg-green-200 p-2 font-bold ">
          <p>LATEST EVENTS</p>
          <p>
            नवीनतम कार्यक्रम
            <span onClick={handleclick}>
              <ArrowDropDown />
            </span>
          </p>
        </div>
      </div>
      {open && (
        <div>
          <div className="flex justify-between">
            <p>प्रारंभ तिथि</p>
            <p>समाप्ति तिथि</p>
            <p>वक्ता</p>
            <p>स्थान</p>
          </div>
          <div className="flex justify-between">
            <p>2023-05-17</p>
            <p>2023-05-23</p>
            <p>स्वामी अभयानन्द सरस्वती जी महाराज</p>
            <p>गाजियाबाद</p>
          </div>
          <div className="flex justify-between">
            <p>2023-07-03</p>
            <p>2023-07-03</p>
            <p>
              अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभयानंद सरस्वती जी
            </p>
            <p>लखनऊ</p>
          </div>
          <div className="flex justify-between">
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
