import { useState } from "react";

const Loader = () => {
    const [loaderIsHidden, setLoaderIsHidden] = useState("opacity-100");

    useState(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoaderIsHidden("opacity-0")
                setTimeout(() => {
                    setLoaderIsHidden("opacity-0 hidden")
                }, 500)
            }, 500)
        }
        window.addEventListener("load", handleLoad());

        return () => {
            window.removeEventListener("load", handleLoad());
        }
    }, [])

    return ( 
        <div className={`fixed w-full h-screen z-50 bg-[#181818] grid place-content-center ${loaderIsHidden} duration-300`}>
            <div className="flex flex-col space-y-4">
                <img src="assets/loader.svg" className="w-20"/>
                <span className="text-white text-xl font-semibold">Loading...</span>
            </div>
        </div>
     );
}
 
export default Loader;