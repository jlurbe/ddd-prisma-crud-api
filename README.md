# Template for Node.js Project

This is a template for Node.js projects. The template includes configuration for TypeScript, ESLint, Prettier, testing with Jest, and CI/CD with GitHub Actions.

## Prerequisites

- Node.js (v20+ recommended)
- npm

## Project Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-ts-ddd
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file at the root of your project.
   Add the necessary environment variables
4. Run the development server:
   ```bash
   npm run start:dev
5. Build the project:
   ```bash
   npm run build

## Linting and Formatting
1. Lint the code:
   ```bash
   npm run lint
2. Automatically fix linting issues:
   ```bash
   npm run lint:fix
3. Format the code with Prettier:
   ```bash
   npm run format

## Pre-commit Hooks and Git Standards
The project uses Husky for pre-commit hooks to enforce standards before code is committed. Linting and testing are automatically run before each commit.

To enforce **[Conventional Commits](https://gist.github.com/Zekfad/f51cb06ac76e2457f11c80ed705c95a3)**, the project uses Commitlint. 

## CI/CD with GitHub Actions
A **GitHub Actions** workflow is configured to run linting and tests automatically on each pull request to the main branch. The workflow file is located at `.github/workflows/LintAndTestWorkflow.yml`.

## Project Structure
   ```
   ├── .github/
   ├── .husky/
   ├── src                    # Source code folder
   │   ├── config.ts          # Configuration management
   │   ├── index.ts           # Entry point
   │   └── ...                # Other modules
   ├── tests/                 # Unit and integration tests
   ├── .commitlintrc.json     # Commitlint configuration
   ├── .env.sample            # Example of environment variables file
   ├── .gitignore             # Git ignore rules
   ├── .prettierignore        # Prettier ignore rules
   ├── .prettierrc            # Prettier configuration
   ├── eslint.config.mjs      # ESLint configuration
   ├── jest.config.js         # Jest configuration
   ├── nodemon.json           # Nodemon configuration
   ├── package.json           # Project metadata and npm scripts
   ├── package-lock.json      # Auto-generated file for dependencies
   ├── README.md              # Project README
   ├── tsconfig.json          # TypeScript configuration
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