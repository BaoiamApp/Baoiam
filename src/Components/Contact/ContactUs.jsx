import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaCommentDots, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {

  const cards = [
    {
      icon: <FaCommentDots className="text-2xl md:text-4xl" />,
      title: 'Chat to sales',
      description: 'Speak to our friendly team.',
      contact: 'tutors@baoiam.com',
    },
    {
      icon: <FaEnvelope className="text-2xl md:text-4xl" />,
      title: 'Chat to support',
      description: "We're here to help.",
      contact: 'tutors@baoiam.com',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl md:text-4xl" />,
      title: 'Visit us',
      description: 'Visit our office HQ.',
      contact: 'View on Google Maps',
    },
    {
      icon: <FaPhoneAlt className="text-2xl md:text-4xl" />,
      title: 'Call us',
      description: 'Mon-Fri from 8am to 5pm.',
      contact: '08069640635',
    },
  ];

  return (

    <div className='ContactUs'>

      <section className="relative md:mb-24 mb-10 bg-white mt-2 md:mt-4 overflow-hidden px-6 z-10">

        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes-light.png')] bg-repeat opacity-30"></div>


        <div className="max-w-7xl mx-auto text-center mt-10 md:mt-24">
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-900">Contact our friendly team</h1>
          <p className="text md:text-xl text-gray-600 mt-4">Chat to our friendly team 24/7 and get onboard in less than 5 minutes.</p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative group p-6 w-full md:w-72 rounded-lg bg-white border border-gray-200 shadow cursor-pointer mb-0"
              >
                <div className="flex flex-col items-start space-y-4">

                  <div className="flex flex-row justify-start mb-4 gap-4">
                    {card.icon}
                    <h3 className="md:text-2xl text-xl font-semibold text-gray-900">{card.title}</h3>
                  </div>
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
        <h1 className='text-black text-center text-3xl md:text-4xl font-semibold md:mb-4 mb-3'>Reach out to Us</h1>
        <p className='text-gray-600 md:text-xl text-lg mt-2 md:mb-12 mb-4 text-center px-4'>Our expert team is here to assist you every step of the way. Contact us now!</p>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          <div className="lg:w-3/5 bg-white p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold md:mb-8 mb-4">Contact Us</h2>
            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-gray-700 mb-2">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter your first name here..."
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Enter your last name here..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="xyz.@example.com"
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

              <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600">Submit</button>
            </form>
          </div>

          <div className="lg:w-2/5 space-y-2 rounded-xl">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Chat with us</h2>
              <p className="text-gray-600 mb-6">Speak to our friendly team via live chat.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="mr-4" />
                  <a href="mailto:tutors@baoiam.com" className="underline">tutors@baoiam.com</a>
                </div>
                <div className="flex items-center">
                  <FaTwitter className="mr-4" />
                  <a href="#" className="underline">Message us on X</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Call us</h2>
              <p className="text-gray-600 mb-6">Call our team Mon-Fri from 8am to 5pm.</p>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-4" />
                <a href="tel:08069640635" className="underline">08069640635</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Visit us</h2>
              <p className="text-gray-600 mb-6">Chat to us in person at our HQ.</p>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-4" />
                <a href="#" className="underline">B Block Noida Sector 15 Uttar Pradesh</a>
              </div>
              <div className="h-56 w-80 mt-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56778.23569201361!2d77.29743635795448!3d28.56460407812812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3036ecb3b95%3A0x927e51f17b1aeb5b!2sB%20Block%2C%20Sector%2015%2C%20Noida%2C%20Uttar%20Pradesh%20201021!5e0!3m2!1sen!2sin!4v1694209323043"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>

  );
};

export default ContactUs