import React from "react";
import icon from "../assets/icon.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#BCDDFE] text-gray-800 w-full">
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row", // horizontal layout
          // padding: "3rem 0",
          paddingTop: "86px",
          paddingBottom: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "221px", // horizontal gap between columns
        }}
        className=" text-center md:text-left"
      >
        {/* Column 1 */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
            <img
              src={icon}
              alt="Logo"
              style={{ width: "38.97px", height: "35.93px" }}
            />
            <p
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "18px",
                letterSpacing: "0%",
              }}
            >
              E-Comm
            </p>
          </div>
          <p
            style={{
              fontFamily: "Proxima",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "12px",
              letterSpacing: "0%",
              width: "220.95px",
              marginTop: "0.5rem",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever. Since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Column 2 */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "18px",
              letterSpacing: "0%",
              marginBottom: "8px",
            }}
          >
            Follow Us
          </h3>
          <p
            style={{
              fontFamily: "Proxima",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "12px",
              letterSpacing: "0%",
              width: "120px",
              marginBottom: "16px",
            }}
          >
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div style={{ display: "flex", gap: "42px" }}>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "7.64px",
                height: "13.94px",
                backgroundColor: "#E5E7EB",
                borderRadius: "50%",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2563EB")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#E5E7EB")
              }
            >
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "7.64px", height: "13.94px" }}
              />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "14.62px",
                height: "10.95px",
                backgroundColor: "#E5E7EB",
                borderRadius: "50%",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1DA1F2")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#E5E7EB")
              }
            >
              <img
                src={twitter}
                alt="Twitter"
                style={{ width: "14.62px", height: "10.95px" }}
              />
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "18px",
              letterSpacing: "0%",
              marginBottom: "8px",
            }}
          >
            Contact Us
          </h3>
          <p
            style={{
              fontFamily: "Proxima",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "12px",
              letterSpacing: "0%",
              width: "120px",
              marginBottom: "16px",
            }}
          >
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="py-12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-[221px] max-w-[1200px]">
        {/* Column 1 */}
        <div>
          <h3 className="font-poppins font-normal text-[18px] leading-[18px] tracking-[0%] mb-4">
            Information
          </h3>
          <ul className="font-poppins font-normal text-[14px] leading-[14px] tracking-[0%] space-y-2">
            <li>About Us</li>
            <li>Infomationt</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-poppins font-normal text-[18px] leading-[18px] tracking-[0%] mb-4">
            Service
          </h3>
          <ul className="font-poppins font-normal text-[14px] leading-[14px] tracking-[0%] space-y-2">
            <li>About Us</li>
            <li>Infomationt</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-poppins font-normal text-[18px] leading-[18px] tracking-[0%] mb-4">
            My Account
          </h3>
          <ul className="font-poppins font-normal text-[14px] leading-[14px] tracking-[0%] space-y-2">
            <li>About Us</li>
            <li>Infomationt</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-poppins font-normal text-[18px] leading-[18px] tracking-[0%] mb-4">
            Our Offers
          </h3>
          <ul className="font-poppins font-normal text-[14px] leading-[14px] tracking-[0%] space-y-2">
            <li>About Us</li>
            <li>Infomationt</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-4 px-6 max-w-[1499px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © 2018 Ecommerce theme by{" "}
          <a href="https://www.bisenbaev.com" className="underline">
            www.bisenbaev.com
          </a>
        </p>
        <div className="flex items-center gap-4">{/* Payment icons */}</div>
      </div>
    </footer>
  );
};

export default Footer;
