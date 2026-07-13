---
sidebar_position: 1
---

# Overview


Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services that facilitate both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.

Why?

Kubernetes provides you with:
- Service discovery and load balancing
- Storage orchestration
- Automated rollouts and rollbacks

## Kubernetes Components

### Core Components

A Kubernetes cluster consists of a control plane and one or more worker nodes. Here's a brief overview of the main components:

#### Control Plane Components

Manage the overall state of the cluster:

- kube-apiserver: The core component server that exposes the Kubernetes HTTP API.
- etcd: Consistent and highly-available key value store for all API server data
- kube-scheduler: Looks for Pods not yet bound to a node, and assigns each Pod to a suitable node.
- kube-controller-mananger: Runs controllers to implement Kubernetes API behavior.
- cloud-controller-mananger

#### Node components

Run on every node, maintainging runng pods and providing the Kubenetes runtime environment:

- kubelet: Ensures that Pods are running, including their containers.
- Container runtime

## Object in Kubernetes

Kubernetes objects are persistent entities in the Kubernetes system. Kubernetes uses these entities to represent the state of your cluster.