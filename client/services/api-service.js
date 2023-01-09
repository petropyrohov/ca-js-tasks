const serverAddress = 'http://localhost:3000';

const getArts = async () => {
  const response = await fetch(`${serverAddress}/art`);
  const arts = await response.json();

  return arts;
}

const deleteArt = async (id) => {
  const response = await fetch(`${serverAddress}/art/${id}`, {
    method: 'DELETE'
  });
  const arts = await response.json();

  return arts;
}

const createArt = async (artProps) => {
  const response = await fetch(`${serverAddress}/art`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(artProps)
  });
  const arts = await response.json();

  return arts;
}

const updateArt = async (id, carProps) => {
  const response = await fetch(`${serverAddress}/cars/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(artProps)
  });
  const arts = await response.json();

  return arts;
}

const ApiService = {
  getArts,
  deleteArt,
  createArt,
  updateArt,
};

export default ApiService;
