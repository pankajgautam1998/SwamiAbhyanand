import React from "react";

import Slider from "react-slick";
import Slider1 from "react-slick";

const SlidePage = () => {
  var settings1 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div className="border p-6 border-gray-400  shadow-gray-500 shadow-2xl">
          <div className="w-full">
            <Slider {...settings}>
              <div>
                <img
                  src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/pic5.png"
                  alt=""
                  className="h-[20rem] w-full"
                />
              </div>
              <div>
                <img
                  src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/goshala3.jpg"
                  alt=""
                  className="h-[20rem] w-full"
                />
              </div>
              <div>
                <img
                  src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/goshala2.jpg"
                  alt=""
                  className="h-[20rem] w-full"
                />
              </div>
              <div>
                <img
                  src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/goshala1.jpg"
                  alt=""
                  className="h-[20rem] w-full"
                />
              </div>
            </Slider>
            <div className="grid justify-center text-4xl items-center">
              <p>स्वामी अभयानंद गौशाला समिति</p>
              <p className="text-xl w-[25rem] pt-10">
                गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान
                कृष्ण भी कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे
                गोपाल और गोविंदा के रूप में जाने जाते हैं और वृंदावन में गाय
                चराते हैं। केवल गायों को पालने से ही व्यक्ति बहुत ही प्राकृतिक
                और समृद्ध जीवन जी सकता है। अतः हमारे गौशाला के अंतर्गत गौरक्षा,
                संरक्षण एवं संवर्धन किया जाता है। First slide स्वामी अभयानंद
                संस्कृत विद्यालय स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3
                आचार्य एवं 21 विद्यार्थी वर्तमान में शुक्लयजुर्वेद, व्याकरण व
                आधुनिक शिक्षा भी प्राप्त करते है। साथ ही साथ स्वामी जी के
                प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता है जिसमें लगभग 30
                पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी विद्वान संत
                द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक रविवार।
              </p>
            </div>
            <div className="flex justify-center pt-10 pl-3">
              <button className="flex h-16 pt-4 border text-red-500 text-xl p-2 pl-10 w-[10rem] rounded border-red-600 hover:bg-red-500 hover:text-white">
                और पढ़ें
              </button>
            </div>
          </div>
        </div>
        <div className="border p-6 border-gray-400 shadow-gray-500 shadow-2xl ">
          <div className="w-full ">
            <Slider1 {...settings1}>
              <div>
                <img
                  src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit2.jpg"
                  alt=""
                  className="h-[20rem] w-full"
                />
              </div>
              <div>
                <img
                  src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit1.jpg"
                  alt=""
                  className="h-[20rem] w-full"
                />
              </div>
              <div>
                <img
                  src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/pic6.png"
                  alt=""
                  className="h-[20rem] w-full"
                />
              </div>
              <div>
                <img
                  src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/sanskrit3.jpg"
                  alt=""
                  className="h-[20rem] w-full"
                />
              </div>
            </Slider1>
            <div className="grid  justify-center text-4xl">
              <p>स्वामी अभयानंद संस्कृत विद्यालय</p>
              <p className="text-xl w-[20rem] text-center pt-10">
                स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21
                विद्यार्थी वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी
                प्राप्त करते है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप
                में प्रकाशित किया जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो
                चुकी हैं। नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं
                सायं सत्संग प्रवचन प्रत्येक रविवार।
              </p>
            </div>
            <div className="flex justify-center pt-10">
              <button className="flex h-16 pt-4 border text-red-500 text-xl p-2 pl-10 w-[10rem] rounded border-red-600 hover:bg-red-500 hover:text-white">
                और पढ़ें
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidePage;
