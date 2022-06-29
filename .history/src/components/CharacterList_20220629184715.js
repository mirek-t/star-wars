import React from 'react'

function CharacterList(characters = []) {
  return (
<section>
    {characters.map((character) => (
        <CharacterListItem />
    ))}
</section>  )
}

export default CharacterList