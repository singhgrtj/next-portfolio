import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Title from "./Title";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import InputText from "./InputText";
import TextArea from "./TextArea";
import axios from "axios";
import { motion } from "framer-motion";
import { showIn } from "../variants";

interface Props {}

const Contact: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!success) return;
    setInterval(() => {
      setSuccess(false);
    }, 4000);
  }, [success]);

  const submitForm = (e) => {
    e.preventDefault();

    setLoading(true);

    if (error) setError(false);
    if (errorMessage !== "") setErrorMessage("");

    if (name === "" || email === "" || message === "") {
      setLoading(false);
      setError(true);
      setErrorMessage("Empty fields!");
      return;
    }

    axios
      .post("https://singhgrtj.com/api/sendEmail ", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      <section
        className="px-4 py-6 w-full md:px-28 md:min-h-screen bg-secondary md:flex md:flex-row md:pt-36"
        id="contact"
      >
        {/* Contact Info */}
        <motion.div
          className="flex flex-col items-center md:w-1/2 md:items-start"
          variants={showIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          <Title title="CONTACT" />
          <div className="text-gray text-center font-regular text-sm mt-6 md:text-xl md:w-4/5 md:text-left">
            Hey! Please feel free to contact me at any time! I will try to reply
            as soon as possible!
          </div>
          <div className="text-left text-3xl self-start font-bold mt-4 md:text-5xl md:mt-6">
            +34 632 97 79 68
          </div>
          <div className="text-left text-3xl self-start font-bold mt-4 md:text-5xl md:mt-6">
            singhgrtj@gmail.com
          </div>
          <div className="flex mt-8 self-start md:hidden">
            <div className="mr-2 cursor-pointer">
              <IoLogoLinkedin
                size={50}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/singhgrtj/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="cursor-pointer">
              <IoLogoGithub
                size={50}
                onClick={() =>
                  window.open("https://github.com/singhgrtj", "_blank")
                }
              />
            </div>
          </div>
          <div className="hidden md:flex md:ml-2 md:mt-8">
            <div className="mr-2">
              <IoLogoLinkedin
                size={60}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/singhgrtj/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="cursor-pointer">
              <IoLogoGithub
                size={60}
                onClick={() =>
                  window.open("https://github.com/singhgrtj", "_blank")
                }
              />
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="flex flex-col items-center mt-8 w-full md:mt-0 md:w-1/2"
          variants={showIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          <Title title="LET’S GRAB A COFFE AND JUMP ON CONVERSATION WITH ME." />
          <div className="flex flex-col mt-4 w-full">
            <InputText
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="md:mt-2 w-full">
            <TextArea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className="mt-2 self-start">
            <button
              className="w-36 h-10 bg-primary text-base font-semibold rounded-lg md:w-44 md:h-14 md:text-lg hover:border-2 hover:border-primary hover:bg-secondary"
              onClick={submitForm}
              disabled={loading}
            >
              Contact me
            </button>
            {error ? (
              <div className="text-red text-center font-regular text-sm mt-6 md:text-xl md:w-4/5 md:text-left">
                {errorMessage}
              </div>
            ) : null}
            {success ? (
              <div className="text-green text-center font-regular text-sm mt-6 md:text-xl md:w-4/5 md:text-left">
                Success! Your message has been sent!
              </div>
            ) : null}
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
