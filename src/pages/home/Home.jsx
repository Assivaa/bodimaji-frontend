import React from "react";
import Navbar from "../../components/navbar/Navbar"
import Main from "../../components/main/Main"
import BeforeFooter from "../../components/beforeFooter/BeforeFooter"
import Discover from "../../components/discover/Discover"

const Home = () =>{
    return(
        <>
        <Navbar />
        <Main />
        <BeforeFooter />
        <Discover />
        </>
    )
}

export default Home