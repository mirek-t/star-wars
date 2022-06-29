import React from "react";

function CharacterDetail({
  character: {
    name,
    birthYear,
    eyeColor,
    gender,
    hairColor,
    height,
    mass,
    skinColor,
  } = {},
}) {
  return <div>CharacterDetail</div>;
}

export default CharacterDetail;
