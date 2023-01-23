
import firstBg from "../assets/third.jpg"
import sagarmathaBg from "../assets/second.jpg"
import pokharabg from "../assets/pokharaBg.jpg"
import lumbiniBg from "../assets/lumbiniBg.jpg"
import kathmanduBg from "../assets/kathmanduBg.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"


const First = () => {

    const [myPlaces, setmyPlaces] = useState([{ "id": "1", "name": "LUMBINI", "date": "01-04" },
    { "id": "2", "name": "KATHMANDU", "date": "01-06" },
    { "id": "3", "name": "MT. EVEREST", "date": "01-08" },
    { "id": "4", "name": "POKHARA", "date": "01-15" }])

    const [bgChange, setmybgChange] = useState(firstBg)
    const [placeActive, setplaceActive] = useState(0)
    const [bgText, setbgText] = useState("नेपाल")

    const handleBackgroundChange = (a) => {

        if (a == 0) {
            setmybgChange(firstBg)
            setbgText("नेपाल")
            setplaceActive(0)
        }

        if (a == 1) {
            setmybgChange(lumbiniBg)
            setbgText("लुम्बिनी")
        }

        if (a == 2) {
            setmybgChange(kathmanduBg)
            setbgText("काठमाडौँ")
        }

        if (a == 3) {
            setmybgChange(sagarmathaBg)
            setbgText("सगरमाथा")
        }

        if (a == 4) {
            setmybgChange(pokharabg)
            setbgText("पोखरा")
        }
    }

    const handleActive = (a) => {
        if (a == 0){
            setplaceActive(0)
        }
        else{
            setplaceActive(a)
        }
    }

    return (
        <>
            <div id="main-div" className="bg-cover bg-center bg-no-repeat"
                style={{

                    height: "100vh",
                    transitionDuration: "2s",
                    backgroundImage: `url(${bgChange})`

                }}
            >

                <nav className="flex px-8 py-8 text-white w-full justify-between backdrop-blur-sm">
                    <p className="text-4xl" onClick={() => handleBackgroundChange(0)}><Link to="/">NPL.</Link></p>
                    <div className="flex">

                        <div className="flex">
                            <ul className="flex mx-8">
                                <li className="mx-8 px-2 hover:bg-cyan-600 hover:transition hover:rounded-md cursor-pointer transition ease-in duration-300"><a className="text-2xl" href="#tours">tours</a> </li>
                                <li className="mx-8 px-2 hover:bg-cyan-600 hover:transition hover:rounded-md cursor-pointer transition ease-in duration-300"><a className="text-2xl" href="#_">blogs</a> </li>
                                <li className="mx-8 px-2 hover:bg-cyan-600 hover:transition hover:rounded-md cursor-pointer transition ease-in duration-300"><Link className="text-2xl" to="/visit"> visit </Link> </li>
                            </ul>
                            <ul className="flex">


                                <li className="mx-8 text-2xl" ><Link to="/login"><i className="fa-solid fa-user hover:text-cyan-400"></i></Link></li>
                                <li className="mx-8 text-2xl"><a href="#contact"><i className="fa-solid fa-phone hover:text-cyan-400 w-" ></i></a></li>
                            </ul>
                        </div>
                    </div>


                </nav>
                <div className="text-9xl font-bold text-gray-100 opacity-30 absolute top-1/3 font-serif right-16"  >
                    <h2>{bgText}</h2></div>
            </div>

            <div className=" bottom-1/4 absolute flex  justify-evenly w-full">
                {myPlaces.map((places) => {
                    return <div key={places.id} className={` text-white cursor-pointer  p-4  w-fit ease-in-out`} onClick={() => handleBackgroundChange(places.id)} >
                        <p className={`text-3xl pb-3 opacity-80 hover:text-5xl hover:ease-in-out duration-500 ${placeActive == places.id ? "text-5xl decoration-red-500 text-red-500 opacity-100" : "no-underline"}`} onClick={() => handleActive(places.id)}>{places.name}</p>
                    </div>

                })}
            </div>
            <div className="absolute bottom-10 right-10 flex text-white">
                <ul className="flex">
                    <li className=".lists-items mx-4 text-3xl">
                        <a href="#_"><i className="fa-brands fa-facebook hover:text-cyan-400"></i></a>
                    </li>
                    <li className=".lists-items mx-4 text-3xl">
                        <a href="#_"><i className="fa-brands fa-instagram hover:text-cyan-400"></i></a>

                    </li>
                    <li className=".lists-items mx-4 text-3xl">
                        <a href="#_"><i className="fa-brands fa-tiktok hover:text-cyan-400"></i></a>
                    </li>
                    <li className=".lists-items mx-4 text-3xl">
                        <a href="#_"><i className="fa-brands fa-twitter hover:text-cyan-400"></i></a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default First;