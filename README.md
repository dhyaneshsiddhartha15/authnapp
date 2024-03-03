# AuthNApp

AuthNApp is a backend application that provides authentication and authorization services. It includes controllers and models for managing user authentication and authorization. The application checks whether a user is authorized to access a particular route and verifies if the user's role is authenticated.

## Installation

To run the AuthNApp locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/AuthNApp.git`
2. Install dependencies: `npm install`
3. Set up your environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables to your `.env` file:
     ```
     PORT=3000
     DATABASE_URL=mongodb://localhost:27017/authnapp
     JWT_SECRET=your_jwt_secret_here
     ```
4. Start the server: `npm start`
5. The server should now be running on http://localhost:3000

## Usage

### Register a User

To register a new user, send a POST request to `/api/auth/register` with a JSON payload containing `email`, `password`, and `role`:

```json
{
  "email": "example@example.com",
  "password": "password123",
  "role": "user"
}
