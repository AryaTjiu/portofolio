import { useState } from "react";
import { dataTimelines } from "../data/data";

const Timelines = () => {
    const [data, setData] = useState(null)

    useState(() => {
        setData(dataTimelines);
    }, [])

    return ( 
        <div name='timelines' className='px-10 md:px-36 w-full min-h-screen bg-[#151515] text-gray-300 py-20 md:py-28 xl:py-40'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto py-4 flex flex-col justify-center w-full h-full space-y-16 md:space-y-28'>
                <div className="flex flex-col text-left xl:text-center space-x-2" data-aos="fade-up">
                    <span className="text-purple-600 mb-2">
                        Timelines
                    </span>
                    <span className="text-4xl font-bold">
                        My journey in the programming world
                    </span>
                </div>
                <div className="flex flex-col relative w-full">
                    {/* line */}
                    <div className="w-[2px] h-full bg-neutral-200 absolute xl:right-0 left-0 xl:m-auto" data-aos="fade-up"></div>
                    
                    {
                        data && data.map((e) => (
                        <div className={`mb-10 p-4 ml-10 pt-0 flex flex-col w-[90%] xl:w-[40%] bg-[#202020] space-y-5 relative
                        ${((e.id % 2 == 0)? "xl:ml-auto" 
                        :
                        "xl:mr-auto")}`} data-aos="fade-up">
                            <div className={`w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent absolute top-10  border-r-[#202020] border-l-[#202020]  ${((e.id % 2 == 0)? "-left-[15px] border-r-[15px]" 
                            : 
                            "xl:-right-[15px] xl:border-l-[15px] xl:left-full  xl:border-r-0 -left-[15px] border-r-[15px]")}`}></div>

                            <div className="flex justify-between font-bold">
                                <span>
                                    {e.title}
                                </span>
                                <span>
                                    {e.date}
                                </span>
                            </div>
                            <p>
                                {e.content}
                            </p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Timelines;