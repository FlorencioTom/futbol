import { useEffect, useState } from 'react';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [countries, setCountries] = useState([]);
  const token = 'c4aciejHRvJiZFtxMmtvNQf0W6rivwHMlbWEmlggdJX2SU6EewpfDIVy2C4G';

  useEffect(() => {
    getTeam();
    getCountries();
  }, []); // El array vacío evita el bucle infinito

  const getTeam = async () => {
    try {
      const response = await fetch(`v3/football/teams?api_token=${token}`);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const data = await response.json();
      setTeams(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  const getCountries= async () => {
    try {
      const response = await fetch(`/v3/core/countries?api_token=${token}`);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const data = await response.json();
      setCountries(data.data);
      console.log(data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  return (
    <div>
      <h1>Equipos de Fútbol</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
      {/* <ul>
        {countries.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;