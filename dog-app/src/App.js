import "./App.css";
import BreedList from "../src/Components/BreedList";
import { useEffect, useState } from "react";
import axios from "axios";
import RandomDogs from "./Components/RandomDogs";
import Header from "./Components/Header";
const url = "https://dog.ceo/api/breeds/list/all";

const App = () => {
  const [breed, setBreed] = useState("");
  const [randomDogBreed, setRandomDogBreed] = useState();
  const [randomDog, setRandomDog] = useState();
  const [currentView, setCurrentView] = useState();

  const setView = (str) => {
    setCurrentView(str);
  };

  const fetchDogs = () => {
    axios
      .get(url)
      .then(res => (Object.entries(res.data.message)))
      .then(res => setBreed(res));
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  const fetchRandomDog = () => {
    randomDogBreed &&
      axios
        .get(`https://dog.ceo/api/breed/${randomDogBreed}/images/random`)
        .then(res => setRandomDog(res.data.message))
        .catch(err => alert("That breed unfortunately isn't supported yet :("));
  };

  return (
    <div>
      <Header setView={setView} />
      {currentView === "random dogs" ? (
        <RandomDogs
          randomDogBreed={randomDogBreed}
          randomDog={randomDog}
          fetchRandomDog={fetchRandomDog}
          setRandomDogBreed={setRandomDogBreed}
        />
      ) : 
        <BreedList breed={breed} fetchDogs={fetchDogs} />
      }
    </div>
  );
};
export default App;
