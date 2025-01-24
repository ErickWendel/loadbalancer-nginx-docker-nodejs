# Load Balancer Project with Nginx, Node.js, Docker, and Docker Compose

This is a simple load balancer built using Nginx, Node.js, Docker, and Docker Compose. The purpose of this load balancer is to distribute incoming traffic to multiple instances of a Node.js application.

## Getting Started

To get started with this project, you will need to have Docker and Docker Compose installed on your machine.

1. Clone the repository

```bash
git clone https://github.com/ErickWendel/loadbalancer-nginx-docker-nodejs.git
```

2. Navigate to the project directory

```bash
cd loadbalancer-nginx-docker-nodejs
```

3. Start the application

```bash
docker-compose up -d
```

This will start the Node.js application and the Nginx load balancer. You can access the application by navigating to `http://localhost:3000`.

Inspired by [josephDev123](https://github.com/josephDev123/loadbalancer-nginx-docker-nodejs.git)



