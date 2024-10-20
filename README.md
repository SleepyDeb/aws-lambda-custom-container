# Custom Lambda Runtime Container

## Overview
This repository contains a custom AWS Lambda runtime container.

## Local Development and Testing

To run the container locally, ensure Docker is installed and running.

### Build and Run the Docker Container
Build the Docker image and run the container using the following commands:

```bash
docker build -t lambda .
docker run --rm -ti -p 8080:8080 lambda
```

### Invoke the Lambda Function
Open a new terminal session and invoke the Lambda function:
```bash
curl -XPOST "http://localhost:8080/2015-03-31/functions/function/invocations" -d '{}'

```
