# Ventra E-commerce API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Most endpoints require authentication. Include the access token in the request headers:
```
Authorization: Bearer <access_token>
```

## Table of Contents
- [Authentication](#authentication)
- [Users](#users)
  - [Register User](#register-user)
  - [Login User](#login-user)
  - [Logout User](#logout-user)
  - [Get Current User](#get-current-user)
- [Products](#products)
  - [Get All Products](#get-all-products)
  - [Upload Products (Admin)](#upload-products-admin)

## Users

### Register User
Register a new user account.

**Endpoint**
```
POST /users/signup
```

**Request Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Success Response (201 Created)**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

**Error Responses**
- 400: Bad Request (missing fields, email already exists)
- 500: Internal Server Error

### Login User
Authenticate a user and get access & refresh tokens.

**Endpoint**
```
POST /users/login
```

**Request Body**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Success Response (200 OK)**
```json
{
  "isLogIn": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Cookies Set**
- `accessToken`: JWT access token
- `refreshToken`: JWT refresh token

**Error Responses**
- 400: Bad Request (invalid credentials)
- 500: Internal Server Error

### Logout User
Log out the currently authenticated user.

**Endpoint**
```
POST /users/log-out
```

**Headers**
```
Authorization: Bearer <access_token>
```

**Success Response (200 OK)**
```json
{
  "message": "User Logout Successfully !!"
}
```

**Error Responses**
- 401: Unauthorized (missing or invalid token)
- 500: Internal Server Error

### Get Current User
Get details of the currently authenticated user.

**Endpoint**
```
GET /users/current-user
```

**Headers**
```
Authorization: Bearer <access_token>
```

**Success Response (200 OK)**
```json
{
  "name": "John Doe"
}
```

**Error Responses**
- 401: Unauthorized (missing or invalid token)
- 500: Internal Server Error

## Products

### Get All Products
Get a list of all available products.

**Endpoint**
```
GET /product
```

**Success Response (200 OK)**
```json
{
  "success": true,
  "message": "Product List",
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Product 1",
      "price": 99.99,
      "description": "Product description",
      "image": "image-url.jpg",
      "category": "Electronics",
      "inStock": true,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

### Upload Products (Admin)
Upload multiple products at once (Admin only).

**Endpoint**
```
POST /upload
```

**Headers**
```
Authorization: Bearer <admin_access_token>
Content-Type: application/json
```

**Request Body**
```json
[
  {
    "name": "Product 1",
    "price": 99.99,
    "description": "Product description",
    "image": "image-url.jpg",
    "category": "Electronics",
    "inStock": true
  },
  ...
]
```

**Success Response (200 OK)**
```json
{
  "success": true,
  "message": "Product uploaded successfully",
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Product 1",
      "price": 99.99,
      "description": "Product description",
      "image": "image-url.jpg",
      "category": "Electronics",
      "inStock": true,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

**Error Responses**
- 401: Unauthorized (missing or invalid admin token)
- 500: Internal Server Error

## Error Handling
All error responses follow this format:
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error message (in development)"
}
```

## Rate Limiting
API is rate limited to prevent abuse. The current limits are:
- 100 requests per 15 minutes per IP address

## Versioning
API Version: `v1`

## Support
For support, please contact support@ventra.com
