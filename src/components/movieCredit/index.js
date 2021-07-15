import React from "react";

const MovieCredit =  ({ credit }) => {
  return (
    <>
      <p>Credit Name: {credit.id} </p>
      <p>{credit.cast} </p>
    </>
  );
};
export default MovieCredit