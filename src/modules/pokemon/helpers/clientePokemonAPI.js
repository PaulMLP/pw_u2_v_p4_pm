const getPokemons = async () => {
  //Retornar el array de pokemons
  const objArray = await getPokemonNames(getNumericArray());
  console.log(objArray);
  return objArray;
};

function getRandom(min, max) {
  max++;
  return Math.floor(Math.random() * (max - min) + min);
}

const getNumericArray = () => {
  const array = [];
  for (let i = 0; i < 4; i++) {
    array.push(getRandom(1, 600));
  }
  return array;
};

const consumeAPI = async (id) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (r) => r.json()
  );
  return data;
};

const getPokemonNames = async ([id1, id2, id3, id4] = []) => {
  const data1 = await consumeAPI(id1);
  const data2 = await consumeAPI(id2);
  const data3 = await consumeAPI(id3);
  const data4 = await consumeAPI(id4);

  const obj1 = {
    name: data1.name.replace(/^\w/, (c) => c.toUpperCase()),
    id: data1.id,
  };
  const obj2 = {
    name: data2.name.replace(/^\w/, (c) => c.toUpperCase()),
    id: data2.id,
  };
  const obj3 = {
    name: data3.name.replace(/^\w/, (c) => c.toUpperCase()),
    id: data3.id,
  };
  const obj4 = {
    name: data4.name.replace(/^\w/, (c) => c.toUpperCase()),
    id: data4.id,
  };

  return [obj1, obj2, obj3, obj4];
};

//Metodo fachada para consumir desde el componente
const getPokemonFacade = async () => {
  return await getPokemons();
};

export default getPokemonFacade;
