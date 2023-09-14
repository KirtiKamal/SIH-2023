import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {

  const ref = useRef(null) ;
  const isInView = useInView(ref, {amount: 0.4, once: true}) ;
  const animateIconsAndRights = useAnimation() ;
  const animateH2 = useAnimation() ;

  useEffect(() => {
    if(isInView){
      animateIconsAndRights.start({
        x: 0, 
        transition: {
          duration: 0.6
        }
      })
      animateH2.start({
        opacity: 1,
        transition: {
          duration: 0.4
        }
      })
    }
    if(!isInView){
      animateIconsAndRights.start({
        x: '-100vw'
      })
      animateH2.start({
        opacity: 0
      })
    }
  }, [isInView]) ;

  return (

    <footer id="footer" className="bg-gradient-to-l from-gray-700 via-gray-900 to-black text-white py-12 pr-4 pl-4" ref={ref}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div className="text-center md:text-left mb-4 md:mb-0" animate={animateH2}>
          <span className="text-3xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">J&K Pitara</span>

          <p className="mt-2">Witness the Homeland Artistry of J&K</p>
        </motion.div>
        <motion.div className="flex justify-center space-x-4" animate={animateIconsAndRights}>
          {/* <a href="#" className="hover:text-blue-500">
            <FaFacebook className="text-2xl" />
          </a> */}
          <a href="https://twitter.com/DecodeDevs" className="hover:text-blue-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/decodedevs/" className="hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/decodedevs/" className="hover:text-blue-800">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTelegram className="text-2xl" />
          </a>
          <a href="https://chat.whatsapp.com/HPLkxZvlPPqEkwoN6LMGmH" className="hover:text-green-500">
            <FaWhatsapp className="text-2xl" />
          </a>
          <a href="https://discord.gg/XDm67SsE" className="hover:text-purple-600">
            <FaDiscord className="text-2xl" />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaEnvelope className="text-2xl" />
          </a>
        </motion.div>
      </div>
      <motion.div className="text-center mt-8" animate={animateIconsAndRights}>
        <p>&copy; {new Date().getFullYear()} J&K Pitara. All rights reserved.</p>
      </motion.div>
    </footer>
  
  );
};

export default Footer;
