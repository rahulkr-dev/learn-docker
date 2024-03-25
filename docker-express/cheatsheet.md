# Run a container in detached mode with your specified image
docker run -d your_image_name

# Run a container interactively with a bash shell
docker run -it image_name /bin/bash

# Map port 8080 of the container to port 1234 on the host
docker run -p 1234:8080 your_image_name

# Run a container with a specified name
docker run --name my_container your_image_name

# Run a container with an environment variable set to a specific value
docker run -e ENV_VARIABLE=value your_image_name

# Remove a container forcefully
docker rm -f container_name

# Fetch and display the logs of a container
docker logs container_name

# Fetch and follow (tail) the logs of a container in real-time
docker logs -f container_name

# Stop all running containers
docker stop $(docker ps -aq)

# Remove all containers
docker rm $(docker ps -aq)

# Remove all containers forcefully
docker rm --force $(docker ps -aq)

# Execute a command to print environment variables within a running container
docker exec <container_id> printenv

# Inspect and display the environment variables of a container in JSON format
docker inspect --format '{{json .Config.Env}}' <container_id>
