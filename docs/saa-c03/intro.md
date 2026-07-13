---
sidebar_position: 1
---

# Introduction

The AWS Certified Solutions Architect - Associate (SAA-C03) exam is intended for individuals who perform a solutions architect role. The exam validates a candidate's ability to design solutions based on the AWS Well-Architected Framework.

The exam also validates a candidate's ability to complete the following tasks:
- Design solutions that incorporate AWS services to meet current business requirements and future projected needs
- Design architectures that are secure, resilient, high-performing, and cost-optimized
- Review existing solutions and determine improvements

1. Design Secure Architectures
2. Design Resilient Architectures
3. Design High-Performing Architectures
4. Design Cost-Optimized Architectures


# Cloud Computing

Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing.

You only pay for what you use, and you can quickly access scale resources like servers, storage, and databases as needed.

Deployment Models

There are three different kinds of deployment models:
- Cloud-based
- On-premises
- Hybrid

These models describe how compute resources are accessed: over the internet, locally, or using a combination of both

**Cloud-Based Deployment**
Everything runs in the cloud.

You can build new applications or migrate existing ones, choosing your level of control, from managing virtual servers to using fully managed services.

On-Premises Deployment
Resources run in your own data center using virtualization and management tools. Also know as private cloud deployment.

# Global Infrastructure

When you use AWS, your applications run on physical hardware located in data centers around the world. Understanding how this infrastructures is organized helps you design reliable, high-performing applications.

Regions and Availability Zones

AWS infrastructure consists of Regions. There are physical locations around the world, each containing multiple Availability Zones

AWS Service Categories

AWS organizes its services into these core categories
- Compute: Run applications (EC2, Lambda)
- Storage: Store data (S3, EBS)
- Networking: Connect resource
- Databases: Manage data
- Security - Control access

# AWS EC2 Intro

Compute is one of AWS's core service categories. It provides the processing power to run your applications.

EC2 is the foundational compute service with virtual service you can configure and control. In later section, you'll also learn about serverless and container-based options.

EC2 (Elastic Compute Cloud) provides virtual servers in the AWS Cloud. Get computing power on-demand withoud buying physical hardware, and scale capacity as needed.

EC2 uses multi-tenancy meaning multiple customers share the same physical hardware, but virtual machines remain isolated and secure. AWS manages this so you get dedicated resources withou managing servers yourself.

Getting Started with ECC2

Working with EC2 involves three steps:
1. Launch: Select a template with your operating system and applications, choose an instance type (hardware configuration), and specify security settings to control network traffic
2. Connect: Connect to your instance through various methods: remote desktop login, SSH, or programmatic access for applications.
3. Use: Run commands, install software, add storage, and manage files just like on a physical server.

## Cloud EC2 Instance Types

EC2 offers different instance types optimized for different use cases. Each provides a specific combination of CPU, memory, storage, and networking

When selecting, consider the following: Does my application need more processing power, memory, or fast storage?

**Instance Type Categories**

General Purpose: Balances compute, memory, and networking. Best for varied workloads or when requirements are uncertain. Use case: web servers, code repositories, application servers, small/medium databases.

Compute Optimized: High-performance processors for compute-intensive tasks. Use cases: gaming servers, high-performance computing (HPC), scientific modeling.

Memory Optimized: Fast processing of large datasets in memory. Use cases: real-time analytics, high-performance databases, in-memory caching.


## EC2 Pricing

EC2 uses a pay-as-you-go model. You ony pay for the compute time you use and there are several pricing options to optimize costs

- On-Demand Instances
- Savings Plans
- Reserved Instances
- Spot Instances
- Dedicated Hosts

## EC2 Scaling

Scaling means adjusting resoruces to match the current demand. A well-designed architecture handles traffic changes while you only pay for what you need.

When servers receive more requests than they can handle, it can cause timeouts and outages. EC2 Auto Scaling automatically adds or removes instances to match demand.

Two Approaches to EC2 Auto Scaling
- Dynamic scaling: responds to changing demand in real-time
- Predicctive scaling: schedules instances based on predicted demand
You can combie both approaches for faster scaling.
