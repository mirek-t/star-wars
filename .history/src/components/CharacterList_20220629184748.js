import React from 'react'

function CharacterList(characters = []) {
  return (
<section>
    {characters.map((character) => (
        <CharacterListItem 
        key={character.id}
        character={character}
        />
    ))}
</section>  )
}

export default CharacterList