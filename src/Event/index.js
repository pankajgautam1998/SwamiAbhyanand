import {
  CalendarMonth,
  Facebook,
  HeadsetMic,
  Info,
  Instagram,
  LinkedIn,
  LocationOnSharp,
  MicSharp,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";

const Event = () => {
  return (
    <>
      <div className="max-lg:hidden px-[10rem] pb-5 border border-gray-700 m-[10%] p-2 shadow-sm:5px 10px 8px 10px ">
        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="SEARCH"
            className="border border-blue-400 p-2 rounded bg-slate-100 text-black border-none w-[40%]"
          />
          <button className="bg-slate-100 text-red-500 border border-red-500 p-2 rounded font-bold w-[10rem]">
            FIND EVENTS
          </button>
          <button className="text-xl hover:text-red-500">List</button>
          <button className="text-xl hover:text-red-500">Month</button>
          <button className="text-xl hover:text-red-500">Day</button>
        </div>
        <p className="flex justify-center font-bold text-2xl pt-10">
          Latest Upcoming Events
        </p>
        <div className="flex gap-10">
          <button className="border border-black p-2 w-20 bg-slate-100">
            Today
          </button>
          <button className="bg-slate-100 w-40 p-2 rounded">NOW ONWARDS</button>
        </div>
        <p className="flex justify-center font-bold text-2xl pt-10">
          Latest Past Events
        </p>
        <div className="grid grid-cols-2 justify-between  border border-gray-600 p-4 shadow-2xl">
          <div>
            <p className="text-2xl">सदगुरुदेव प्राकट्य दिवस</p>
            <p className="text-xl pt-5">
              <CalendarMonth className="text-orange-500 " />
              2023-07-15
            </p>
            <p className="text-xl pt-5">
              <LocationOnSharp className="text-orange-500" />
              <a href="https://www.google.co.in/ ">लखनऊ</a>
            </p>
            <p className="text-xl pt-5">
              <MicSharp className="text-orange-500" />
              <a href="https://www.google.co.in/">स्वामी अभयानंद सरस्वती जी</a>
            </p>
            <p className="text-xl pt-5">
              <HeadsetMic className="text-orange-500" />
              <a href="https://www.google.co.in/">शौनक कुटीर आश्रम</a>
            </p>
            <p className="text-xl pt-5">
              <Info className="text-orange-500" />
              Know More
            </p>
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/WhatsApp%20Image%202023-07-14%20at%2012.29.37%20PM.jpeg"
              alt=""
              className="w-[50rem]"
            />
          </div>
          <div>
            <p className="text-2xl">Share This Event with Others</p>
            <p className="flex gap-5 text-orange-500">
              <WhatsApp />
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 justify-between  border border-gray-600 p-4 mt-3 shadow-2xl">
          <div>
            <p className="text-2xl">गुरु पूर्णिमा 2023</p>
            <p className="text-xl pt-5">
              <CalendarMonth className="text-orange-500 " />
              2023-07-15
            </p>
            <p className="text-xl pt-5">
              <LocationOnSharp className="text-orange-500" />
              <a href="https://www.google.co.in/ ">लखनऊ</a>
            </p>
            <p className="text-xl pt-5">
              <MicSharp className="text-orange-500" />
              <a href="https://www.google.co.in/">
                अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभयानंद सरस्वती
                जी
              </a>
            </p>
            <p className="text-xl pt-5">
              <HeadsetMic className="text-orange-500" />
              <a href="https://www.google.co.in/">
                श्री शौनक आर्ष विद्या प्रन्यास
              </a>
            </p>
            <p className="text-xl pt-5">
              <Info className="text-orange-500" />
              Know More
            </p>
            <p className="text-2xl pt-5">Share This Event with Others</p>
            <p className="flex gap-5 text-orange-500 pt-5">
              <WhatsApp />
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </p>
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/Screenshot%202023-07-02%20at%204.06.17%20PM.png"
              alt=""
              className="w-[50rem]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 justify-between   border border-gray-600 p-4 mt-3 shadow-2xl ">
          <div>
            <p className="text-2xl">गीता ज्ञान यज्ञ समारोह</p>
            <p className="text-xl pt-5">
              <CalendarMonth className="text-orange-500 " />
              2023-05-17
            </p>
            <p className="text-xl pt-5">
              <LocationOnSharp className="text-orange-500" />
              <a href="https://www.google.co.in/ "> गाजियाबाद</a>
            </p>
            <p className="text-xl pt-5">
              <MicSharp className="text-orange-500" />
              <a href="https://www.google.co.in/">
                स्वामी अभयानन्द सरस्वती जी महाराज
              </a>
            </p>
            <p className="text-xl pt-5">
              <HeadsetMic className="text-orange-500" />
              <a href="https://www.google.co.in/">
                मीरा संकीर्तन मण्डली वसुंधरा गाजियाबाद
              </a>
            </p>
            <p className="text-xl pt-5">
              <Info className="text-orange-500" />
              Know More
            </p>
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/1CC20545-79EE-4343-9B31-3B2FF6FBD15D.png"
              alt=""
              className="w-[50rem]"
            />
          </div>
          <div>
            <p className="text-2xl">Share This Event with Others</p>
            <p className="flex gap-5 text-orange-500">
              <WhatsApp />
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden px-5">
        <div>
          <input
            type="text"
            placeholder="SEARCH"
            className="border border-blue-400 p-2 rounded bg-slate-100 text-black border-none w-full "
          />
        </div>
        <div className="">
          <button className="bg-slate-100 text-red-500 border border-red-500 p-2 rounded font-bold w-full">
            FIND EVENTS
          </button>
        </div>
        <p className="text-xl hover:text-red-500">List</p>
        <p className="text-xl hover:text-red-500">Month</p>
        <p className="text-xl hover:text-red-500">Day</p>
        <div>
          <p className="flex justify-center font-bold text-2xl pt-10">
            Latest Upcoming Events
          </p>
        </div>
        <div className="flex gap-10 justify-center">
          <button className="border border-black p-2 w-20 bg-slate-100">
            Today
          </button>
          <button className="bg-slate-100 w-40 p-2 rounded">NOW ONWARDS</button>
        </div>
        <p className="flex justify-center font-bold text-2xl pt-10">
          Latest Past Events
        </p>
        <div className="border border-gray-600 px-5 shadow-2xl shadow-gray-700 ">
          <div>
            <p className="text-2xl">सदगुरुदेव प्राकट्य दिवस</p>
            <p className="text-xl pt-5">
              <CalendarMonth className="text-orange-500 " />
              2023-07-15
            </p>
            <p className="text-xl pt-5">
              <LocationOnSharp className="text-orange-500" />
              <a href="https://www.google.co.in/ ">लखनऊ</a>
            </p>
            <p className="text-xl pt-5">
              <MicSharp className="text-orange-500" />
              <a href="https://www.google.co.in/">स्वामी अभयानंद सरस्वती जी</a>
            </p>
            <p className="text-xl pt-5">
              <HeadsetMic className="text-orange-500" />
              <a href="https://www.google.co.in/">शौनक कुटीर आश्रम</a>
            </p>
            <p className="text-xl pt-5">
              <Info className="text-orange-500" />
              Know More
            </p>
          </div>
          <div>
            <p className="text-2xl">Share This Event with Others</p>
            <p className="flex gap-5 text-orange-500">
              <WhatsApp />
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </p>
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/WhatsApp%20Image%202023-07-14%20at%2012.29.37%20PM.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="border border-gray-600 px-5 shadow-2xl shadow-gray-700 pt-5">
          <div>
            <p className="text-2xl">गुरु पूर्णिमा 2023</p>
            <p className="text-xl pt-5">
              <CalendarMonth className="text-orange-500 " />
              2023-07-15
            </p>
            <p className="text-xl pt-5">
              <LocationOnSharp className="text-orange-500" />
              <a href="https://www.google.co.in/ ">लखनऊ</a>
            </p>
            <p className="text-xl pt-5">
              <MicSharp className="text-orange-500" />
              <a href="https://www.google.co.in/">
                अनंत श्री विभूषित महामंडलेश्वर सदगुरुदेव स्वामी अभयानंद सरस्वती
                जी
              </a>
            </p>
            <p className="text-xl pt-5">
              <HeadsetMic className="text-orange-500" />
              <a href="https://www.google.co.in/">
                श्री शौनक आर्ष विद्या प्रन्यास
              </a>
            </p>
            <p className="text-xl pt-5">
              <Info className="text-orange-500" />
              Know More
            </p>
            <p className="text-2xl pt-5">Share This Event with Others</p>
            <p className="flex gap-5 text-orange-500 pt-5">
              <WhatsApp />
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </p>
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/Screenshot%202023-07-02%20at%204.06.17%20PM.png"
              alt=""
              className="w-[50rem]"
            />
          </div>
        </div>
        <div className="border border-gray-600 px-5 shadow-2xl shadow-gray-700 pt-5">
          <div>
            <p className="text-2xl">गीता ज्ञान यज्ञ समारोह</p>
            <p className="text-xl pt-5">
              <CalendarMonth className="text-orange-500 " />
              2023-05-17
            </p>
            <p className="text-xl pt-5">
              <LocationOnSharp className="text-orange-500" />
              <a href="https://www.google.co.in/ "> गाजियाबाद</a>
            </p>
            <p className="text-xl pt-5">
              <MicSharp className="text-orange-500" />
              <a href="https://www.google.co.in/">
                {" "}
                स्वामी अभयानन्द सरस्वती जी महाराज
              </a>
            </p>
            <p className="text-xl pt-5">
              <HeadsetMic className="text-orange-500" />
              <a href="https://www.google.co.in/">
                {" "}
                मीरा संकीर्तन मण्डली वसुंधरा गाजियाबाद
              </a>
            </p>
            <p className="text-xl pt-5">
              <Info className="text-orange-500" />
              Know More
            </p>
          </div>
          <div>
            <p className="text-2xl">Share This Event with Others</p>
            <p className="flex gap-5 text-orange-500">
              <WhatsApp />
              <Facebook />
              <Instagram />
              <Twitter />
              <LinkedIn />
            </p>
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/1CC20545-79EE-4343-9B31-3B2FF6FBD15D.png"
              alt=""
              className="w-[50rem]"
            />
          </div>
        </div>
      </div>
      <hr className="pt-5" />
    </>
  );
};

export default Event;
