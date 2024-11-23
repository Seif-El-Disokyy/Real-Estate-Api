# Real Estate API

A simple RESTful API for managing real estate listings built with [NestJS](https://nestjs.com/) and containerized using Docker.



# APP Features

- Create a real estate listing
- Retrieve all listings
- Retrieve a single listing by ID
- Update a listing
- Delete a listing

---

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/real-estate-api.git
   cd real-estate-api
2. Install dependencies:

	Run npm install

3.Build the Docker image:

	docker build -t real-estate-api .

4.Run the application in a Docker container:

	docker run -p 3000:3000 real-estate-api



# For Api Endpoints please follow this link for swagger documentation: http://localhost:3000/api-docs
