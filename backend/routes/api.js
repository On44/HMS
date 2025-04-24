const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const Program = require('../models/Program');

// 1. Create a health program
router.post('/programs', async (req, res) => {
  try {
    const program = new Program(req.body);
    await program.save();
    res.status(201).json(program);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2. Register a new client
router.post('/clients', async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. Enroll client in a program
router.post('/clients/:clientId/enroll', async (req, res) => {
  try {
    const { programId } = req.body;
    const client = await Client.findById(req.params.clientId);
    if (!client) return res.status(404).json({ error: 'Client not found' });
    if (!client.programs.includes(programId)) {
      client.programs.push(programId);
      await client.save();
    }
    res.json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 4. Search for a client
router.get('/clients', async (req, res) => {
  try {
    const { name } = req.query;
    const clients = await Client.find({
      name: { $regex: name || '', $options: 'i' },
    }).populate('programs');
    res.json(clients);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 5. View client profile
router.get('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id).populate('programs');
    if (!client) return res.status(404).json({ error: 'Client not found' });
    res.json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 6. Get all programs (for dropdowns)
router.get('/programs', async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;