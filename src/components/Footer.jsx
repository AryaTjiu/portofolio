import { Link } from "react-scroll";

const Footer = () => {
    return ( 
        <div className="bg-[#151515] px-5 py-5 xl:py-5 min-h-16 w-full flex flex-col lg:flex-row items-center justify-center text-white space-y-5 md:space-y-0 text-center relative z-10">
            <div className="lg:hidden flex space-x-3 flex-wrap justify-center">
                <a href="https://www.youtube.com/@codewithgi">
                    Youtube
                </a>
                <div className="h-5 w-[2px] bg-white"></div>
                <a href="https://www.instagram.com/codewith_gi/">
                    Instagram
                </a>
                <div className="h-5 w-[2px] bg-white"></div>
                <a href="https://www.codewars.com/users/codewithgi">
                    Codewars
                </a>
                <div className="h-5 w-[2px] bg-white"></div>
                <a href="https://github.com/AryaTjiu">
                    Github
                </a>
                <div className="h-5 w-[2px] bg-white"></div>
                <a href="mailto:aryatjiu.dev@gmail.com">
                    Email
                </a>
            </div>
            <span>&copy;2023 Arya Tjiutanto. All rights reserved.</span>
        </div>
     );
}
 
export default Footer;