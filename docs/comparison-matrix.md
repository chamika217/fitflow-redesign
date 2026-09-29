# Weighted Technology Decision Matrix (Frontend)

Scoring: 1 = poor, 3 = acceptable, 5 = excellent. Weighted score = Σ (score × weight).

| Criterion | Weight | Flutter | React Native | KMP | Swift/SwiftUI |
|---|---|---|---|---|---|
| Performance | 15% | 5 | 4 | 5 | 5 |
| Cross-platform / code reuse | 20% | 5 | 4 | 4 | 1 |
| Security | 10% | 4 | 4 | 5 | 5 |
| Scalability | 10% | 4 | 4 | 5 | 5 |
| Development speed | 15% | 5 | 5 | 3 | 2 |
| AI/ML support | 5% | 4 | 5 | 4 | 5 |
| Real-time support | 10% | 5 | 5 | 4 | 5 |
| Maintainability | 10% | 5 | 4 | 3 | 2 |
| Cost | 5% | 4 | 4 | 3 | 2 |
| **Weighted score** | 100% | **4.70** | **4.30** | **4.05** | **3.30** |

Weights reflect FitFlow's priorities: cross-platform UX and code reuse (20%), performance and development speed (15% each), then security, scalability, real-time and maintainability (10% each), with AI/ML and cost at 5% each.

**Result:** Flutter ranks first. Backend, database and authentication are then selected separately:
NestJS (main API) + FastAPI (AI service) + PostgreSQL + Redis + Auth0.
