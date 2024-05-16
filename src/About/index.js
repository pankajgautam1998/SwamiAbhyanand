import React from "react";
import Slider from "react-slick";

const About = () => {
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
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl">हमारे बारे में</p>
        <img src="https://swamiabhyanand.com/images/cropped-logo.png" alt="" />
      </div>
      <div className="px-[10rem] max-lg:hidden">
        <Slider {...settings}>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/DSC_9301.JPG"
              alt=""
              className="h-[40rem] w-full"
            />
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/DSC06305.JPG"
              alt=""
              className="h-[40rem] w-full"
            />
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/DSC_9867.JPG"
              alt=""
              className="h-[40rem] w-full"
            />
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/DSC06339.JPG"
              alt=""
              className="h-[40rem] w-full"
            />
          </div>
        </Slider>
      </div>
      <div className="lg:hidden px-5">
        <Slider {...settings}>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/DSC_9301.JPG"
              alt=""
              className="h-[20rem] w-full"
            />
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/DSC06305.JPG"
              alt=""
              className="h-[20rem] w-full"
            />
          </div>
          <div>
            <img
              src="https://swamiabhyanand.com/uploads/DSC_9867.JPG"
              alt=""
              className="h-[20rem] w-full"
            />
          </div>
        </Slider>
      </div>
      <div className="flex flex-col items-center text-xl font-bold *:pt-5 max-lg:hidden">
        <p>॥श्री गुरूवे नमः॥</p>
        <p>(परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द सरस्वती जी महराज)</p>
        <p>कुलं पवित्रं जननी कृतार्था वसुन्धरा पुण्यवती च तेन।</p>
        <p>अपारसंवित्सुखसागरेऽस्मिन् लीनं परे ब्रह्मणि यस्य चेतः॥</p>
        <p>(स्कंन्दपुराणम्)</p>
      </div>
      <div className="lg:hidden px-5  text-xl font-bold *:pt-5 ">
        <p>॥श्री गुरूवे नमः॥</p>
        <p>(परम् पूज्य महामंडलेश्वर स्वामी श्री अभयानन्द सरस्वती जी महराज)</p>
        <p>कुलं पवित्रं जननी कृतार्था वसुन्धरा पुण्यवती च तेन।</p>
        <p>अपारसंवित्सुखसागरेऽस्मिन् लीनं परे ब्रह्मणि यस्य चेतः॥</p>
        <p>(स्कंन्दपुराणम्)</p>
      </div>
      <div className=" max-lg:hidden *:pt-5 px-[10rem]">
        <b className="underline">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज के
          कार्यों का संक्षिप्त परिचय:
        </b>
        <p>
          चिन्मय मिशन के सांदीपनि आश्रम सिद्धवाड़ी(हिमांचल प्रदेश, भारत) में वर्ष
          १९८७ से १९८९ तक वेदांत अनेकानेक ग्रंथों एवं सनातन धर्म के विषयों का
          गहन अध्ययन किया तत्पश्चात चिन्मय मिशन की शाखा भोपाल एवं लखनऊ शाखा में
          ३ वर्षो तक ब्रम्हचारी शौनक चैतन्य के नाम से आध्यात्मिक ज्ञान का प्रचार
          प्रसार किया है। वर्ष १९९२ से आप स्वतंत्र रूप से वेदांत ज्ञान का प्रचार
          प्रसार कर रहे हैं।
        </p>
        <p>
          वर्ष २००४ में संन्यास दीक्षा ग्रहण करके आप स्वामी अभ्यानंद सरस्वती के
          नाम से जाने गए। आपकी उद्भट विद्वता, वेदांत ज्ञान के लम्बे समय से
          प्रचार प्रसार और सुदूर तक फैली आपकी अनुपम ख्याति से प्रभावित होकर
          दिनाँक ६ जून २०१७ को महामण्लेश्वर समिति द्वारा, परमादर्श आचार्य
          महामण्लेश्वरों की पावन उपस्थिति में आपका “महामण्लेश्वर” के रूप में
          पट्टाभिषेक किया गया।
        </p>
        <p>
          दो वर्ष पश्चात १ जुलाई २०१९ को श्री पंचायती अखाडा महानिर्वाणी के
          महामंडलेश्वर के रूप में अभिषेक किया गया, तब से अनंत श्री विभूषित
          आचार्य महामंडलेश्वर स्वामी अभ्यानंद सरस्वती के रूप में जाने जाते हैं।
        </p>
        <p>
          आप आदि जगद्‌गुरु शंकराचार्य द्वारा प्रतिपादित अद्वैतमत को मानने वाले
          सभी वेदान्त शास्त्रों के ज्ञाता है। साथ ही साथ भगवतगीता , रामचरितमानस,
          श्रीमद्‌भागवत महापुराण आदि विषयों पर भी आपकी सारगर्भित “प्रसन्न गम्भीर
          शैली” में प्रवचन भी श्रवण योग्य है | आप उत्तरप्रदेश के कई शहरों में
          आश्रम स्थापित करके सनातन धर्म की अखण्ड परम्परा को गति प्रदान कर रहे
          हैं जिसमें हरिद्वार, लेखनऊ मेरठ एवं सीतापुर शहर प्रमुख हैं|
        </p>
      </div>
      <div className="lg:hidden *:pt-5 px-5">
        <b className="underline">
          परम् पूज्य आचार्य महामंडलेश्वर स्वामी अभयानन्द सरस्वती जी महाराज के
          कार्यों का संक्षिप्त परिचय:
        </b>
        <p>
          चिन्मय मिशन के सांदीपनि आश्रम सिद्धवाड़ी(हिमांचल प्रदेश, भारत) में वर्ष
          १९८७ से १९८९ तक वेदांत अनेकानेक ग्रंथों एवं सनातन धर्म के विषयों का
          गहन अध्ययन किया तत्पश्चात चिन्मय मिशन की शाखा भोपाल एवं लखनऊ शाखा में
          ३ वर्षो तक ब्रम्हचारी शौनक चैतन्य के नाम से आध्यात्मिक ज्ञान का प्रचार
          प्रसार किया है। वर्ष १९९२ से आप स्वतंत्र रूप से वेदांत ज्ञान का प्रचार
          प्रसार कर रहे हैं।
        </p>
        <p>
          वर्ष २००४ में संन्यास दीक्षा ग्रहण करके आप स्वामी अभ्यानंद सरस्वती के
          नाम से जाने गए। आपकी उद्भट विद्वता, वेदांत ज्ञान के लम्बे समय से
          प्रचार प्रसार और सुदूर तक फैली आपकी अनुपम ख्याति से प्रभावित होकर
          दिनाँक ६ जून २०१७ को महामण्लेश्वर समिति द्वारा, परमादर्श आचार्य
          महामण्लेश्वरों की पावन उपस्थिति में आपका “महामण्लेश्वर” के रूप में
          पट्टाभिषेक किया गया।
        </p>
        <p>
          दो वर्ष पश्चात १ जुलाई २०१९ को श्री पंचायती अखाडा महानिर्वाणी के
          महामंडलेश्वर के रूप में अभिषेक किया गया, तब से अनंत श्री विभूषित
          आचार्य महामंडलेश्वर स्वामी अभ्यानंद सरस्वती के रूप में जाने जाते हैं।
        </p>
        <p>
          आप आदि जगद्‌गुरु शंकराचार्य द्वारा प्रतिपादित अद्वैतमत को मानने वाले
          सभी वेदान्त शास्त्रों के ज्ञाता है। साथ ही साथ भगवतगीता , रामचरितमानस,
          श्रीमद्‌भागवत महापुराण आदि विषयों पर भी आपकी सारगर्भित “प्रसन्न गम्भीर
          शैली” में प्रवचन भी श्रवण योग्य है | आप उत्तरप्रदेश के कई शहरों में
          आश्रम स्थापित करके सनातन धर्म की अखण्ड परम्परा को गति प्रदान कर रहे
          हैं जिसमें हरिद्वार, लेखनऊ मेरठ एवं सीतापुर शहर प्रमुख हैं|
        </p>
      </div>
      <div className=" max-lg:hidden *:pt-5 px-[10rem]">
        <b className="underline">शौनक कुटीर हरिद्वार, ( उत्तरांचल )</b>
        <p>
          परिचय:- सर्वप्रथम दिनांक 19 जून 1998 को इस आश्रम की नींव रखी गयी।
          स्वामी जी ने अपने पूर्व नाम ब्रह्मचारी शौनक चैतन्य के नाम से इस आश्रम
          का नाम “शौनक कुटीर” रखा, जिसमें आज 50 कमरों से युक्त वृहद् आश्रम रूप
          में परिणत हो गया है। आश्रम में पूजा स्थल, सत्संग हॉल, रसोई भण्डार,
          स्वामीजी का निवास स्थान आदि है। जिसका संचालन “शौनक कुटीर ” आश्रम समिति
          द्वारा किया जाता है।
        </p>
        <p className="underline font-bold">गतिविधियाँ : –</p>
        <p>1.संस्कृत पाठशाला व गौशाला का संचालन।</p>
        <p>
          2.स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशीत करना जिसमें लगभग 30
          पुस्तकें प्रकाशित हो चुकी हैं।
        </p>
        <p>
          3.नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग
          प्रवचन
        </p>
        <p>4.प्रत्येक रविवार हवन, स्वाध्याय, आदि ।</p>
      </div>
      <div className="lg:hidden *:pt-5 px-5">
        <b className="underline">शौनक कुटीर हरिद्वार, ( उत्तरांचल )</b>
        <p>
          परिचय:- सर्वप्रथम दिनांक 19 जून 1998 को इस आश्रम की नींव रखी गयी।
          स्वामी जी ने अपने पूर्व नाम ब्रह्मचारी शौनक चैतन्य के नाम से इस आश्रम
          का नाम “शौनक कुटीर” रखा, जिसमें आज 50 कमरों से युक्त वृहद् आश्रम रूप
          में परिणत हो गया है। आश्रम में पूजा स्थल, सत्संग हॉल, रसोई भण्डार,
          स्वामीजी का निवास स्थान आदि है। जिसका संचालन “शौनक कुटीर ” आश्रम समिति
          द्वारा किया जाता है।
        </p>
        <p className="underline font-bold">गतिविधियाँ : –</p>
        <p>1.संस्कृत पाठशाला व गौशाला का संचालन।</p>
        <p>
          2.स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशीत करना जिसमें लगभग 30
          पुस्तकें प्रकाशित हो चुकी हैं।
        </p>
        <p>
          3.नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग
          प्रवचन
        </p>
        <p>4.प्रत्येक रविवार हवन, स्वाध्याय, आदि ।</p>
      </div>
      <div className=" max-lg:hidden px-[10rem]">
        <b className="underline ">वेदान्त आश्रम मेरठ :</b>
        <p className="pt-5">
          स्वामीजी द्वारा मेरठ शहर के ग्राम बिजौली में आश्रम स्थापित है इस आश्रम
          में संस्कृत पाठशाला, गौशाला एवं पंचमुखी महादेव मन्दिर स्थापित है। इस
          सबका कुशल संचालन वेदान्त आश्रम समिति द्वारा एवं स्वामी अभेदानन्द
          सरस्वती जी द्वारा किया जाता है।
        </p>
      </div>
      <div className=" lg:hidden px-5">
        <b className="underline ">वेदान्त आश्रम मेरठ :</b>
        <p className="pt-5">
          स्वामीजी द्वारा मेरठ शहर के ग्राम बिजौली में आश्रम स्थापित है इस आश्रम
          में संस्कृत पाठशाला, गौशाला एवं पंचमुखी महादेव मन्दिर स्थापित है। इस
          सबका कुशल संचालन वेदान्त आश्रम समिति द्वारा एवं स्वामी अभेदानन्द
          सरस्वती जी द्वारा किया जाता है।
        </p>
      </div>
      <div className=" max-lg:hidden px-[10rem]">
        <b className="underline">
          प्रज्ञानम् सत्संग आश्रम महोली, सीतापुर उत्तर प्रदेश :
        </b>
        <p className="pt-5 pb-5">
          “प्रज्ञानम् सत्संग आश्रम” नाम से इस आश्रम की स्थापना स्वामी जी द्वारा
          की गई है जहां पर भव्य यज्ञशाला, राधा कृष्ण मन्दिर एवं संत निवास आदि
          है। इसका संचालन प्रज्ञानम् सत्संग आश्रम समिति द्वारा किया जाता है।
        </p>
      </div>
      <div className=" lg:hidden px-5">
        <b className="underline">
          प्रज्ञानम् सत्संग आश्रम महोली, सीतापुर उत्तर प्रदेश :
        </b>
        <p className="pt-5 pb-5">
          “प्रज्ञानम् सत्संग आश्रम” नाम से इस आश्रम की स्थापना स्वामी जी द्वारा
          की गई है जहां पर भव्य यज्ञशाला, राधा कृष्ण मन्दिर एवं संत निवास आदि
          है। इसका संचालन प्रज्ञानम् सत्संग आश्रम समिति द्वारा किया जाता है।
        </p>
      </div>
    </>
  );
};

export default About;
