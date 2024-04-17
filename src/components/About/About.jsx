import Typed from 'typed.js';
import React from 'react';
import { useEffect, useRef } from 'react';




export default function About() {
  const element = useRef(null)


  useEffect (() => {
    const Typed2 = new Typed (element.current, {
      strings: [" To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellenttime management and problem-solving skills. Hardworking and passionate job seeker with strong organizationalskills eager to secure entry-level Managerial position. Ready to help team achieve company goals. Detail-orientedteam player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degreeof accuracy."],
      typeSpeed: 20,
      showCursor: true,
      cursorChar: "!"
    });

    //Destroying
    return () => {
      Typed2.destroy();
    };
  }, [] )

  return (
    <>
      <div className="about flex flex-col justify-items-center text-white  m-20 px-28">
        <h1 className="text-underline text-white  text-center text-2xl m-5">About Myself</h1>
        {/* Element to display typing strings */}
        <span className='text-lg' ref={element}></span>
    </div>
    </>
  )
}
