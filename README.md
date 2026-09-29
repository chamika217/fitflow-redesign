# FitFlow Redesign

FitFlow is a cross-platform fitness application redesign focused on personalized workouts, nutrition tracking, progress monitoring and social fitness features.

> Module: IT3060 – Human Computer Interaction (Semester 2, 2026) – Lab Exercise 05
> Student: IT23620216 – Dilshan D.M.C

## Technology Stack
| Layer | Technology |
|---|---|
| Frontend (iOS / Android / Web) | Flutter + Dart |
| Main backend | NestJS + Node.js + TypeScript |
| Real-time | NestJS WebSockets |
| Primary database | PostgreSQL |
| Cache / queue | Redis |
| AI service | Python + FastAPI |
| Authentication | Auth0 (OAuth 2.0 / OpenID Connect) |
| Object storage | S3-compatible storage |
| CI/CD | GitHub Actions |

## Main Features
- User authentication and profiles
- Personalized workout plans
- Workout and progress tracking
- Nutrition tracking
- Social sharing and real-time activity
- AI-based recommendations

## Repository Structure
```
frontend/    – Flutter client
backend/     – NestJS API
ai-service/  – FastAPI AI service
docs/        – architecture, ADR and technology evaluation
```

## Documentation
- [Tech stack summary](docs/tech-stack.md)
- [Comparison matrix](docs/comparison-matrix.md)
- [Architecture](docs/architecture.md)
- [ADR-001](docs/ADR-001.md)

![Architecture](docs/FitFlow_High_Level_Architecture.png)

## Security
TLS, OIDC/JWT, RBAC, encryption at rest, audit logs, consent and privacy controls.

## Development
Each service contains its own setup instructions. Environment secrets must be stored in environment variables or a secrets manager and must never be committed to Git.
