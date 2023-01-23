import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import carouselArr from "./carousel";



const Second = () => {

    const [myArray, setmyArray] = useState(carouselArr)
    const [myabout, setmyabout] = useState(0)
    const [filterActive, setfilterActive] = useState(0)
    

    const handleAboutChange = (a) => {

        if (a == carouselArr[a - 1].id) {
            setmyabout(a)

        }

    }

    function handleFilter(a,b) {
        
        if (b == 0){
            setfilterActive(0)
        }
        else {
            setfilterActive(b)
        }

        if (a == "All") {
            setmyArray(carouselArr)

        }
        
         
        else{
                const filteredPlaces = carouselArr.filter(places => places.location == a)
                console.log(filteredPlaces) 
                setmyArray(filteredPlaces)
            }
        
        }
    

    const handleAboutHidden = (a) => {
        if (a == carouselArr[a-1].id) {
            setmyabout(0)

        }

    }



    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - (carousel.current.offsetWidth)+carousel.current.offsetWidth/3)
    }, [myArray])



    return (
        <>
            <div style={{ height: "110vh" }} id="tours">

                <div className="flex items-center justify-evenly p-8 ml-8 my-10 h-fit">
                    <h1 className="text-9xl opacity-40">TOURS</h1> <span className="w-1/4 opacity-40 ml-16 text-md"> The main attraction of Nepal are varied landscapes that extend across the Himalays. It is famous for its mountains, lush green, lakes, culture and relegion. </span>
                    <div className="border-b-2 pb-4 border-b-black text-xl ">
                        <button className={`hover:text-cyan-500 mx-4 duration-300 ${filterActive == 1 ? 'text-cyan-500': 'text-black' }`} onClick={() => handleFilter("Kathmandu Valley",1)}>Kathmandu Valley</button><button className={`hover:text-cyan-500 mx-4 duration-300 ${filterActive == 2 ? 'text-cyan-500': 'text-black' }`} onClick={() => handleFilter("Pokhara",2)}>Pokhara</button><button className={`hover:text-cyan-500 mx-4 duration-300 ${filterActive == 3 ? 'text-cyan-500': 'text-black' }`} onClick={() => handleFilter("Others",3)}>Others</button><button className={`hover:text-cyan-500 mx-4 duration-300 ${filterActive == 0 ? 'text-cyan-500': 'text-black' }`} onClick={() => handleFilter("All",0)}>All</button>
                    </div>
                </div>

                <motion.div className="p-8  overflow-hidden" ref={carousel}  >
                    <motion.div className="flex" drag="x" dragConstraints={{ right: 0, left: -width }} >
                        {myArray.map((slider => {
                            return <div key={slider.id} style={{ minWidth: "20%" }} className="flex cursor-move mx-8 relative" >
                                <img src={slider.image} alt="sliderp" className="rounded-xl hover:scale-110 ease-in-out duration-500 pointer-events-none" />
                                <span className="absolute text-white bottom-12 text-2xl left-3 uppercase font-bold">{slider.title}</span>
                                <div className={`absolute rounded-xl text-center bottom-0 z-10 bg-white border-t-8 border-b-8 border-b-cyan-500 border-t-cyan-500 px-4 min-h-full text-lg cursor-default ${myabout == slider.id ? 'block' : 'hidden'}`} style={{ transitionDelay: "10s" }} >
                                    <p className="pt-4"> {slider.about} <br /> <i className="fa-solid fa-circle-xmark absolute -translate-x-2 bottom-6 cursor-pointer hover:text-red-500" onClick={() => handleAboutHidden(slider.id)} ></i> </p>
                                </div>
                                <button className="absolute text-white bottom-2 p-1 ml-5 hover:underline " onClick={() => handleAboutChange(slider.id)}>Learn More</button>
                            </div>
                        }))}
                    </motion.div>
                </motion.div>

            </div>
        </>
    );
}

export default Second;
