import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const ToTopButton = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const HandleClick = () => {
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        }

        const handleVisibility = () => {
            if(window.scrollY > (window.screen.height * 20 / 100) ) {
                buttonRef.current.style.opacity = 100 + "%";
            } else {
                buttonRef.current.style.opacity = 0
            }
        }

        buttonRef.current.addEventListener("click", HandleClick)
        window.addEventListener("scroll", handleVisibility)

        return () => {
            buttonRef.current.removeEventListener("click", HandleClick)
            window.removeEventListener("scroll", handleVisibility)
        }
    }, [])

    return ( 
        <button className="px-6 py-5 rounded-full text-white fixed bottom-10 right-10 bg-pink-1 scroll-smooth opacity-0 duration-300 z-10" ref={buttonRef}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </button>
     );
}
 
export default ToTopButton;