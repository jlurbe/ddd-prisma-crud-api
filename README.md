# CRUD API using DDD and Prisma ORM

This project is a Node.js application designed as a learning and experimentation platform for implementing Domain-Driven Design (DDD) principles, utilizing modern tools and best practices. It serves as a practical testbed for applying concepts like DDD, robust testing, and scalable application structure. The key highlights of this project are as follows:

## Key Features

### TypeScript

- The project is fully written in TypeScript, enabling strong typing, better developer experience, and reduced runtime errors.

### Domain-Driven Design (DDD)

- The application is structured to adhere to DDD principles, with clearly defined layers (e.g., domain, application, and infrastructure) and the use of value objects, entities, and repositories.
- Each domain is encapsulated within the Contexts directory, promoting modularity and maintainability.

### Value Object Pattern

- Value objects are implemented to represent and enforce domain-specific rules for key business concepts. This pattern ensures:
  - Immutability of important data (e.g., emails, IDs).
  - Validation of inputs at the domain level.
  - Improved encapsulation and maintainability of the domain logic.

### Testing with Jest

- Jest is used as the testing framework, providing a comprehensive test suite for both unit and integration tests.
- Mocks and test utilities are included to isolate components and simulate real-world scenarios.

### Prisma ORM

- The project uses Prisma ORM to handle database operations, leveraging its schema-driven approach for managing data models and queries.
- Database configuration and migrations are located in the prisma directory.

### API Development

- The src/api folder houses the application’s API-related files, including routes, controllers, middleware, and configuration for dependency injection (DI).
- Middleware like an errorHandler ensures clean and centralized error management.

### Configuration & Automation

- Git hooks (via Husky) and linters (via ESLint) are configured to maintain code quality and enforce best practices.
- A .github directory is included to manage GitHub Actions workflows for CI/CD and other automation.

### Project Structure

- The structure is organized to separate concerns cleanly, with distinct folders for API logic, domain logic, and testing.
- Modular components make the project extensible and easy to maintain.

## Purpose

This project aims to explore and demonstrate:

- The implementation of DDD concepts in a real-world context.
- Integration of modern development tools like Jest, Prisma ORM, TypeScript, and Husky.
- Writing scalable, maintainable, and testable code.

By working on this project, you can dive deep into software design patterns, effective testing strategies, and the application of clean architecture principles. It provides a strong foundation for building scalable Node.js applications.

## Prerequisites

- Node.js (v22+ recommended)
- npm

## Project Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-ts-ddd
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file at the root of your project.
   Add the necessary environment variables. This is an example:
   ```bash
   NODE_ENV=development
   APP_DEBUG=true
   PORT=3000
   # DATABASE URL FOR PRISMA
   DATABASE_URL="mysql://admin:admin@localhost:3306/test_db"
   ```
4. Run the development server:
   ```bash
   npm run start:dev
   ```
5. Build the project:
   ```bash
   npm run build
   ```

## Linting and Formatting

1. Lint the code:
   ```bash
   npm run lint
   ```
2. Automatically fix linting issues:
   ```bash
   npm run lint:fix
   ```
3. Format the code with Prettier:
   ```bash
   npm run format
   ```

## Pre-commit Hooks and Git Standards

The project uses Husky for pre-commit hooks to enforce standards before code is committed. Linting and testing are automatically run before each commit.

To enforce **[Conventional Commits](https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3)**, the project uses Commitlint.

## CI/CD with GitHub Actions

A **GitHub Actions** workflow is configured to run linting and tests automatically on each pull request to the main branch. The workflow file is located at `.github/workflows/LintAndTestWorkflow.yml`.

## Project Structure

```
.
├── .github/                # GitHub-specific configurations (e.g., workflows, issue templates)
├── .husky/                 # Configuration for Git hooks (e.g., linting, testing before commits)
├── prisma                  # Prisma configuration and client
│   ├── client.ts           # Prisma client setup
│   └── schema.prisma       # Database schema
├── src                     # Main application source code
│   ├── api                 # API-related files (controllers, routes, etc.)
│   │   ├── config          # Application configuration (DI container, config)
│   │   ├── controllers     # Request handlers (e.g., user controller)
│   │   ├── middlewares     # Middleware functions (e.g., error handling)
│   │   └── routes.ts       # API routes
│   ├── Contexts            # Business logic and domain models (e.g., user, shared domain)
│   │   ├── shared          # Shared domain logic (e.g., errors, interfaces)
│   │   └── user            # User-specific logic (e.g., application services, validation)
├── tests                   # Unit and integration tests
│   ├── Contexts            # Tests related to business logic and domain models
│   │   └── user            # Tests for user-related functionality
│   ├── __mocks__           # Mock data for tests
│   │   └── prisma          # Mocks for Prisma database queries
│   └── client.ts           # General test setup for Prisma client
├── eslint.config.mjs       # ESLint configuration
├── jest.config.mjs         # Jest configuration
├── nodemon.json            # Nodemon configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript configuration
```

## MySQL test database

From etc/mysql-db folder

1. For launching the database:
   ```bash
   docker-compose up
   ```
2. For stopping the database:
   ```bash
   docker-compose down
   ```
3. For stopping and remove all data:
   ```bash
   docker-compose down --volumes --remove-orphans
   ```

## Contributing

To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'feat: add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## TODOs

- [x] create a logger with pino, winston...
- [x] insert a validator for the model
- [x] refactor files out of Contexts to ddd and remove Contexts
- [x] Dockerized db in /etc
- [ ] Dockerize rest of the application
- [x] Hash passwords
- [x] Use object/value for types
- [ ] Include more testing
- [x] Remove **[index files](https://josselinbuils.dev/blog/stop-using-index-files)**.
- [x] Create paths aliases in tsconfig
- [x] Modify README.md to include all details from the project
