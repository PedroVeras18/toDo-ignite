import React from "react";
import './Home.css'

import Header from "../../components/Header/Header";
import Tasks from "../../components/Tasks/Tasks";

export default function Home(){
    return(
        <div className="Home">
            <Header />
            <Tasks />
        </div>
    )
}