# Jarurat-Care API

A RESTful API server for managing Cancer Patents data with user authentication, built with Node.js, Express, Typescript.

## Features

- User authentication with JWT
- Patents data management
- RESTful API architecture
- MongoDB database

## Tech Stack

- Node.js
- Express.js
- Typescript
- MongoDB
- Bcrypt
- JWT for authentication

## API Endpoints

The server exposes the following API endpoints:

### Authentication

- `/api/v1/auth/signIn` - login route
- `/api/v1/auth/signUp` - register route

### Users

- `/api/v1/users/user/showData` - user data by id
- `/api/vi/users/user/admin/createData` - admin can create Data
- `/api/v1/users/user/admin/readAllData` - admin can read all patents details
- `/api/v1/users/user/admin/readDataById` - admin can read particular patent's data
- `/api/v1/users/user/admin/updateDataById` - admin can update particular patent's data
- /api/v1/users/user/admin/deleteDataById - admin can update particular patent's data

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL=
PORT=
JWT_SECRET="your-jwt-secret"
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sudipkumar0200/jaruratCare-server
cd jaruratCare-server
```

2. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run start
```



## License

[MIT License](LICENSE)
