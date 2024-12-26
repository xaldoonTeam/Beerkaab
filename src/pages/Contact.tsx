import React, { useState } from "react";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full bg-cover bg-center py-40 text-center relative"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/aerial-view-tractor-applying-chemicals-large-green-field-concept-agricultural-practices-crop-spraying-farm-machinery-precision-agriculture-field-management_864588-221171.jpg?w=1060')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-white text-5xl font-bold relative z-10">CONTACT US</h1>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-green-50 via-white to-green-50 py-16 px-8 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-green-700">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2z"
                  />
                </svg>
                <p className="text-gray-700 font-medium">Beerkaab@Gmail.Com</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11m-5-7H6a2 2 0 00-2 2v12a2 2 0 002 2h5m10-4v4m0-4h4m-4 0h-4"
                  />
                </svg>
                <p className="text-gray-700 font-medium">(02) 5664 2342</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10l4.5-4m0 0l4.5 4m-4.5 4V6m0 0l4.5 4M9 3h6a2 2 0 012 2v12a2 2 0 01-2 2H9"
                  />
                </svg>
                <p className="text-gray-700 font-medium">Hargeisa, Somaliland</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700">Follow Us</h3>
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Send a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 w-full"
                  required
                />
              </div>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 w-full"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 w-full"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write message"
                rows={4}
                className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 w-full"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
