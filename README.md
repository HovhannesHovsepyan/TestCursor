# Project Structure

This repository is organized into the following main folders:

- **backend/**: Contains the ASP.NET Core Web API application.
- **frontend/**: Intended for frontend code (e.g., React, Angular, or other frameworks).
- **infrastructure/**: Contains infrastructure-as-code, deployment scripts, or related resources.
- **.github/**: Holds GitHub workflow configurations and other repository-level settings.

## Naming Conventions
- Folder and file names use `kebab-case` or `PascalCase` as appropriate for the technology.
- C# namespaces and classes use `PascalCase`.
- JavaScript/TypeScript files use `camelCase` for variables and functions, and `PascalCase` for components.

## Getting Started

### Backend (ASP.NET Core Web API)
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Restore dependencies and run the API:
   ```sh
   dotnet restore
   dotnet run
   ```

### Frontend
- Add your frontend application code in the `frontend` folder. (e.g., create a React app with `npx create-react-app .`)

### Infrastructure
- Place infrastructure scripts, IaC templates, or deployment files in the `infrastructure` folder.

### GitHub Workflows
- Add workflow YAML files in the `.github/workflows` directory to automate CI/CD and other processes.

## Contributing
- Follow the naming conventions outlined above.
- Ensure code is well-documented and tested.
- Submit pull requests for review.

---

For more details, see the documentation in each respective folder. 