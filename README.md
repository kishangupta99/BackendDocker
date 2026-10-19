# 🚀 Modern Backend & DevOps

A hands-on learning repository focused on modern backend development, DevOps, cloud, system design, and Generative AI.

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js, REST APIs
- **Database:** MongoDB, PostgreSQL
- **Caching:** Redis
- **DevOps:** Docker, Docker Compose, CI/CD
- **Cloud:** AWS
- **Distributed Systems:** Kafka, System Design
- **AI/GenAI:** RAG, LangChain, LLM APIs, Vector Databases

## 🐳 Docker

Learning and implementing:

- Docker Images & Containers
- Dockerfiles
- Docker Compose
- Port Mapping
- Container Networking
- Environment Variables
- Volumes
- Multi-container Applications

### Useful Commands

```bash
docker build -t my-app .
docker run -p 7000:7000 my-app
docker ps
docker images
docker compose up --build
docker compose down
docker system df


              React / Vite
                   │
                   ↓
            Node.js / Express
                   │
          ┌────────┼────────┐
          ↓        ↓        ↓
       MongoDB  PostgreSQL  Redis
                   │
                   ↓
             Docker / AWS
                   │
             ┌─────┴─────┐
             ↓           ↓
           Kafka       CI/CD
             │
             ↓
        Scalable Backend



Documents
    ↓
Embeddings
    ↓
Vector Database
    ↓
RAG
    ↓
LangChain
    ↓
LLM
    ↓
AI Application



