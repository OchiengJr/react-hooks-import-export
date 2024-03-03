import React from "react";
import logNumberOfParks from "./parks/howManyParks";

function ColoradoStateParks() {
  // Log the number of parks
  logNumberOfParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;