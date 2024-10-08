import React from 'react'
import bg from '../../assets/contact.jpg'
const ContactForm:React.FC = () => {
  return (
    <div
      className="bg-cover bg-center py-16"
      style={{
        backgroundImage: `url(${bg.src})`,
         
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Have Any Questions? <span className="text-[#FEA301]">Contact Us</span>
        </h2>
        <form className="bg-transparent p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-8 mb-4">
            <input
              type="email"
              placeholder="text@domain.com"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="flex gap-3 mb-2">
              <input
                type="text"
                placeholder="John"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
                required
              />
              <input
                type="text"
                placeholder="Christopher"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
                required
              />
            </div>
          </div>
          <textarea
            placeholder="Your message..."
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            rows={4}
            required
          ></textarea>
          <button className="w-full bg-[#FEA301] text-white py-3 rounded hover:bg-orange-600 transition duration-300">
            SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
