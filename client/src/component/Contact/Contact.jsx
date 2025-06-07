import React, { useRef, useState } from "react";
import Navbar from "../../pages/Navbar";
import Footer from "../../pages/Footer";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef(); 
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_78ae49u",        // Your EmailJS service ID
        "template_duq5oue",       // Your EmailJS template ID
        form.current,             // Correct use of form ref
        "I89Ie1HHYVBtU8JW9"       // Your EmailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); //  Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <header className="bg-[#FBEBB5]">
        <div className="container mx-auto px-4 py-10 md:py-12 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl animate-float">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-lg text-gray-600">
            Have questions? We're here to help! Contact us anytime.
          </p>
        </div>
      </header>

      {/* Contact Form */}
      <main className="flex-grow bg-[#FAF4F4] py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-md sm:p-8">
            <form
              ref={form} // ✅ Attached form ref
              onSubmit={sendEmail}
              className="mt-4 flex flex-col space-y-4"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-md bg-transparent text-white border border-gray-600 focus:outline-none focus:border-amber-500"
              />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-md  text-white border border-gray-600 focus:outline-none focus:border-amber-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 rounded-md  text-white border border-gray-600 focus:outline-none focus:border-amber-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="w-full p-3 rounded-md text-white border border-gray-600 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r bg-amber-600  py-3  font-semibold rounded-md hover:opacity-60 transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Alternative Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium text-gray-900">
              Prefer other ways to reach us?
            </h3>
            <p className="mt-2 text-gray-600">
              Email us at{" "}
              <a
                href="mailto:binodsyangtan9761@gmail.com"
                className="text-indigo-600 hover:text-indigo-500"
              >
                binodsyangtan9761@gmail.com
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:9761730924"
                className="text-indigo-600 hover:text-indigo-500"
              >
                9761730924
              </a>
            </p>
          </div>
        </div>
      </main>

      <ToastContainer /> {/* ✅ Toasts will appear here */}
      <Footer />
    </div>
  );
}

export default Contact;
