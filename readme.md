📘 Task Manager API – NestJS + GraphQL

A backend project built with NestJS and GraphQL to manage tasks. It includes environment configuration, MongoDB integration with Mongoose, input validation, and a modular structure designed for scalability.

````
src/
│
├── app.module.ts
├── main.ts
│
├── modules/
│   ├── env/              # Environment configuration
│   ├── task/             # Task domain logic (GraphQL, service, resolver)
│   └── database/         # Mongoose/MongoDB integration
````


---

## 🚀 Features

- GraphQL API with Apollo Server
- MongoDB integration via Mongoose
- DTO validation using `class-validator`
- Configurable via environment variables
- Modular and scalable architecture

---

## ⚙️ Technologies

- **NestJS** (Modular architecture)
- **GraphQL** (Apollo Driver)
- **Mongoose** (MongoDB ODM)
- **Joi** for configuration schema validation
- **class-validator** + **class-transformer** for DTOs

---

## 🔧 Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables
Create a .env file at the passing the port on which the backend should run and the url for the database connection. The variables which has to be set can be seen in .env.example

### Run the App
```bash
npm run start:dev
```

To try the Graphql queries open the Apollo Playground on: http://localhost:{PORT}/graphql