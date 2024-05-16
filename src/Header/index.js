import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="max-lg:hidden bg-orange-400 text-white font-bold flex justify-between px-[10rem] h-10 items-center text-xl ">
        <p>Email: swamiabhyanand@gmail.com</p>
        <p>Call Now! 8881810100</p>
      </div>
      <div className=" lg:hidden flex bg-orange-500 text-white h-16 justify-between font-bold px-5">
        <p className="pt-1">Email: swamiabhyanand@gmail.com</p>
        <p className="pt-8">Call Now! 8881810100</p>
      </div>
      <div className="lg:hidden flex justify-between items-center px-5">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png" alt="" />
        <p onClick={() => setOpen(true)}>
          <Menu />
        </p>
        <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
          <button>Home</button>
          <button>About</button>
          <button>Blog</button>
          <button>Gallery</button>
          <button>Donate</button>
          <button>Event</button>
          <button>E-Books</button>
          <button>Contact Us</button>
        </Drawer>
      </div>
      <div className="flex justify-between px-[11rem] max-lg:hidden">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt=""
          className="pt-4"
        />
        <div className="flex gap-10 text-xl pt-10 ">
          <Link to="/">
            <button className="hover:text-orange-500">Home</button>
          </Link>
          <Link to="/about">
            <button className="hover:text-orange-500">About</button>
          </Link>
          <Link to="/blog">
            <button className="hover:text-orange-500">Blog</button>
          </Link>
          <Link to="/gallery">
            <button className="hover:text-orange-500">Gallery</button>
          </Link>
          <Link to="/donate">
            <button className="hover:text-orange-500">Donate</button>
          </Link>
          <Link to="/event">
            <button className="hover:text-orange-500">Event</button>
          </Link>
          <Link to="/ebook">
            <button className="hover:text-orange-500">E-Books</button>
          </Link>
          <Link to="/contactus">
            <button className="hover:text-orange-500">Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
