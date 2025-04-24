# Health Information System

A basic health information system built using the MERN stack (MongoDB, Express, React, Node.js). This application allows a doctor to manage clients and health programs/services with the following features:

1. Create a health program (e.g., TB, Malaria, HIV).
2. Register a new client in the system.
3. Enroll a client in one or more programs.
4. Search for a client from a list of registered clients.
5. View a client's profile, including enrolled programs.
6. Expose the client profile via an API.

## Project Structure
- `client/`: Vite + React frontend
- `server/`: Node.js/Express backend with MongoDB

## Setup Instructions
### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally)

### Backend Setup
1. Navigate to the `server/` folder:
   ```bash
   cd server