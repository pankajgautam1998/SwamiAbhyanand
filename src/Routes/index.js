import About from "../About";
import Blog from "../Blog";
import ContactUs from "../ContactUs";
import Donate from "../Donate";
import Ebook from "../Ebook";
import Event from "../Event";
import Gallery from "../Gallery";
import HomePage from "../HomePage";
import SlidePage from "../SlidePage";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  {
    id: 2,
    path: "/slidepage",
    element: <SlidePage />,
  },
  {
    id: 3,
    path: "/about",
    element: <About />,
  },
  {
    id: 4,
    path: "/blog",
    element: <Blog />,
  },
  {
    id: 5,
    path: "/gallery",
    element: <Gallery />,
  },
  {
    id: 6,
    path: "/donate",
    element: <Donate />,
  },
  {
    id: 7,
    path: "/event",
    element: <Event />,
  },
  {
    id: 8,
    path: "/ebook",
    element: <Ebook />,
  },
  {
    id: 9,
    path: "/contactus",
    element: <ContactUs />,
  },
];
