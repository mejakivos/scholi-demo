#!/usr/bin/env bash
set -e
echo "Scholi automated setup & run script (v1.0)"

# 1) Check Docker
if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required but not installed. Please install Docker Desktop or Docker Engine."
  exit 1
fi

# 2) Start Postgres via docker-compose if file exists
if [ -f docker-compose.school_calendar.yml ]; then
  echo "Starting services via docker-compose.school_calendar.yml..."
  docker-compose -f docker-compose.school_calendar.yml up -d --build
  echo "Services started. Backend should be at http://localhost:4000, Frontend at http://localhost:3000 (if using compose)"
  exit 0
fi

# 3) Fallback: start Postgres container and run backend locally
echo "Bringing up postgres container..."
docker run --name scholi-postgres -e POSTGRES_USER=sc_user -e POSTGRES_PASSWORD=sc_pass -e POSTGRES_DB=sc_db -p 5432:5432 -d postgres:15 || true
echo "Postgres started on localhost:5432"

echo "Please cd into the backend folder (school_calendar_nest_prisma) and run:"
echo "  npm install"
echo "  npx prisma generate"
echo "  npx prisma migrate dev --name init"
echo "  npm run seed"
echo "  npm run start:dev"
echo ""
echo "Then in the frontend folder (school_calendar_deliverables/frontend):"
echo "  npm install"
echo "  npm run dev"
echo ""
echo "If you want me to attempt an automated local launch, re-run this script with the docker-compose file present."
