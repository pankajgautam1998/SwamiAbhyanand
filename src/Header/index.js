import { Menu } from "@mui/icons-material";
import { Collapse, List, ListItem } from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="max-lg:hidden bg-orange-500 text-white font-bold flex justify-between px-[10rem] h-10 items-center text-xl shadow-xl shadow-orange-600">
        <p>Email: swamiabhyanand@gmail.com</p>
        <p>Call Now! 8881810100</p>
      </div>
      <div className=" lg:hidden flex bg-orange-500 text-white h-16 justify-between font-bold px-5 shadow-xl shadow-orange-600 ">
        <p className="pt-1">Email: swamiabhyanand@gmail.com</p>
        <p className="pt-8">Call Now! 8881810100</p>
      </div>
      <div className="lg:hidden flex justify-between items-center px-10 pt-3">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png" alt="" />
        <button
          onClick={handleclick}
          className="border border-orange-400 !size-16 rounded p-2"
        >
          <Menu />
        </button>
      </div>
      <div className="lg:hidden px-5">
        <Collapse in={open}>
          <List className="flex flex-col justify-start fixed">
            <Link to="/">
              <ListItem className="text-xl">Home</ListItem>
            </Link>
            <Link to="/about">
              <ListItem className="text-xl text-gray-400">About</ListItem>
            </Link>
            <Link to="/blog">
              <ListItem className="text-xl text-gray-400">Blog</ListItem>
            </Link>
            <Link to="/gallery">
              <ListItem className="text-xl text-gray-400">Gallery</ListItem>
            </Link>
            <Link to="/donate">
              <ListItem className="text-xl text-gray-400">Donate</ListItem>
            </Link>
            <Link to="/event">
              <ListItem className="text-xl text-gray-400">Event</ListItem>
            </Link>
            <Link to="/ebook">
              <ListItem className="text-xl text-gray-400">E-Books</ListItem>
            </Link>
            <Link to="/contactus">
              <ListItem className="text-xl text-gray-400">Contact Us</ListItem>
            </Link>
          </List>
        </Collapse>
      </div>
      <div className="flex justify-between px-[11rem] max-lg:hidden ">
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
