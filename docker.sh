#!/bin/bash

# Docker management scripts for Drone Website

case "$1" in
  "build")
    echo "Building Docker containers..."
    docker-compose build --no-cache
    ;;
  
  "up")
    echo "Starting Docker containers..."
    docker-compose up -d
    ;;
  
  "down")
    echo "Stopping Docker containers..."
    docker-compose down
    ;;
  
  "restart")
    echo "Restarting Docker containers..."
    docker-compose down
    docker-compose up -d
    ;;
  
  "logs")
    echo "Showing logs..."
    docker-compose logs -f
    ;;
  
  "logs-app")
    echo "Showing app logs..."
    docker-compose logs -f webapp
    ;;
  
  "logs-db")
    echo "Showing database logs..."
    docker-compose logs -f postgres
    ;;
  
  "clean")
    echo "Cleaning up Docker resources..."
    docker-compose down -v
    docker system prune -f
    ;;
  
  "reset")
    echo "Resetting everything (WARNING: This will delete all data)..."
    docker-compose down -v
    docker-compose build --no-cache
    docker-compose up -d
    ;;
  
  "shell-app")
    echo "Opening shell in webapp container..."
    docker-compose exec webapp sh
    ;;
  
  "shell-db")
    echo "Opening PostgreSQL shell..."
    docker-compose exec postgres psql -U drone_user -d drone_db
    ;;
  
  "status")
    echo "Showing container status..."
    docker-compose ps
    ;;
  
  *)
    echo "Usage: $0 {build|up|down|restart|logs|logs-app|logs-db|clean|reset|shell-app|shell-db|status}"
    echo ""
    echo "Commands:"
    echo "  build     - Build Docker containers"
    echo "  up        - Start containers in background"
    echo "  down      - Stop containers"
    echo "  restart   - Restart containers"
    echo "  logs      - Show all logs"
    echo "  logs-app  - Show webapp logs"
    echo "  logs-db   - Show database logs"
    echo "  clean     - Clean up Docker resources"
    echo "  reset     - Reset everything (deletes data)"
    echo "  shell-app - Open shell in webapp container"
    echo "  shell-db  - Open PostgreSQL shell"
    echo "  status    - Show container status"
    ;;
esac
