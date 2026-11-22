import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Trust from './Component/Trust'
import Features from './Component/Features'
import How from './Component/How'
import Integration from './Component/Integration'
import States from './Component/States'
import Testimonials from './Component/Testimonials'
import Pricing from './Component/Pricing'
import Faq from './Component/Faq'
import Feedback from './Component/Feedback'
import Footer from './Component/Footer'
function App() {
  const [count, setCount] = useState(0)

useEffect(() => {

var items = document.querySelectorAll(".rv");

    function showAll() {
        for (var i = 0; i < items.length; i++) items[i].classList.add("in");
    }
    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function(entries) {
            entries.forEach(function(en) {
                if (en.isIntersecting) {
                    en.target.classList.add("in");
                    io.unobserve(en.target);
                }
            });
        }, {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px"
        });
        for (var i = 0; i < items.length; i++) io.observe(items[i]);
        setTimeout(showAll, 3000);
    } else {
        showAll();
    }

    /* ---------- back to top, retreats with the hero ---------- */
    var hero = document.querySelector(".hero");
    if ("IntersectionObserver" in window && hero) {
        var ho = new IntersectionObserver(function(en) {
            document.body.classList.toggle("away", en[0].intersectionRatio < 0.5);
        }, {
            threshold: [0, .25, .5, .75, 1]
        });
        ho.observe(hero);
    }
    document.getElementById("up").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: reduce ? "auto" : "smooth"
        });
    });



    }, []);

  return (
    <>
      <Navbar/>
       <Hero/>
       <Trust/>
       <Features/>
       <How/>
       <Integration/>
       <States/>
       <Testimonials/>
       <Pricing/>
       <Faq/>
       <Feedback/>
       <Footer/>



    </>
  )
}

export default App
