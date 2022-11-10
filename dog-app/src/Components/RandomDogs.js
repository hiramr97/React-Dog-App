import React, { useState } from "react";

const RandomDogs = ({ setRandomDogBreed, fetchRandomDog, randomDog }) => {
    const [randomBreedInput, setRandomBreedInput] = useState("")

    const handleChange = (e) => {
        setRandomBreedInput(e.target.value)
    }

    const handleSubmit = () => {
        setRandomDogBreed(randomBreedInput)
        fetchRandomDog()
    }

    return (
        <div>
            <h1>Random Dog Pics</h1>
            <div>
                <input className="Center" type="text" placeholder="Enter a Dog Breed..." onChange={handleChange}/>
                <button className="Center" onClick={handleSubmit}>Get Random Doggie!</button>
            </div>
            {randomDog && <img className="Center" style={{marginTop:"30px"}} src={randomDog}/>}
        </div>
    )
};

export default RandomDogs;
