import React from 'react'
import { contact } from '@/assets/sharedSection'
const ContactForm = () => {
  return (
    <div
      className="bg-cover bg-center py-16 "
      style={{
        backgroundImage: `url(${contact.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-2xl lg:mx-auto mx-10 text-center">
        <h2 className="text-[40px]  text-white mb-4 font-light">
          Have Any Questions? <span className="text-crypOrange font-bold">Contact Us</span>
        </h2>
        <form className="bg-transparent p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-8 mb-5">
            <input
              type="email"
              placeholder="text@domain.com"
              className="p-3 border border-gray-300  focus:outline-none focus:border-crypOrange focus:shadow-[0_0_10px_#A4165A] "
              required
            />
            <div className="flex flex-col md:flex-row gap-8 md:gap-3  mb-2">
              <input
                type="text"
                placeholder="John"
                className="p-3 border border-gray-300  focus:outline-none focus:border-crypOrange focus:shadow-[0_0_10px_#A4165A] w-full md:w-1/2"
                required
              />
              <input
                type="text"
                placeholder="Christopher"
                className="p-3 border border-gray-300  focus:outline-none focus:border-crypOrange focus:shadow-[0_0_10px_#A4165A] w-full  md:w-1/2"
                required
              />
            </div>
          </div>
          <textarea
            placeholder="Your message..."
            className="w-full p-3 border border-gray-300  focus:outline-none focus:border-crypOrange focus:shadow-[0_0_10px_#A4165A] mb-9"
            rows={4}
            required
          ></textarea>
          <button className="w-full bg-buttonColor text-white py-4  hover:cursor-pointer hover:bg-buttonColor transition duration-300">
            <p className='font-Ubuntu font-medium text-14 tracking-widest '>SEND</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm
