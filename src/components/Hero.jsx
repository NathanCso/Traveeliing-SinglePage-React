import React from "react";

const Hero = () => {
    return(
        <div className=" w-full h-screen">
            <img className=" top-0 left-0 w-full h-screen object-cover" src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div className=" bg-black/30 absolute top-0 left-0 w-full h-screen"/>
        <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-white">
            <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl0 text-blue-200">Profitez de nos meilleures offres voyages</h1>
                <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl text-white">Avec notre agence vous allez pouvoir planifier vos vacances sans vous souciez de tout organiser </p>
                <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl text-white">Notre équipe va se charger au mieux de vous faire passez des vacances de rêve</p>
                <button className=" bg-blue-600 text-white">Réservation</button>
            </div>
        </div>
        </div>
    )
}

// https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=600

export default Hero;