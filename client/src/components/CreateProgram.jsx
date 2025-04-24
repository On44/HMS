import { useState } from 'react';
import axios from 'axios';

function CreateProgram() {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/programs', formData);
      alert('Program created');
      setFormData({ name: '', description: '' });
    } catch (err) {
      console.error('Error creating program:', err);
      alert('Error creating program');
    }
  };

  return (
    <div>
      <h2>Create Health Program</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Program Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateProgram;