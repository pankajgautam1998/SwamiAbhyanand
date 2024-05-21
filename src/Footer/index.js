import {
  AcUnit,
  Email,
  Facebook,
  Google,
  LinkedIn,
  Phone,
  Twitter,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  return (
    <>
      <div className="flex justify-between px-5 gap-8 max-lg:hidden">
        <div className="bg-orange-400 w-[33%] h-[12rem]  text-white">
          <Link to="/about">
            <div className="flex flex-col justify-center items-center text-2xl">
              <img
                src="https://swamiabhyanand.com/images/about-icon1.png"
                alt=""
                className="pt-6"
              />
              <button className="font-bold pt-5">ABOUT</button>
              <p className="pt-8">About Swami Abhyanand Ji</p>
            </div>
          </Link>
        </div>
        <div className="bg-orange-700 text-white w-[33%] h-[12rem] ">
          <Link to="/event">
            <div className="flex flex-col justify-center items-center text-2xl">
              <img
                src="https://swamiabhyanand.com/images/media-icon2.png"
                alt=""
                className="pt-6"
              />
              <button className="font-bold pt-5">EVENTS</button>
              <p className="pt-8">Swami Abhyanand Ji Events</p>
            </div>
          </Link>
        </div>
        <div className="bg-orange-400 text-white w-[33%] h-[12rem]">
          <Link to="/blog">
            <div className="flex flex-col justify-center items-center text-2xl">
              <img
                src="https://swamiabhyanand.com/images/blog-icon3.png"
                alt=""
                className="pt-6"
              />
              <button className="font-bold pt-5">BLOG</button>
              <p className="pt-8">Swami Abhyanand Ji Blog</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:hidden px-5 pt-5">
        <div className="bg-orange-400  text-white">
          <div className="flex flex-col justify-center items-center h-48 text-2xl">
            <img
              src="https://swamiabhyanand.com/images/about-icon1.png"
              alt=""
            />
            <button className="font-bold pt-5">ABOUT</button>
            <p className="pt-5">About Swami Abhyanand Ji</p>
          </div>
        </div>
        <div className="pt-5">
          <div className="bg-orange-700  text-white">
            <div className="flex flex-col justify-center items-center h-48 text-2xl">
              <img
                src="https://swamiabhyanand.com/images/media-icon2.png"
                alt=""
              />
              <button className="font-bold pt-5">EVENTS</button>
              <p className="pt-5">Swami Abhyanand Ji Events</p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="bg-orange-400  text-white">
            <div className="flex flex-col justify-center items-center h-48 text-2xl">
              <img
                src="https://swamiabhyanand.com/images/blog-icon3.png"
                alt=""
              />
              <button className="font-bold pt-5">BLOG</button>
              <p className="pt-5">Swami Abhyanand Ji Blog</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-10 px-5 max-lg:hidden">
        <div>
          <div className="flex flex-col justify-center items-center border border-orange-500 shadow-2xl shadow-orange-500 p-2">
            <img
              src="https://swamiabhyanand.com/images/cropped-logo.png"
              alt=""
            />
            <p>आचार्य महामंडलेश्वर स्वामी श्री अभयानंद सरस्वती जी</p>
            <p>
              ॥श्री गुरूवे नमः॥ (परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द
              सरस्वती जी महराज) कुलं पवित्रं{" "}
            </p>
            <p>
              जननी कृतार्था वसुन्धरा पुण्यवती च तेन। अपारसंवित्सुखसागरेऽस्मिन्
              लीनं परे ब्रह्मणि यस्य चेतः॥
            </p>
            <p>(स्कंन्दपुराणम्)</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center border h-[100%] border-orange-500 shadow-2xl shadow-orange-500 p-2">
            <p>LUCKNOW ASHRAM</p>
            <p>
              <Phone />
              +91-9956578080
            </p>
            <p>
              <Email />
              info@swamiabhayanand.com
            </p>
            <div className="flex justify-between">
              <button className="bg-red-600 text-white rounded w-24 h-12">
                Click Here
              </button>
              <img
                src="https://swamiabhyanand.com/images/pic9.png"
                alt=""
                className="h-20"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center border h-[100%] border-orange-500 shadow-2xl shadow-orange-500 p-2">
            <p>MEERUT ASHRAM</p>
            <p>
              <Phone />
              +91-9956578080
            </p>
            <p>
              <Email />
              info@swamiabhayanand.com
            </p>
            <div className="flex justify-between">
              <button className="bg-red-600 text-white rounded w-24 h-12">
                Click Hree
              </button>
              <img
                src="https://swamiabhyanand.com/images/pic9.png"
                alt=""
                className="h-20"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center border h-[100%] border-orange-500 shadow-2xl shadow-orange-500 p-2">
            <p>SITAPUR ASHRAM</p>
            <p>
              <Phone />
              +91-9956578080
            </p>
            <p>
              <Email />
              info@swamiabhayanand.com
            </p>
            <div className="flex justify-between">
              <button className="bg-red-600 text-white rounded w-24 h-12">
                Click Here
              </button>
              <img
                src="https://swamiabhyanand.com/images/pic9.png"
                alt=""
                className="h-20"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center border border-orange-500 shadow-2xl shadow-orange-500 h-[100%] p-2">
            <p>HARIDWAR ASHRAM</p>
            <p>
              <Phone />
              +91-9956578080
            </p>
            <p>
              <Email />
              info@swamiabhayanand.com
            </p>
            <div className="flex justify-between">
              <button className="bg-red-600 text-white rounded w-24 h-12 text-center">
                Click Here
              </button>
              <img
                src="https://swamiabhyanand.com/images/pic9.png"
                alt=""
                className="h-20"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden px-5 pt-5">
        <div className="flex flex-col justify-center items-center border p-4">
          <img
            src="https://swamiabhyanand.com/images/cropped-logo.png"
            alt=""
          />
          <p>आचार्य महामंडलेश्वर स्वामी श्री अभयानंद सरस्वती जी</p>
          <p>
            ॥श्री गुरूवे नमः॥ (परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द
            सरस्वती जी महराज) कुलं पवित्रं{" "}
          </p>
          <p>
            जननी कृतार्था वसुन्धरा पुण्यवती च तेन। अपारसंवित्सुखसागरेऽस्मिन्
            लीनं परे ब्रह्मणि यस्य चेतः॥
          </p>
          <p>(स्कंन्दपुराणम्)</p>
        </div>
      </div>
      <div className="lg:hidden px-5">
        <div className="flex flex-col justify-center items-center border p-2">
          <p>LUCKNOW ASHRAM</p>
          <p>
            <Phone />
          </p>
          <p>+91-9956578080</p>
          <p>
            <Email />
          </p>
          <p>info@swamiabhayanand.com</p>

          <button className="bg-red-600 text-white rounded w-24 h-8">
            Click Here
          </button>
          <img
            src="https://swamiabhyanand.com/images/pic9.png"
            alt=""
            className="h-[20rem]"
          />
        </div>
      </div>
      <div className="lg:hidden px-5">
        <div className="flex flex-col justify-center items-center border p-2">
          <p>MEERUT ASHRAM</p>
          <p>
            <Phone />
          </p>
          <p>+91-9956578080</p>
          <p>
            <Email />
          </p>
          <p>info@swamiabhayanand.com</p>

          <button className="bg-red-600 text-white rounded w-24 h-8">
            Click Here
          </button>
          <img
            src="https://swamiabhyanand.com/images/pic9.png"
            alt=""
            className="h-[20rem]"
          />
        </div>
      </div>
      <div className="lg:hidden px-5">
        <div className="flex flex-col justify-center items-center border p-2">
          <p>SITAPUR ASHRAM</p>
          <p>
            <Phone />
          </p>
          <p>+91-9956578080</p>
          <p>
            <Email />
          </p>
          <p>info@swamiabhayanand.com</p>

          <button className="bg-red-600 text-white rounded w-24 h-8">
            Click Here
          </button>
          <img
            src="https://swamiabhyanand.com/images/pic9.png"
            alt=""
            className="h-[20rem]"
          />
        </div>
      </div>
      <div className="lg:hidden px-5">
        <div className="flex flex-col justify-center items-center border p-2">
          <p>HARIDWAR ASHRAM</p>
          <p>
            <Phone />
          </p>
          <p>+91-9956578080</p>
          <p>
            <Email />
          </p>
          <p>info@swamiabhayanand.com</p>

          <button className="bg-red-600 text-white rounded w-24 h-8">
            Click Here
          </button>
          <img
            src="https://swamiabhyanand.com/images/pic9.png"
            alt=""
            className="h-[20rem]"
          />
        </div>
      </div>
      <div className="max-lg:hidden px-5">
        <div className=" bg-orange-400 shadow-orange-400  shadow-2xl">
          <div className="flex justify-between items-center px-[14rem] h-32">
            <div className="text-white font-bold text-2xl ">
              <p>
                ©2022 परम् पूज्य परमादर्श आचार्य महामंडलेश्वर स्वामी श्री
                अभयानंद
              </p>
              <p>सरस्वती जी | ALL RIGHTS RESERVED</p>
            </div>
            <div className="text-white font-bold text-2xl flex  gap-5">
              <button>
                <Facebook />
              </button>
              <button>
                <Twitter />
              </button>
              <button>
                <LinkedIn />
              </button>
              <button>
                <AcUnit />
              </button>
              <button>
                <Google />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-orange-600 shadow-orange-400 m-5 shadow-2xl h-56">
        <div className=" flex flex-col items-center justify-center pt-10">
          <div className="text-white font-bold text-2xl ">
            <p>©2022 परम् पूज्य परमादर्श आचार्य</p>
            <p>महामंडलेश्वर स्वामी श्री अभयानंद सरस्वती जी</p>
            <p>| ALL RIGHTS RESERVED</p>
          </div>
          <div className="text-white font-bold text-2xl   gap-5">
            <button>
              <Facebook />
            </button>
            <button>
              <Twitter />
            </button>
            <button>
              <LinkedIn />
            </button>
            <button>
              <AcUnit />
            </button>
            <button>
              <Google />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
