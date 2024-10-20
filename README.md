# What is this?
Just Custom Lambda Runtime Container

## How to run it locally

Having Docker up and running:
    ```bash
    docker build . -t lambda
    docker run --rm -ti -p 8080:8080 test index.handler
    ```

Then on another shell session you can do:
```bash
curl -XPOST "http://localhost:8080/2015-03-31/functions/function/invocations" -d "{}"
```
