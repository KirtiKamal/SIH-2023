import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAnimation, useInView, motion } from "framer-motion";


const articles = [
  {
    id: 1,
    content: "",
    date: "",
    link: "https://decodedevs.hashnode.dev/a-beginners-guide-to-git",
    image: "https://www.tourmyindia.com/states/jammu-kashmir/image/shopping-jk4.jpg"
  },
  {
    id: 2,
    content: "",
    date: "",
    link: "https://decodedevs.hashnode.dev/computer-network-part-2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveIsyhbFu1h3qc06VAYtJVTJWORPwXO6HZZtusLuZrSkQTzewIlIytS5hVYDocHGC0vs&usqp=CAU"
  },
  {
    id: 3,
    content: "",
    date: "",
    link: "https://decodedevs.hashnode.dev/computer-network-part-1",
    image: "https://media.easemytrip.com/media/Blog/India/Kashmir/KashmirKllc57.jpg"
  },
  {
    id: 4,
    content: "",
    date: "",
    link: "https://decodedevs.hashnode.dev/a-beginners-guide-to-yaml",
    image: "https://media.easemytrip.com/media/Blog/India/Kashmir/KashmirKllc57.jpg"
  },

];

const Carousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ref = useRef(null) ;
  const isInView = useInView(ref, {amount: 0.4, once:true }) ;
  const animateSlider = useAnimation() ;
  const animateH2 = useAnimation() ;

  useEffect(() => {
    if(isInView){
      animateSlider.start({
        x: 0,
        transition: {
          duration: 0.4
        }
      })
      animateH2.start({
        opacity: 1,
        transition: {
          duration: 0.4
        }
      })
    } 
    if (!isInView){
      animateSlider.start({
        x: '-100vw'
      })
      animateH2.start({
        opacity: 0
      })
    }
  }, [isInView]) ;

  return (
    <div id="newsroom" className="bg-gradient-to-l from-gray-700 via-gray-900 to-black sm:py-5" ref={ref}>
      <div className="max-w-screen-lg mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
        <motion.span className="text-3xl p-4 font-bold text-center tracking-tight bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text sm:text-4xl" animate={animateH2}></motion.span>
        </div>

        <motion.div className="w-[90%] mx-auto" animate={animateSlider}>
          <Slider {...settings}>
            {articles.map(article => (
              <div
                key={article.id}
                className=" bg-gradient-to-r from-slate-300 to-slate-500 p-4 rounded-lg shadow-md"
                style={{ width: "100%", maxWidth: 400 }}
              >

                <h3 className="font-bold mb-2">{article.title}</h3>
                <img src={article.image} alt={article.title} />
                <p className="text-black text-sm mb-4 font-bold mt">
                  {article.date}
                </p>

                <p className="text-gray-800 text-sm">
                  {article.content}
                </p>

                {/* <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-sm font-bold hover:underline"
                >
                  Read More
                </a> */}
                <button  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            
                  Add to Cart
                </button>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
