# Portfolio

A personal portfolio website with a Next.js frontend and Go backend API.

## Tech Stack

- **Frontend:** Next.js (React), TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Go, Gin
- **Package Manager:** Bun

## Project Structure

```
├── frontend/    # Next.js app
└── backend/     # Go API server
```

## Getting Started


### 1. Start the Go backend

```bash
cd backend
go run main.go
```

The API will be running at `http://localhost:8080`.

### 2. Start the Next.js frontend

```bash
cd frontend
bun install
bun dev
```

The frontend will be running at `http://localhost:3000`.
