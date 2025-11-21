# Swagger API Documentation

This project now includes comprehensive Swagger/OpenAPI documentation for all API endpoints.

## Accessing the Documentation

Once the application is running, you can access the interactive Swagger UI at:

```
http://localhost:3000/api
```

## Features

The Swagger documentation includes:

- **Interactive API Testing**: Test all endpoints directly from the browser
- **Request/Response Examples**: See example data for all endpoints
- **Schema Definitions**: Detailed data models for all entities
- **Authentication**: JWT Bearer token authentication support
- **Organized by Tags**: Endpoints grouped by functionality (Auth, Users, Properties, People)

## API Endpoints

### Authentication (`/auth`)
- `POST /auth/login` - User login (returns JWT token)

### Users (`/users`)
- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user by ID
- `DELETE /users/:id` - Delete user by ID
- `GET /users/profile` - Get authenticated user profile (requires JWT)

### Properties (`/properties`)
- `POST /properties` - Create a new property
- `GET /properties` - Get all properties

### People (`/people`)
- `POST /people` - Create a new person
- `GET /people` - Get all people
- `GET /people/:id` - Get person by ID
- `PUT /people/:id` - Update person by ID
- `DELETE /people/:id` - Delete person by ID

## How to Use JWT Authentication

1. First, login using the `/auth/login` endpoint to get a JWT token
2. Click the "Authorize" button at the top of the Swagger UI
3. Enter your token in the format: `Bearer <your-token>`
4. Now you can access protected endpoints like `/users/profile`

## Data Models

### User
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Person
```json
{
  "name": "Jane Smith",
  "address": "456 Oak Avenue, Los Angeles, CA 90001",
  "panCardImage": "https://example.com/images/pancard.jpg",
  "panNumber": "ABCDE1234F"
}
```

### Property
```json
{
  "name": "Sunrise Villa",
  "address": "123 Main Street, New York, NY 10001",
  "ownedBy": "507f1f77bcf86cd799439011",
  "utilityInfo": {
    "Electricity Bill No": "ELEC-12345",
    "Water Bill No": "WATER-67890"
  }
}
```

## Installation

The Swagger dependencies are already included. If you need to reinstall:

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

## Development

The Swagger configuration is in `src/main.ts`. You can customize:
- API title and description
- Version
- Tags
- Authentication schemes
- Contact information
- License

## Export OpenAPI Spec

To export the OpenAPI specification as JSON:

1. Start your application
2. Navigate to `http://localhost:3000/api-json`
3. Save the JSON file

This can be used with other tools like Postman, Insomnia, or API documentation generators.
