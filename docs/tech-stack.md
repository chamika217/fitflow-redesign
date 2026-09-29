# Technology Stack Summary

| Layer | Choice | Reason |
|---|---|---|
| Frontend | Flutter + Dart | One codebase for iOS, Android and web; strong performance; consistent UI |
| Native modules | Swift / Kotlin (only if needed) | Platform health APIs (HealthKit / Health Connect) |
| Backend | NestJS + Node.js + TypeScript | Structured architecture, WebSockets, validation, auth guards |
| AI service | Python + FastAPI | Strongest ML/AI ecosystem; scaled independently |
| Database | PostgreSQL | ACID, relational integrity, JSONB, row-level security |
| Cache / queue | Redis | Dashboard caching, rate limiting, background jobs |
| Authentication | Auth0 (OAuth 2.0 / OIDC) | MFA, RBAC, social login, GDPR/HIPAA support (system-level compliance still required) |
| Object storage | S3-compatible | Images, media, exports |
| Observability | Logs, metrics, tracing, alerts | Operational visibility |
| CI/CD | GitHub Actions | Automated tests and linting |

## Backend options compared
| Backend | Development | Scalability | Real-time | AI/ML | Learning | Cost | Maintainability |
|---|---|---|---|---|---|---|---|
| NestJS / Node.js | High | High | Excellent (WebSockets) | Excellent JS/TS API ecosystem | Low–Medium | Low–Medium | Excellent for mid-sized team |
| Python / FastAPI | High | High | Excellent async | Excellent ML/AI | Low | Low–Medium | Excellent for AI-heavy services |
| Go | High after setup | High | Excellent | Good | Low | Low | Excellent for high-throughput |

## Database options compared
| Database | Scalability | Query / Transaction | Health data fit | AI/ML | Maintenance cost |
|---|---|---|---|---|---|
| PostgreSQL | Excellent | Excellent relational/analytical | Excellent (ACID, constraints, JSONB) | Excellent | Low–Medium |
| MongoDB | Excellent | Excellent document workloads | Very good | Very good | Low–Medium |
| Firebase/Firestore | Excellent managed scale | Excellent simple queries | Excellent ecosystem | Good | Medium |
| DynamoDB | Excellent at cloud scale | Excellent for known access patterns | Good | Good | Medium–High |

## Authentication options compared
| Option | Security | Real-time integration | Compliance | Scalability | Cost | Maintainability |
|---|---|---|---|---|---|---|
| Firebase Auth | High | High | Strong Google ecosystem | Excellent | Low | Easy |
| AWS Cognito | Very high | High | Strong AWS integration | Excellent | Low–Medium | Medium |
| Auth0 | Very high | High | Excellent enterprise identity | Excellent | Medium | Easy–Medium |
| Supabase Auth | High | High | Excellent with PostgreSQL/RLS | Very good | Low–Medium | Easy |

## Health data security note
Fitness and nutrition data can be sensitive even when not legally classified as PHI. The design uses least privilege, encryption in transit/at rest, short-lived tokens, MFA for higher-risk actions, RBAC, audit logging, consent controls, data minimisation, deletion/export workflows, backups and secrets management. Vendor support for HIPAA/GDPR does not by itself make the system compliant.
