import { LocationOn, MailLock, Phone, PhoneAndroid } from "@mui/icons-material";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png" alt="" />
        <p className="text-4xl font-bold">CONTACT US</p>
      </div>

      <div className="max-lg:hidden flex justify-between w-full gap-5 px-5 pt-10">
        <div className="w-[50%] h-[50%]">
          <form className="flex flex-col bg-slate-100 rounded gap-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name*"
              className="p-2  text-xl border-b-2 border-black rounded"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address*"
              className="p-2 text-xl border-b-2 border-black rounded"
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="Phone Number*"
              className="p-2  text-xl border-b-2 border-black rounded"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Message*"
              className="  text-xl border-b-2 border-black rounded h-[5rem] pb-10 
          "
            />
            <button className=" hover:bg-orange-500 hover:text-white font-bold h-10">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="w-[50rem] ">
          <iframe
            className="h-[100%] rounded border  shadow shadow-gray-700"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            title="test"
            frameborder="0"
          ></iframe>
        </div>
      </div>
      <div className="lg:hidden flex justify-center  gap-5 px-5 pt-10">
        <form className="flex flex-col w-full bg-slate-100 rounded gap-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="First Name*"
            className="p-2  text-xl border-b-2 border-black rounded  "
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address*"
            className="p-2 text-xl border-b-2 border-black rounded "
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Phone Number*"
            className="p-2  text-xl border-b-2 border-black rounded "
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Message*"
            className="  text-xl border-b-2 border-black rounded h-[5rem] pb-10 
          "
          />
          <button className=" hover:bg-orange-500 hover:text-white font-bold h-10 ">
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="lg:hidden w-full pt-5 px-5">
        <iframe
          className="h-[100%] rounded border  shadow shadow-gray-700"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
          width="100%"
          height="200"
          title="test"
          frameborder="0"
        ></iframe>
      </div>
      {/* <div className="w-full mt-12">
        <iframe
          title="test"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
          width="100%"
          height="200"
          frameborder="0"
        ></iframe>
      </div> */}
      <div className="max-lg:hidden grid grid-cols-4 pt-10 pb-10">
        <div className=" px-5 border border-orange-500 shadow-2xl shadow-orange-400 ">
          <p className="font-bold text-xl px-16">LUCKNOW ASHRAM</p>
          <iframe
            className=" pt-5"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameborder="0"
          ></iframe>
          <p className="font-bold ">
            <LocationOn className="text-orange-500" /> W33P+FQP Aarsh Vidya
            Gurukulam, Anora Kala, Uttar Pradesh 226028
          </p>
          <p className="font-bold">
            <Phone className="text-orange-500" />
            +91-9956578080
          </p>
          <p className="font-bold">
            <PhoneAndroid className="text-orange-500" />
            +91-9415344798
          </p>
          <p className="flex gap-2">
            <p>Contact Person :</p>
            <p className="font-bold">Swami Ramanand Saraswati Ji</p>
          </p>
          <p className="font-bold">
            <MailLock className="text-orange-500" />
            info@swamiabhayanand.com
          </p>
          <div className="flex gap-10 items-center">
            <button className="bg-red-600 text-white rounded w-24 h-10 font-bold">
              CLICK HERE
            </button>
            <img
              src="https://swamiabhyanand.com/images/pic9.png"
              alt=""
              className="h-[140px]"
            />
          </div>
        </div>
        <div className=" px-5 border border-orange-500 shadow-2xl shadow-orange-400 ">
          <p className="font-bold text-xl px-16">MEERUT ASHRAM</p>
          <iframe
            className=" pt-5"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameborder="0"
          ></iframe>
          <p className="font-bold ">
            <LocationOn className="text-orange-500" /> W33P+FQP Aarsh Vidya
            Gurukulam, Anora Kala, Uttar Pradesh 226028
          </p>
          <p className="font-bold">
            <Phone className="text-orange-500" />
            +91-9956578080
          </p>
          <p className="font-bold">
            <PhoneAndroid className="text-orange-500" />
            +91-9415344798
          </p>
          <p className="flex gap-2">
            <p>Contact Person :</p>
            <p className="font-bold">Swami Ramanand Saraswati Ji</p>
          </p>
          <p className="font-bold">
            <MailLock className="text-orange-500" />
            info@swamiabhayanand.com
          </p>
          <div className="flex gap-10 items-center">
            <button className="bg-red-600 text-white rounded w-24 h-10 font-bold">
              CLICK HERE
            </button>
            <img
              src="https://swamiabhyanand.com/images/pic9.png"
              alt=""
              className="h-[140px]"
            />
          </div>
        </div>
        <div className=" px-5 border border-orange-500 shadow-2xl shadow-orange-400 ">
          <p className="font-bold text-xl px-16">SITAPUR ASHRAM</p>
          <iframe
            className=" pt-5"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameborder="0"
          ></iframe>
          <p className="font-bold ">
            <LocationOn className="text-orange-500" /> W33P+FQP Aarsh Vidya
            Gurukulam, Anora Kala, Uttar Pradesh 226028
          </p>
          <p className="font-bold">
            <Phone className="text-orange-500" />
            +91-9956578080
          </p>
          <p className="font-bold">
            <PhoneAndroid className="text-orange-500" />
            +91-9415344798
          </p>
          <p className="flex gap-2">
            <p>Contact Person :</p>
            <p className="font-bold">Swami Ramanand Saraswati Ji</p>
          </p>
          <p className="font-bold">
            <MailLock className="text-orange-500" />
            info@swamiabhayanand.com
          </p>
          <div className="flex gap-10 items-center">
            <button className="bg-red-600 text-white rounded w-24 h-10 font-bold">
              CLICK HERE
            </button>
            <img
              src="https://swamiabhyanand.com/images/pic9.png"
              alt=""
              className="h-[140px]"
            />
          </div>
        </div>
        <div className=" px-5 border border-orange-500 shadow-2xl shadow-orange-400 ">
          <p className="font-bold text-xl px-16">HARIDWAR ASHRAM</p>
          <iframe
            className=" pt-5"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameborder="0"
          ></iframe>
          <p className="font-bold ">
            <LocationOn className="text-orange-500" /> W33P+FQP Aarsh Vidya
            Gurukulam, Anora Kala, Uttar Pradesh 226028
          </p>
          <p className="font-bold">
            <Phone className="text-orange-500" />
            +91-9956578080
          </p>
          <p className="font-bold">
            <PhoneAndroid className="text-orange-500" />
            +91-9415344798
          </p>
          <p className="flex gap-2">
            <p>Contact Person :</p>
            <p className="font-bold">Swami Ramanand Saraswati Ji</p>
          </p>
          <p className="font-bold">
            <MailLock className="text-orange-500" />
            info@swamiabhayanand.com
          </p>
          <div className="flex gap-10 items-center">
            <button className="bg-red-600 text-white rounded w-24 h-10 font-bold">
              CLICK HERE
            </button>
            <img
              src="https://swamiabhyanand.com/images/pic9.png"
              alt=""
              className="h-[140px]"
            />
          </div>
        </div>
      </div>
      <div className=" lg:hidden grid grid-cols-1 pt-10 pb-10 px-5">
        <div className=" px-5 border border-orange-500 shadow-2xl shadow-orange-400 ">
          <p className="font-bold text-xl px-16 flex flex-col items-center">
            LUCKNOW ASHRAM
          </p>
          <iframe
            className=" pt-5 flex flex-col items-center"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameborder="0"
          ></iframe>
          <p className="font-bold flex flex-col items-center ">
            <LocationOn className="text-orange-500" /> W33P+FQP Aarsh Vidya
            Gurukulam, Anora Kala, Uttar Pradesh 226028
          </p>
          <p className="font-bold flex flex-col items-center">
            <Phone className="text-orange-500" />
            +91-9956578080
          </p>
          <p className="font-bold flex flex-col items-center">
            <PhoneAndroid className="text-orange-500" />
            +91-9415344798
          </p>
          <p className="flex gap-2  flex-col items-center">
            <p>Contact Person :</p>
            <p className="font-bold">Swami Ramanand Saraswati Ji</p>
          </p>
          <p className="font-bold flex flex-col items-center">
            <MailLock className="text-orange-500" />
            info@swamiabhayanand.com
          </p>
          <div className="flex gap-10  flex-col items-center pt-5">
            <button className="bg-red-600 text-white rounded w-24 h-10 font-bold ">
              CLICK HERE
            </button>
            <img
              src="https://swamiabhyanand.com/images/pic9.png"
              alt=""
              className="h-[20%]"
            />
          </div>
        </div>
        <div className=" px-5 border border-orange-500 shadow-2xl shadow-orange-400 ">
          <p className="font-bold text-xl px-16 flex flex-col items-center">
            MEERUT ASHRAM
          </p>
          <iframe
            className=" pt-5  flex flex-col items-center"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameborder="0"
          ></iframe>
          <p className="font-bold  flex flex-col items-center ">
            <LocationOn className="text-orange-500" /> W33P+FQP Aarsh Vidya
            Gurukulam, Anora Kala, Uttar Pradesh 226028
          </p>
          <p className="font-bold  flex flex-col items-center">
            <Phone className="text-orange-500" />
            +91-9956578080
          </p>
          <p className="font-bold  flex flex-col items-center">
            <PhoneAndroid className="text-orange-500" />
            +91-9415344798
          </p>
          <p className="flex gap-2   flex-col items-center">
            <p>Contact Person :</p>
            <p className="font-bold">Swami Ramanand Saraswati Ji</p>
          </p>
          <p className="font-bold  flex flex-col items-center">
            <MailLock className="text-orange-500" />
            info@swamiabhayanand.com
          </p>
          <div className="flex gap-10  flex-col items-center pt-5">
            <button className="bg-red-600 text-white rounded w-24 h-10 font-bold">
              CLICK HERE
            </button>
            <img
              src="https://swamiabhyanand.com/images/pic9.png"
              alt=""
              className="h-[20%]"
            />
          </div>
        </div>
        <div className=" px-5 border border-orange-500 shadow-2xl shadow-orange-400 ">
          <p className="font-bold text-xl px-16 flex flex-col items-center">
            SITAPUR ASHRAM
          </p>
          <iframe
            className=" pt-5 flex flex-col items-center"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameborder="0"
          ></iframe>
          <p className="font-bold flex flex-col items-center ">
            <LocationOn className="text-orange-500" /> W33P+FQP Aarsh Vidya
            Gurukulam, Anora Kala, Uttar Pradesh 226028
          </p>
          <p className="font-bold flex flex-col items-center">
            <Phone className="text-orange-500" />
            +91-9956578080
          </p>
          <p className="font-bold flex flex-col items-center">
            <PhoneAndroid className="text-orange-500" />
            +91-9415344798
          </p>
          <p className="flex gap-2  flex-col items-center">
            <p>Contact Person :</p>
            <p className="font-bold">Swami Ramanand Saraswati Ji</p>
          </p>
          <p className="font-bold flex flex-col items-center">
            <MailLock className="text-orange-500" />
            info@swamiabhayanand.com
          </p>
          <div className="flex gap-10 flex-col items-center pt-5">
            <button className="bg-red-600 text-white rounded w-24 h-10 font-bold">
              CLICK HERE
            </button>
            <img
              src="https://swamiabhyanand.com/images/pic9.png"
              alt=""
              className="h-[20%]"
            />
          </div>
        </div>
        <div className=" px-5 border border-orange-500 shadow-2xl shadow-orange-400 ">
          <p className="font-bold text-xl px-16 flex flex-col items-center">
            HARIDWAR ASHRAM
          </p>
          <iframe
            className=" pt-5 flex flex-col items-center"
            title="test"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="200"
            frameborder="0"
          ></iframe>
          <p className="font-bold flex flex-col items-center">
            <LocationOn className="text-orange-500" /> W33P+FQP Aarsh Vidya
            Gurukulam, Anora Kala, Uttar Pradesh 226028
          </p>
          <p className="font-bold flex flex-col items-center">
            <Phone className="text-orange-500" />
            +91-9956578080
          </p>
          <p className="font-bold flex flex-col items-center">
            <PhoneAndroid className="text-orange-500" />
            +91-9415344798
          </p>
          <p className="flex gap-2  flex-col items-center">
            <p>Contact Person :</p>
            <p className="font-bold">Swami Ramanand Saraswati Ji</p>
          </p>
          <p className="font-bold flex flex-col items-center">
            <MailLock className="text-orange-500" />
            info@swamiabhayanand.com
          </p>
          <div className="flex gap-10 flex-col items-center pt-5">
            <button className="bg-red-600 text-white rounded w-24 h-10 font-bold">
              CLICK HERE
            </button>
            <img
              src="https://swamiabhyanand.com/images/pic9.png"
              alt=""
              className="h-[20%]"
            />
          </div>
        </div>
      </div>
      <hr className="pt-5" />
    </>
  );
};

export default ContactUs;
