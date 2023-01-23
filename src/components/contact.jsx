import contactBg from "../assets/contact.jpg"

const Contact = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${contactBg})`, height: "100vh" }} className="bg-cover bg-no-repeat mt-16 " id="contact">
                <div className="py-8">
                    <p className="text-9xl opacity-60 text-white mx-16">CONTACT US</p>
                </div>

                <div className=" bg-white mx-auto my-16 h-1/2 pb-16 w-1/2 rounded-md pl text-center">
                    <p className="font-bold text-2xl pt-16">
                        Feel free to contact us
                    </p>
                    <div className="flex justify-evenly mt-16">

                        <p >
                            <span >666 Rudramati Pul St. Illameli hostel</span>
                            <br />
                            <span>
                                Kathmandu, Nepal
                            </span>
                            </p>
                        <p >
                        <span >+977-9999-009865</span>
                            <br />
                            <span >
                                placeholder@mail.com
                            </span>
                        </p>
                    </div>
                    <div className="flex w-full justify-center mt-12">
                        <input type="text" placeholder="enter your email" className="rounded border-2 border-black outline-none pl-2 w-2/5" />
                        <button className=" border-2 border-cyan-400 text-md p-2 px-4 ml-8 rounded-md  hover:bg-cyan-400 hover:text-black duration-500 font-medium">subscribe</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;