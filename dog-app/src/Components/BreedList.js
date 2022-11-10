import React from "react";

const BreedList = ({ breed, fetchDogs }) => {
  return (
    <div>
      <h1>Breeds</h1>
      <button style={{margin: "0 auto"}}className="Center" onClick={fetchDogs}>Get Breed</button>
      <ul>
        {breed &&
          breed.map((breeds) => {
            return(
            <ul>
              <h2>{breeds[0]}</h2>
              {breeds[1].length > 0 &&
                breeds[1].map((doggie) => {
                  return <h3>⚫ {doggie}</h3>;
                })}
            </ul>);
          })}
      </ul>
    </div>
  );
};
export default BreedList;
