import React from "react";
import './style.css';
import MissionCard from "../MissionCrard";

const MissionSection=()=>{
    return(
        <div className="page mission-page flex column">
        <div className="missions-header flex center">
            <h1>How we do it</h1>
        </div>
        <div className="missions flex center">
            <div className="missions-container grid-container">
                <MissionCard className="grid-item" />
                <MissionCard className="grid-item"/>
                <MissionCard className="grid-item"/>
                <MissionCard className="grid-item"/>
                <MissionCard className="grid-item"/>
                <MissionCard className="grid-item"/>
            </div>
        </div>
    </div>
    );
}
export default MissionSection;