---
sidebar_position: 1
---

# Hello Minikube

This tutorial shows you how to run a sample app on Kubernetes using minukube. The tutorial provides a container image that uses NGIX to echo back all the requests.

Objectives
- Deploy a sample application to minikube
- Run the app
- View application logs

## Create a minikube cluster

```bash
minikube start
```

## Check the status of the minikube cluster

```bash
minikube status
```

## Open the Dashboard

```bash
minikube dashboard
```

## Create a Deployment

A Kubernetes Pod is a group of one or more Containers, tied together for the puroses of adminstration and networking. The Pod in this tutorial has only one Container.

```bash
# Run a test container image that includes a webserver
kubectl create deployment hello-node --image=registry.k8s.io/e2e-test-images/agnhost:2.53 -- /agnhost netexec --http-port=8080
```

View the Deployment

```bash
kubectl get deployments
```

View the Pod

```bash
kubectl get pods
```

View cluster events

```bash
kubectl get events
```

View the `kubectl` configuration

```bash
kubectl config view
```

View application logs for a container in a pod (replace pod name with the one you got from `kubectl get pods`)

```bash
kubectl logs hello-node-5f76cf6ccf-br9b5
```

## Create a Service

By default, the Pod is only accessible by its internal IP address withing the Kubernetes cluster.

1. Expose the Pod to the public internet using the `kubectl` command:
```
kubectl expose deployment hello-minikube --type=LoadBalancer --port=8081
```

2. View the Service you created
```
kubectl get services
```


