import React from "react";

const Ebook = () => {
  const data = [
    {
      id: 1,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
    {
      id: 2,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
    {
      id: 3,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
    {
      id: 4,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
    {
      id: 5,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
    {
      id: 6,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
    {
      id: 7,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
    {
      id: 8,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
    {
      id: 9,
      image:
        "https://d3vpszern3jgjo.cloudfront.net/wp-content/themes/setupo-new/public/img/svg/404_svg.svg",
      oops: "Oops...",
      p1: "We can't find this flippbook!",
      p2: "It looks like the flipbook you would like to access has been deleted, or link has expired.",
      p3: "Please contact with person who shared it with you.",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png" alt="" />
        <p className="pt-2 text-2xl font-bold">E-Books</p>
      </div>
      <div className=" gap-5 grid grid-cols-3  px-[10rem] pt-5 pb-5">
        {data.map((i, index) => {
          return (
            <div className="overflow-y-auto h-96">
              <div className="border border-l-blue-950 border-l-8 border-r-blue-950 border-r-8 px-5">
                <img src={i.image} alt="" className="h-[20rem]" />
                <p className="text-cyan-950 font-bold text-4xl">{i.oops}</p>
                <p className="text-cyan-900 font-bold text-xl">{i.p1}</p>
                <p className="w-[20rem]">{i.p2}</p>
                <p className="text-cyan-900 font-bold text-xl w-[20rem]">
                  {i.p3}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="pt-5" />
    </>
  );
};

export default Ebook;
