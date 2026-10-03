# FitFlow Redesign

FitFlow is a cross-platform fitness application redesign focused on personalized workouts, nutrition tracking, progress monitoring and social fitness features.

## Project status

| Part | Status |
|------|--------|
| Frontend (React Native, Expo) | Working prototype with mock data (Home, AI workout plan, Community, Nutrition) |
| Backend (NestJS) | Planned, see `docs/architecture.md` |
| AI service (FastAPI) | Planned |
| Authentication (Auth0) | Planned |
| Release preparation (Lab 06) | Android signed build, store assets, privacy policy and release notes documented in the lab report |

## Technology stack

- **Frontend:** React Native (Expo) + TypeScript
- **Backend:** NestJS + Node.js + TypeScript
- **Database:** PostgreSQL
- **Cache / queue:** Redis
- **AI service:** Python + FastAPI
- **Authentication:** Auth0 (OAuth 2.0 / OpenID Connect)
- **CI/CD:** GitHub Actions

Technology comparisons, the weighted decision matrix and the ADR are in `docs/`.

## Main features

- User authentication and profiles
- Personalized (AI) workout plans
- Workout and progress tracking
- Nutrition tracking
- Social sharing and real-time activity

## Repository structure

| Folder | Contents |
|--------|----------|
| `frontend/` | React Native (Expo) client |
| `backend/` | NestJS API (planned) |
| `ai-service/` | FastAPI AI service (planned) |
| `docs/` | Architecture, ADR, technology evaluation |
| `.github/workflows/` | CI workflow |

## Running the frontend

Requirements: Node.js (LTS) and the Expo Go app on a phone, or an Android emulator.

    cd frontend
    npm install
    npx expo start

Then scan the QR code with Expo Go, press `a` for the Android emulator, or press `w` for the browser.

## Android release build

    npx expo prebuild --platform android
    cd android
    ./gradlew bundleRelease

Signing: create an upload keystore outside the repository and set the signing properties in `~/.gradle/gradle.properties`. Keystores and passwords must never be committed.

## Security

TLS, OIDC/JWT, RBAC, encryption at rest, audit logs, consent and privacy controls. Secrets must be stored in environment variables or a secrets manager and must never be committed to Git.

## Documentation

- `docs/tech-stack.md`
- `docs/comparison-matrix.md`
- `docs/architecture.md`
- `docs/ADR-001.md`