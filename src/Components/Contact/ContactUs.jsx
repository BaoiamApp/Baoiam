import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaCommentDots, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {

  const cards = [
    {
      icon: <FaCommentDots className="text-2xl md:text-3xl text-indigo-500" />,
      title: 'Chat to sales',
      description: 'Speak to our friendly team.',
      contact: 'tutors@baoiam.com',
    },
    {
      icon: <FaEnvelope className="text-2xl md:text-3xl text-indigo-500" />,
      title: 'Chat to support',
      description: "We're here to help.",
      contact: 'tutors@baoiam.com',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl md:text-3xl text-indigo-500" />,
      title: 'Visit us',
      description: 'Visit our office HQ.',
      contact: 'View on Google Maps',
    },
    {
      icon: <FaPhoneAlt className="text-2xl md:text-3xl text-indigo-500" />,
      title: 'Call us',
      description: 'Mon-Fri from 8am to 5pm.',
      contact: '08069640635',
    },
  ];

  return (

    <div className='ContactUs'>

      <section className="relative min-h-screen bg-white mt-2 md:mt-4 overflow-hidden px-6 z-10">

        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes-light.png')] bg-repeat opacity-30"></div>


        <div className="max-w-7xl mx-auto text-center mt-10 md:mt-28">
          <h1 className="text-xl md:text-5xl font-semibold text-gray-900">Contact our friendly team</h1>
          <p className="text md:text-xl text-gray-600 mt-4">Chat to our friendly team 24/7 and get onboard in less than 5 minutes.</p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative group p-6 w-full md:w-72 rounded-lg bg-white border border-gray-200 shadow cursor-pointer"
              >
                <div className="flex flex-col items-start space-y-4">

                  <div className="flex justify-start mb-4">
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>

                  <p className="text-gray-600 mb-4">{card.description}</p>

                  <p className="underline text-indigo-500 cursor-pointer hover:text-indigo-700">
                    {card.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


      <section className="py-4 px-6 bg-white rounded-xl">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          <div className="lg:w-3/5 bg-white p-6 md:p-8 rounded-lg border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-6">
     
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-gray-700 mb-2">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Doe"
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="john.doe@example.com"
                />
              </div>
      
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
   
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your message here..."
                ></textarea>
              </div>
   
              <div>
                <span className="block text-gray-700 mb-2">Services</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="service1" className="mr-2" />
                    <label htmlFor="service1" className="text-gray-700">Website Design</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="service2" className="mr-2" />
                    <label htmlFor="service2" className="text-gray-700">UX Design</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="service3" className="mr-2" />
                    <label htmlFor="service3" className="text-gray-700">User Research</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="service4" className="mr-2" />
                    <label htmlFor="service4" className="text-gray-700">Content Creation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="service5" className="mr-2" />
                    <label htmlFor="service5" className="text-gray-700">Strategy & Consulting</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="service6" className="mr-2" />
                    <label htmlFor="service6" className="text-gray-700">Other</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600">Send Message</button>
            </form>
          </div>

          <div className="lg:w-2/5 space-y-2 rounded-xl">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Chat with us</h2>
              <p className="text-gray-600 mb-6">Speak to our friendly team via live chat.</p>
              <div className="space-y-4">
                {/* <div className="flex items-center">
                  <FaCommentDots className="text-indigo-500 mr-4" />
                  <a href="#" className="underline text-indigo-500 hover:text-indigo-700">Start a live chat</a>
                </div> */}
                <div className="flex items-center">
                  <FaEnvelope className="text-indigo-500 mr-4" />
                  <a href="mailto:tutors@baoiam.com" className="underline text-indigo-500 hover:text-indigo-700">tutors@baoiam.com</a>
                </div>
                <div className="flex items-center">
                  <FaTwitter className="text-indigo-500 mr-4" />
                  <a href="#" className="underline text-indigo-500 hover:text-indigo-700">Message us on X</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Call us</h2>
              <p className="text-gray-600 mb-6">Call our team Mon-Fri from 8am to 5pm.</p>
              <div className="flex items-center">
                <FaPhoneAlt className="text-indigo-500 mr-4" />
                <a href="tel:08069640635" className="underline text-indigo-500 hover:text-indigo-700">08069640635</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Visit us</h2>
              <p className="text-gray-600 mb-6">Chat to us in person at our HQ.</p>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-indigo-500 mr-4" />
                <a href="#" className="underline text-indigo-500 hover:text-indigo-700">B Block Noida Sector 15 Uttar Pradesh</a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>

  );
};

export default ContactUs;

