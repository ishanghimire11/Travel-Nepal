import footerBg from "../assets/footerbg.png"


const Footer = () => {
    return (
        <>
            <div className=" p-8 bg-white">
                <div className=" flex justify-evenly">
                    <div>
                       <p className="font-bold text-2xl mb-6">Destinations</p> 
                       <p className="my-2">Kathmandu</p>
                       <p className="my-2">Pokhara</p>
                       <p className="my-2">Lumbini</p>
                       <p className="my-2">Solukhumbu</p>
                        
                    </div>
                    <div>
                        <p className="font-bold text-2xl mb-6">Company</p>
                        <p className="my-2">About us</p>
                        <p className="my-2">Contacts</p>
                        <p className="my-2">Travel Blogs</p>
                        <p className="my-2">Privacy Policy</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl mb-6">Social Media</p>
                        <p className="my-2">Twitter</p>
                        <p className="my-2">Instagram</p>
                        <p className="my-2">Facebook</p>
                        <p className="my-2">Pintrest</p>
                    </div>
                    <div>
                        <p className="py-8 px-3 bg-cyan-500 text-white text-4xl font-bold roun">NPL.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;