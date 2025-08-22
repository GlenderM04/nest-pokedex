<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

# Pokedex Project

This project is built using [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient and scalable server-side applications.

---

## 📖 Index

- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Set Up Environment Variables](#3-set-up-environment-variables)
  - [4. Install Nest CLI Globally](#4-install-nest-cli-globally)
  - [5. Set Up the Database](#5-set-up-the-database)
  - [6. Run the Application](#6-run-the-application)
  - [7. Seed Default Pokémon Data](#7-seed-default-pokémon-data)
  - [8. Access the Application](#8-access-the-application)
- [Production Build](#production-build)
- [Additional Notes](#additional-notes)

---

## Getting Started

Follow the steps below to set up and run the project in development mode.

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
yarn install
```

### 3. Set Up Environment Variables

Copy the `.env.template` file and rename it to `.env`. You can do this using the following command:

```bash
cp .env.template .env
```

Then, update the `.env` file with your desired configuration values.

### 4. Install Nest CLI Globally

Ensure you have the Nest CLI installed globally. Run the following command in your terminal:

```bash
npm i -g @nestjs/cli
```

### 5. Set Up the Database

Start the database using Docker Compose:

```bash
docker-compose up -d
```

This will set up the database in a detached mode (`-d` flag).

### 6. Run the Application

Start the application in development mode:

```bash
yarn start:dev
```

### 7. Seed Default Pokémon Data

To populate the database with default Pokémon, execute the seed endpoint in development mode. You can do this by sending a POST request to:

```
http://localhost:<port>/api/v2/seed
```

Replace `<port>` with the actual port number specified in your configuration (default is `3000`).

### 8. Access the Application

Once the application is running and seeded, you can access it at:

```
http://localhost:<port>
```

Replace `<port>` with the actual port number specified in your configuration (default is `3000`).

---

## 🚀 Production Build

Follow these steps to create a production-ready Docker image:

1. **Create the `.env.prod` file**  
   Copy the `.env.template` and rename it to `.env.prod`:

   ```bash
   cp .env.template .env.prod
   ```

2. **Fill the values**  
   Edit `.env.prod` and set the appropriate production values for your environment.

3. **Build and run the Docker image**  
   Use the following command to build and start the production containers:

   ```bash
   docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
   ```

---

## Additional Notes

- Ensure Docker is installed and running on your machine before executing the `docker-compose` command.
- For more information about NestJS, visit the [official documentation](https://docs.nestjs.com/).
- If you encounter any issues, check the logs or refer to the troubleshooting section in the documentation.

Happy coding!