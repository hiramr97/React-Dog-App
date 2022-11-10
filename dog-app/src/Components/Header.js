import React from "react";

const Header = ({setView}) => {
    return (
        <div className="App-header">
            <h1>
                Dog App
            </h1>
            <div>
                <span style={{textDecoration:"underLine", cursor: "pointer", marginRight: "10px"}} onClick={() =>{setView("breed list")}}>Breed List </span> 
                <span style={{textDecoration:"underLine", cursor: "pointer"}} onClick={() =>{setView("random dogs")}}> Random Dogs</span>
            </div>
        </div>
    )
}
export default Header