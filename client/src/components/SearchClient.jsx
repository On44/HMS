import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [clients, setClients] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/clients?name=${searchTerm}`);
      setClients(res.data);
    } catch {
      alert('Error searching clients');
    }
  };

  return (
    <div>
      <h2>Search Clients</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="client-list">
        {clients.map((client) => (
          <li key={client._id}>
            <Link to={`/client/${client._id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchClient;