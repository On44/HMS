import { useState, useEffect } from 'react';
import axios from 'axios';

function EnrollClient() {
  const [clients, setClients] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [formData, setFormData] = useState({ clientId: '', programId: '' });

  useEffect(() => {
    const fetchData = async () => {
      const clientsRes = await axios.get('/api/clients');
      const programsRes = await axios.get('/api/programs');
      setClients(clientsRes.data);
      setPrograms(programsRes.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/clients/${formData.clientId}/enroll`, {
        programId: formData.programId,
      });
      alert('Client enrolled');
      setFormData({ clientId: '', programId: '' });
    } catch {
      alert('Error enrolling client');
    }
  };

  return (
    <div>
      <h2>Enroll Client in Program</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={formData.clientId}
          onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
          required
        >
          <option value="">Select Client</option>
          {clients.map((client) => (
            <option key={client._id} value={client._id}>
              {client.name}
            </option>
          ))}
        </select>
        <select
          value={formData.programId}
          onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
          required
        >
          <option value="">Select Program</option>
          {programs.map((program) => (
            <option key={program._id} value={program._id}>
              {program.name}
            </option>
          ))}
        </select>
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
}

export default EnrollClient;