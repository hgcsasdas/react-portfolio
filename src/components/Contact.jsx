import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-blue-200 p-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-blue-950 text-yellow-400">
            Contact
          </p>
          <p className="py-6">Submit the form below so we can get in touch</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            name="contact-form"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            data-netlify="true"
          >
            {/* Tus campos de formulario aquí */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-yellow-500 to-yellow-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
