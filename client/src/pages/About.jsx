import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Drobe is your ultimate destination for premium fashion and lifestyle
            products that blend style and quality. We curate trendy collections
            designed to elevate your everyday look, offering everything from
            classic essentials to contemporary must-haves. With secure payments,
            fast shipping, and exceptional customer service, we prioritize your
            shopping satisfaction
          </p>
          <p>
            Our commitment goes beyond products – we’re here to provide a
            seamless shopping experience backed by reliability and integrity.
            Discover the perfect blend of style, quality, and convenience at
            Drobe.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Drobe is to deliver exceptional products that inspire
            style and elevate everyday living. We’re committed to quality,
            affordability, and outstanding customer service, ensuring a seamless
            shopping experience for all.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6 ">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Drobe, quality is our cornerstone. Every product undergoes
            rigorous selection to meet our high standards, ensuring durability,
            functionality, and style. We partner with trusted suppliers to bring
            you the best in fashion and lifestyle essentials, backed by a
            commitment to excellence.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6">
          <b>Convenience</b>
          <p className="text-gray-600">
            We make shopping effortless with a user-friendly platform, secure
            payments, and fast shipping. From browsing to checkout, every step
            is designed for a seamless experience, allowing you to shop
            confidently anytime, anywhere.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Your satisfaction is our priority. Our dedicated support team is
            always ready to assist with product inquiries, order updates, and
            post-purchase assistance. We believe in building lasting
            relationships through responsive, reliable, and friendly service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
