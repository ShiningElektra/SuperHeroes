export type APICharacter = {
  id: number;
  name: string;
  powerstats: {
    intelligence: number | "null";
    strength: number | "null";
    speed: number | "null";
    durability: number | "null";
    power: number | "null";
    combat: number | "null";
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
    intelligence: number | "null";
    strength: number | "null";
    speed: number | "null";
    durability: number | "null";
    power: number | "null";
    combat: number | "null";
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
      intelligence:
        apiCharacter.powerstats.intelligence === "null"
          ? 0
          : apiCharacter.powerstats.intelligence,
      strength:
        apiCharacter.powerstats.strength === "null"
          ? 0
          : apiCharacter.powerstats.strength,
      speed:
        apiCharacter.powerstats.speed === "null"
          ? 0
          : apiCharacter.powerstats.speed,
      durability:
        apiCharacter.powerstats.durability === "null"
          ? 0
          : apiCharacter.powerstats.durability,
      power:
        apiCharacter.powerstats.power === "null"
          ? 0
          : apiCharacter.powerstats.power,
      combat:
        apiCharacter.powerstats.combat === "null"
          ? 0
          : apiCharacter.powerstats.combat,
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
