import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import './Home.css';

export default function Home() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Graphic Designer.", "Web developer.", "Video Editor."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="main">
      <div className="section">
        <div className="left">
          <div className="text-white">
            <h1>
              Hi, my name is <span class="spn">Sadikud Zaman</span>{" "}
            </h1>
            <div>and I am a passionate</div>
            {/* Element to display typing strings */}
            <span ref={el}></span>
          </div>
        </div>
        <div className="right">
          <img id="img1" src="./Img/image.png" alt="image"/>
        </div>
      </div>
    </div>
  );
}
