# RBAC Backend - Intern Assignment

## Overview

This project implements a backend service with Role-Based Access Control (RBAC) to manage permissions for users based on their roles. The assignment includes creating, updating, and deleting roles, users, and permissions while ensuring secure access to resources.

## Features

- **User Management**: Add, update, and delete users.
- **Role Management**: Assign roles to users and manage role hierarchies.
- **Permission Management**: Define and manage permissions for specific resources.
- **Authentication & Authorization**: Secure endpoints using RBAC policies.
- **API Endpoints**: RESTful APIs to interact with the system.

## Prerequisites

- **Node.js** or **Python** (Specify the runtime used for this project)
- **Database**: (e.g., PostgreSQL, MongoDB)
- **Postman** or any API testing tool (for testing API endpoints)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rbac-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd rbac-backend
   ```
3. Install dependencies:
   - For Node.js:
     ```bash
     npm install
     ```
   - For Python:
     ```bash
     pip install -r requirements.txt
     ```
4. Set up the database:
   - Create a new database and configure the `.env` file with your database credentials.
   - Run migrations to set up the database schema:
     ```bash
     npm run migrate # or python manage.py migrate
     ```

## Environment Variables

Create a `.env` file in the root directory with the following configuration:

```
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
```

## Usage

1. Start the server:
   - For Node.js:
     ```bash
     npm start
     ```
   - For Python:
     ```bash
     python manage.py runserver
     ```
2. Access the API documentation at `http://localhost:3000/docs` (if Swagger or similar is configured).

## API Endpoints

| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| POST   | `/users`          | Create a new user          |
| GET    | `/users`          | Get all users              |
| POST   | `/roles`          | Create a new role          |
| GET    | `/roles`          | Get all roles              |
| POST   | `/permissions`    | Create a new permission    |
| GET    | `/permissions`    | Get all permissions        |

## Testing

Run unit tests to ensure the application works as expected:

```bash
npm test # or python manage.py test
```

## License

This project is licensed under the MIT License.
