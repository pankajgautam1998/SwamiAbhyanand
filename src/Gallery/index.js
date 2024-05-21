import { Menu } from "@mui/icons-material";

import React from "react";

const Gallery = () => {
  const data = [
    {
      id: 1,
      image: "https://swamiabhyanand.com/uploads/sanskrit2.jpg",
    },
    {
      id: 2,
      image: "https://swamiabhyanand.com/uploads/sanskrit1.jpg",
    },
    {
      id: 3,
      image: "https://swamiabhyanand.com/uploads/_DSC2141.JPG",
    },
    {
      id: 4,
      image: "https://swamiabhyanand.com/uploads/_DSC2502.JPG",
    },
    {
      id: 5,
      image: "https://swamiabhyanand.com/uploads/_DSC3396.JPG",
    },
    {
      id: 6,
      image: "https://swamiabhyanand.com/uploads/DSC06339.JPG",
    },
    {
      id: 7,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 8,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 9,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 10,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 11,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 12,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 13,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 14,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 15,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 16,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 17,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 18,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 19,
      image:
        "https://swamiabhyanand.com/uploads/https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG",
    },
    {
      id: 20,
      image: "https://swamiabhyanand.com/uploads/LUCKNOW_ASHRAM1.JPG",
    },
    {
      id: 21,
      image: "https://swamiabhyanand.com/uploads/LUCKNOW_ASHRAM2.JPG",
    },
    {
      id: 22,
      image: "https://swamiabhyanand.com/uploads/LUCKNOW_ASHRAM3.JPG",
    },
    {
      id: 23,
      image: "https://swamiabhyanand.com/uploads/LUCKNOW_ASHRAM4.JPG",
    },
    {
      id: 24,
      image: "https://swamiabhyanand.com/uploads/LUCKNOW_ASHRAM5.JPG",
    },
    {
      id: 25,
      image: "https://swamiabhyanand.com/uploads/HARIDWAR_ASHRAM1.JPG",
    },
    {
      id: 26,
      image: "https://swamiabhyanand.com/uploads/HARIDWAR_ASHRAM1.JPG",
    },
    {
      id: 27,
      image: "https://swamiabhyanand.com/uploads/HARIDWAR_ASHRAM3.JPG",
    },
    {
      id: 28,
      image: "https://swamiabhyanand.com/uploads/HARIDWAR_ASHRAM4.JPG",
    },
    {
      id: 29,
      image: "https://swamiabhyanand.com/uploads/HARIDWAR_ASHRAM5.JPG",
    },
    {
      id: 30,
      image: "https://swamiabhyanand.com/uploads/HARIDWAR_ASHRAM6.JPG",
    },
    {
      id: 31,
      image: "https://swamiabhyanand.com/uploads/MEERUT_ASHRAM1.JPG",
    },
    {
      id: 32,
      image: "https://swamiabhyanand.com/uploads/MEERUT_ASHRAM2.JPG",
    },
    {
      id: 33,
      image: "https://swamiabhyanand.com/uploads/MEERUT_ASHRAM3.JPG",
    },
    {
      id: 34,
      image: "https://swamiabhyanand.com/uploads/MEERUT_ASHRAM4.JPG",
    },
    {
      id: 35,
      image: "https://swamiabhyanand.com/uploads/MEERUT_ASHRAM5.JPG",
    },
    {
      id: 36,
      image: "https://swamiabhyanand.com/uploads/MEERUT_ASHRAM6.JPG",
    },
    {
      id: 37,
      image: "https://swamiabhyanand.com/uploads/MEERUT_ASHRAM6.JPG",
    },
    {
      id: 38,
      image: "https://swamiabhyanand.com/uploads/DSC_9301.JPG",
    },
    {
      id: 39,
      image: "https://swamiabhyanand.com/uploads/DSC06305.JPG",
    },
    {
      id: 40,
      image: "https://swamiabhyanand.com/uploads/DSC_9867.JPG",
    },
    {
      id: 41,
      image: "https://swamiabhyanand.com/uploads/DSC06339.JPG",
    },
    {
      id: 42,
      image: "https://swamiabhyanand.com/uploads/_DSC3257.JPG",
    },
    {
      id: 43,
      image: "https://swamiabhyanand.com/uploads/_DSC2203.JPG",
    },
    {
      id: 44,
      image: "https://swamiabhyanand.com/uploads/_DSC2203.JPG",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png" alt="" />
        <p className="text-4xl font-bold">Gallery</p>
      </div>

      <div className=" max-lg:hidden border border-gray-500 shadow-lg shadow-gray-700 m-[10%] flex flex-col items-center px-5 justify-center">
        <button>
          <button className="border border-orange-300 shadow-sm shadow-orange-400 p-2  w-14">
            All
          </button>
          <button className="border p-2 m-2 border-orange-300 shadow-sm shadow-orange-400">
            LUCKNOW ASHRAM
          </button>
          <button className="border p-2 m-2 border-orange-300 shadow-sm shadow-orange-400">
            MEERUT ASHRAM
          </button>
          <button className="border p-2 m-2 border-orange-300 shadow-sm shadow-orange-400">
            HARIDWAR ASHRAM
          </button>
          <button className="border p-2 m-2 border-orange-300 shadow-sm shadow-orange-400">
            MAHOLI SITAPUR ASHRAM
          </button>
        </button>

        <div className="grid grid-cols-3 gap-5">
          {data.map((event, index) => {
            return (
              <div>
                <img src={event.image} alt="" className="w-[25rem] h-[15rem]" />
              </div>
            );
          })}
        </div>
        <div className="pt-5 pb-5">
          <button className="bg-orange-600 text-white p-2 justify-center w-[150px]">
            Load More
          </button>
        </div>
      </div>
      <div className="lg:hidden border border-gray-500 shadow-xl shadow-gray-700 m-[10%] flex flex-col  px-5 ">
        <div className="flex !justify-between">
          <p className=" shadow-sm shadow-orange-500  p-2 text-xl mt-5 border ">
            All
          </p>
          <p className="border p-2 rounded mt-5">
            <Menu />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 pt-10 pl-8">
          {data.map((event, index) => {
            return (
              <div>
                <img src={event.image} alt="" className="w-[25rem] h-[15rem]" />
              </div>
            );
          })}
        </div>
        <div className="pt-5 pb-5 flex justify-center">
          <button className=" bg-orange-600 text-white p-2 justify-center w-[150px]">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
