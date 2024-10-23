# Real-Time Chat Application

## Project Overview
A full-stack real-time chat application that allows users to communicate through group chats and private messages. The app uses **WebSocket** for real-time communication and stores message history in **MongoDB**.

## Features
- **Real-time messaging**: Users can send and receive messages instantly.
- **Group chats**: Users can join or create groups to chat with multiple people.
- **Private messaging**: One-on-one chats with other users.
- **Message history**: All messages are stored in a database and can be accessed at any time.
- **User authentication**: Users need to sign up and log in to access the chat.

## Tech Stack
- **Front-end**: React (or Vue.js)
- **Back-end**: Node.js with Express and Socket.IO
- **Database**: MongoDB for storing user profiles and message history
- **Real-time Communication**: WebSocket and Socket.IO for real-time messaging

## How to Run the Project Locally

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed or use MongoDB Atlas for a cloud-hosted database

### Steps to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/real-time-chat-app.git
    cd real-time-chat-app
    ```

2. Install the server-side dependencies:
    ```bash
    cd server
    npm install
    ```

3. Install the client-side dependencies:
    ```bash
    cd ../client
    npm install
    ```

4. Set up environment variables:
   - Create a `.env` file in the `/server` folder with the following:
     ```bash
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```

5. Start the server:
    ```bash
    cd server
    npm start
    ```

6. Start the client:
    ```bash
    cd ../client
    npm start
    ```

7. Open your browser and go to `http://localhost:3000` to access the application.

## Project Structure

```bash
real-time-chat-app/
│
├── client/            # Front-end code (React or Vue.js)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/            # Back-end code (Node.js, Express, Socket.IO)
│   ├── models/        # Mongoose models for MongoDB
│   ├── routes/        # API routes
│   ├── socket/        # Socket.IO configuration
│   └── package.json
│
└── README.md          # Project documentation
