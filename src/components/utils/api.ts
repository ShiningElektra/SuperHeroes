export type APICharacter = {
  id: number;
  name: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  biography: {
    publisher: string;
  };
  image: {
    url: string;
  };
};

export type Character = {
  id: number;
  image: {
    url: string;
  };
  name: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  biography: {
    publisher: string;
  };
};

function convertToCharacter(apiCharacter: APICharacter): Character {
  return {
    image: { url: apiCharacter.image.url },
    id: apiCharacter.id,
    name: apiCharacter.name,
    powerstats: {
      intelligence: apiCharacter.powerstats.power,
      strength: apiCharacter.powerstats.strength,
      speed: apiCharacter.powerstats.speed,
      durability: apiCharacter.powerstats.durability,
      power: apiCharacter.powerstats.power,
      combat: apiCharacter.powerstats.combat,
    },
    biography: {
      publisher: apiCharacter.biography.publisher,
    },
  };
}

export async function getCharacter(id: number) {
  const response = await fetch(
    `https://www.superheroapi.com/api.php/10224252723775119/${id}`
  );
  const result = (await response.json()) as APICharacter;
  const character = convertToCharacter(result);
  return character;
}

export async function getCharacterCount() {
  const response = await fetch(
    `https://www.superheroapi.com/api.php/10224252723775119`
  );
  const result = (await response.json()) as APICharacters;
}
