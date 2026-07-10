# Workloads

## Pods

Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.

A Pod is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers.

What is a Pod?

The shared context of a Pod is a set of Linux namespaces, cgroups and potentially other facets of isolation - the same things that isolate a container.

## Pod Lifecycle

Pods follow a defined lifecycle, starting in the Pending phase, moving through Running if at least one of its primary containers starts OK, and then through either the Succeedes or Failed phases depending on whether ant container in the Pod terminated in failure.
