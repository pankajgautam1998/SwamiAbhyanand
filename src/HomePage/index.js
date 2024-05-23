import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlidePage from "../SlidePage";
import Slider3 from "react-slick";
import Slider4 from "react-slick";
import { Link } from "react-router-dom";

const HomePage = () => {
  var settings4 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings3 = {
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
      <div className="max-lg:hidden flex gap-5 w-full px-5">
        <Slider {...settings} className="w-[70%]">
          <img
            src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06305.JPG"
            alt=""
            className="h-[40rem] w-full"
          />

          <img
            src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06339.JPG"
            alt=""
            className="h-[40rem] w-full"
          />

          <img
            src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC06326.JPG"
            alt=""
            className="h-[40rem] w-full"
          />

          <img
            src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9867.JPG"
            alt=""
            className="h-[40rem] w-full"
          />

          <img
            src="https://swamiabhyanand.s3.ap-south-1.amazonaws.com/uploads/DSC_9301.JPG"
            alt=""
            className="h-[40rem] w-full"
          />
        </Slider>

        <div className="relative w-[30%]">
          <img
            src="https://swamiabhyanand.com/uploads/_DSC2502.JPG"
            alt=""
            className="h-[40rem]  "
          />
          <p className="absolute bottom-5 text-2xl text-white px-5 font-bold">
            परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
          </p>
        </div>
      </div>
      <div className="lg:hidden relative  ">
        <img src="https://swamiabhyanand.com/uploads/_DSC2502.JPG" alt="" />
        <p className="absolute bottom-5 text-2xl text-white px-5 font-bold">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
        </p>
      </div>

      <div className="flex flex-col justify-center items-center max-lg:hidden">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png" alt="" />
        <p className="text-gray-500 text-4xl">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
        </p>
        <p className="font-bold text-xl pt-5">
          ‘आचार्यं मां विजानीयात्’ गुरु को मेरा रूप ही जानो अर्थात् गुरु और
          भगवान् में कोई भेद नहीं है। जो गुरु-वचनों में दृढ़ विश्वास
        </p>
        <p className="font-bold text-xl">
          रखता है, गुरुदेव जिसपर प्रसन्न रहते हैं, उसे कोई विघ्न नहीं घेरते।
          गुरु माता-पिता-पति सब हैं, उनके बिना संसार में कहीं गति
        </p>
        <p className="font-bold text-xl">
          नहीं। गुरु सर्वशक्तिमान और वाँछाकल्पतरु हैं।
        </p>
      </div>
      <div className="lg:hidden flex flex-col items-center pt-5 px-5">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt=""
          className="h-10"
        />
        <p className="text-4xl text-zinc-400 pt-5">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज
        </p>
        <p className="text-xl font-bold pt-5">
          ‘आचार्यं मां विजानीयात्’ गुरु को मेरा रूप ही जानो अर्थात् गुरु और
          भगवान् में कोई भेद नहीं है। जो गुरु-वचनों में दृढ़ विश्वास रखता है,
          गुरुदेव जिसपर प्रसन्न रहते हैं, उसे कोई विघ्न नहीं घेरते। गुरु
          माता-पिता-पति सब हैं, उनके बिना संसार में कहीं गति नहीं। गुरु
          सर्वशक्तिमान और वाँछाकल्पतरु हैं।
        </p>
      </div>
      <div className="flex justify-center pt-2">
        <Link to="/about">
          <button className="flex h-16 pt-4 border text-red-500 text-xl p-2 pl-8 w-[10rem] rounded border-red-600 hover:bg-red-500 hover:text-white">
            Know More
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center max-lg:hidden">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt=""
          className="pt-2"
        />
        <p className="text-4xl pt-2">हमारे बारे में</p>
      </div>
      <div className="lg:hidden flex flex-col items-center pt-5">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt=""
          className="h-10 "
        />
        <p className="pt-5 text-4xl text-zinc-500">हमारे बारे में</p>
      </div>

      <div className="flex gap-10 justify-between px-[15rem] max-lg:hidden">
        <div className="flex flex-col justify-center items-center">
          <img src="https://swamiabhyanand.com/images/pic1.png" alt="" />
          <p className="text-xl text-gray-500 font-bold">
            स्वामी अभयानंद संस्कृत विद्यालय
          </p>
          <p className="w-[30rem] text-xl">
            स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी
            वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते
            है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया
            जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति
            किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन
            प्रत्येक रविवार हवन, स्वाध्याय, आदि ।
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="https://swamiabhyanand.com/images/pic2.png" alt="" />
          <p className="text-xl text-gray-500 font-bold">
            स्वामी अभयानंद गौशाला समिति
          </p>
          <p className="w-[30rem] text-xl">
            गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी
            कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा
            के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को
            पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः
            हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।
          </p>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center px-5 *:pt-5">
        <img src="https://swamiabhyanand.com/images/pic1.png" alt="" />
        <p className="font-bold text-2xl"> स्वामी अभयानंद संस्कृत विद्यालय</p>
        <p className="text-2xl">
          स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी
          वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है।
          साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता
          है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी
          विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक
          रविवार हवन, स्वाध्याय, आदि ।
        </p>
      </div>
      <div className="lg:hidden flex flex-col items-center *:pt-5 px-5">
        <img src="https://swamiabhyanand.com/images/pic2.png" alt="" />
        <p className="text-2xl font-bold"> स्वामी अभयानंद गौशाला समिति</p>
        <p className="text-2xl">
          गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी
          कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा
          के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को
          पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः
          हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।
        </p>
      </div>
      <div className="flex gap-10 justify-between px-[15rem] max-lg:hidden">
        <div className="flex flex-col justify-center items-center">
          <img src="https://swamiabhyanand.com/images/pic3.png" alt="" />
          <p className="text-xl text-gray-500 font-bold">
            स्वामी अभयानंद पुस्तकालय​
          </p>
          <p className="w-[30rem] text-xl">
            स्वामी अभयानंद पुस्तकालय​ अंतर्गत, हमारे सदगुरुदेव भगवान के प्रवचनों
            का संकलन किया जाता है। अभी तक स्वामी जी के प्रवचनों को पुस्तक रूप
            में प्रकाशीत करने की पंक्ति में 30 पुस्तकें प्रकाशित की जा चुकी हैं।
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <img src="https://swamiabhyanand.com/images/pic4.png" alt="" />
          <p className="text-xl text-gray-500 font-bold">दैनिक सत्संग</p>
          <p className="w-[30rem] text-xl">
            इसका कार्य शुद्ध भक्ति जीवन की उन्नति के लिए अनुकूल एक शुद्ध और
            आध्यात्मिक रूप से सराबोर वातावरण उत्पन्न करना है। यहाँ प्रातः एवं
            सायं भगवत्नाम संकीर्तन एवं कथा वाचन किया जाता है ।
          </p>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center px-5 *:pt-5">
        <img src="https://swamiabhyanand.com/images/pic3.png" alt="" />
        <p className="font-bold text-2xl"> स्वामी अभयानंद पुस्तकालय​</p>
        <p className="text-2xl">
          स्वामी अभयानंद पुस्तकालय​ अंतर्गत, हमारे सदगुरुदेव भगवान के प्रवचनों
          का संकलन किया जाता है। अभी तक स्वामी जी के प्रवचनों को पुस्तक रूप में
          प्रकाशीत करने की पंक्ति में 30 पुस्तकें प्रकाशित की जा चुकी हैं।
        </p>
      </div>
      <div className="lg:hidden flex flex-col items-center px-5 *:pt-5">
        <img src="https://swamiabhyanand.com/images/pic4.png" alt="" />
        <p className="font-bold text-2xl">दैनिक सत्संग</p>
        <p className="text-2xl">
          इसका कार्य शुद्ध भक्ति जीवन की उन्नति के लिए अनुकूल एक शुद्ध और
          आध्यात्मिक रूप से सराबोर वातावरण उत्पन्न करना है। यहाँ प्रातः एवं सायं
          भगवत्नाम संकीर्तन एवं कथा वाचन किया जाता है ।
        </p>
      </div>
      <div className="flex flex-col justify-center items-center max-lg:hidden">
        <img src="https://swamiabhyanand.com/images/cropped-logo.png" alt="" />
        <p className="text-2xl text-gray-500 font-bold">Latest From Our Blog</p>
      </div>
      <div className="lg:hidden flex flex-col items-center px-5 *:pt-5">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt=""
          className="h-14"
        />
        <p className="text-4xl font-bold text-zinc-500">Latest From Our Blog</p>
      </div>
      <div className="lg:hidden flex items-center px-5 pt-5">
        <img src="https://swamiabhyanand.com/images/DSC06339.JPG" alt="" />
      </div>
      <div className="lg:hidden px-8 *:pt-5">
        <div className="flex items-center gap-5">
          <img
            src="https://swamiabhyanand.com/images/goshala.png"
            alt=""
            className="h-12"
          />
          <p className="font-bold text-xl">गौशाला</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://swamiabhyanand.com/images/sanskrit%20vidyalay.png"
            alt=""
            className="h-12"
          />
          <p className="font-bold text-xl">संस्कृत विद्यालय​</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://swamiabhyanand.com/images/pustkalay.png"
            alt=""
            className="h-12"
          />
          <p className="font-bold text-xl">संस्कृत विद्यालय​</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://swamiabhyanand.com/images/satsang.png"
            alt=""
            className="h-12"
          />
          <p className="font-bold text-xl">सत्संग</p>
        </div>
        <div className="flex items-center gap-5">
          <img
            src="https://swamiabhyanand.com/images/bhagwat%20arti.png"
            alt=""
            className="h-12"
          />
          <p className="font-bold text-xl">भगवत आरती</p>
        </div>
      </div>
      <div className="flex gap-10 pt-5 px-5 max-lg:hidden">
        <div>
          <img
            src="https://swamiabhyanand.com/images/DSC06339.JPG"
            alt=""
            className="w-[45rem]"
          />
        </div>
        <div>
          <div className="flex items-center gap-5">
            <img
              src="https://swamiabhyanand.com/images/goshala.png"
              alt=""
              className="h-20"
            />
            <p>गौशाला</p>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="https://swamiabhyanand.com/images/sanskrit%20vidyalay.png"
              alt=""
              className="h-20"
            />
            <p>संस्कृत विद्यालय​</p>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="https://swamiabhyanand.com/images/pustkalay.png"
              alt=""
              className="h-20"
            />
            <p>संस्कृत विद्यालय​</p>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="https://swamiabhyanand.com/images/satsang.png"
              alt=""
              className="h-20"
            />
            <p>सत्संग</p>
          </div>
          <div className="flex items-center gap-5">
            <img
              src="https://swamiabhyanand.com/images/bhagwat%20arti.png"
              alt=""
              className="h-20"
            />
            <p> भगवत आरती</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <Link to="/blog">
          <button className="flex h-16 pt-4 border text-red-500 text-xl p-2 pl-8 w-[10rem] rounded border-red-600 hover:bg-red-500 hover:text-white">
            Read All
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center max-lg:hidden">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt=""
          className="pt-2"
        />
        <p className="text-4xl pt-2">वीडियो देखें</p>
      </div>
      <div className="lg:hidden flex flex-col items-center pt-5 px-5">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt=""
          className="h-14"
        />
        <p className="text-4xl pt-2 text-zinc-500">वीडियो देखें</p>
      </div>
      <div className="flex justify-between pt-5 px-5 max-lg:hidden">
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AjP8FtHExlA?si=bjjKvbXCMnNbdRQH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <p className="text-2xl ">श्रीमद्भगवत गीता अध्याय-9 | भग-7</p>
          <p className="text-2xl w-[45rem] text-gray-500">
            श्रीमद्भगवद्गीता अध्याय- 9 (राजविद्याराजगुह्ययोग), भाग -7, अनंत श्री
            विभूषित महामण्डलेश्वर स्वामी अभयानंद सरस्वती जी महाराज (श्री पंचायती
            अखाड़ा महानिर्वाणी) ” अध्यक्ष ” अखिल भारतीय संत समिति उत्तर प्रदेश
            स्वामी अभयानन्द वेद पाठशाला ,पपनामऊ,अनौरा कलां ,फैज़ाबाद रोड़ ,(लखनऊ
            )
          </p>
        </div>
      </div>
      <div className="lg:hidden">
        <iframe
          className="flex flex-col items-center px-5 lg:w-[560px] w-[400px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AjP8FtHExlA?si=bjjKvbXCMnNbdRQH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p className="text-2xl px-5">श्रीमद्भगवत गीता अध्याय-9 | भग-7</p>
        <p className="text-2xl px-5 text-zinc-500">
          श्रीमद्भगवद्गीता अध्याय- 9 (राजविद्याराजगुह्ययोग), भाग -7, अनंत श्री
          विभूषित महामण्डलेश्वर स्वामी अभयानंद सरस्वती जी महाराज (श्री पंचायती
          अखाड़ा महानिर्वाणी) ” अध्यक्ष ” अखिल भारतीय संत समिति उत्तर प्रदेश
          स्वामी अभयानन्द वेद पाठशाला ,पपनामऊ,अनौरा कलां ,फैज़ाबाद रोड़ ,(लखनऊ )
        </p>
      </div>
      <div className="flex justify-center pt-2 max-lg:hidden">
        <button className="flex h-16 pt-4 border text-red-500 text-xl p-2 pl-8 w-[12rem] rounded border-red-600 hover:bg-red-500 hover:text-white">
          सभी वीडियो देखें
        </button>
      </div>
      <div className="flex justify-center pt-5 lg:hidden">
        <button className="flex h-16 pt-4 border text-red-500 text-xl p-2 pl-8 w-[12rem] rounded border-red-600 hover:bg-red-500 hover:text-white">
          सभी वीडियो देखें
        </button>
      </div>
      <div className="pt-10 px-[10rem] pb-5 max-lg:hidden">
        <SlidePage />
      </div>
      <div className="lg:hidden px-5 pt-10">
        <div className="border p-6 border-gray-400  ">
          <div className="w-full">
            <Slider3 {...settings3}>
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
            </Slider3>
            <div className="grid justify-center text-4xl items-center">
              <p>स्वामी अभयानंद गौशाला समिति</p>
              <p className="text-xl w-full pt-10">
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
        <div className="pt-10">
          <div className="border p-6 border-gray-400  ">
            <div className="w-full ">
              <Slider4 {...settings4}>
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
              </Slider4>
              <div className="grid  justify-center text-4xl">
                <p>स्वामी अभयानंद संस्कृत विद्यालय</p>
                <p className="text-xl w-full text-center pt-10">
                  स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21
                  विद्यार्थी वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा
                  भी प्राप्त करते है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक
                  रूप में प्रकाशित किया जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित
                  हो चुकी हैं। नित्य प्रति किसी विद्वान संत द्वारा सुबह
                  स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक रविवार।
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
      </div>
    </>
  );
};

export default HomePage;
