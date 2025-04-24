import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ClientProfile() {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const res = await axios.get(`/api/clients/${id}`);
        setClient(res.data);
      } catch {
        alert('Error fetching client');
      }
    };
    fetchClient();
  }, [id]);

  if (!client) return <div>Loading...</div>;

  return (
    <div className="client-profile">
      <h2>Client Profile</h2>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Date of Birth:</strong> {new Date(client.dateOfBirth).toLocaleDateString()}</p>
      <p><strong>Gender:</strong> {client.gender}</p>
      <p><strong>Contact:</strong> {client.contact}</p>
      <h3>Enrolled Programs</h3>
      <ul>
        {client.programs.map((program) => (
          <li key={program._id}>{program.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClientProfile;