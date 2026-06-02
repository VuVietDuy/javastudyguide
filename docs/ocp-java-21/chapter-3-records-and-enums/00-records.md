---
sidebar_position: 1
---

# Records

# Introducing Records

Records provide a more concise way to declare classes that are primarily intended as simple data carriers. You can think of records as a special type of class that is specifically designed to store immutable data, kind of like a sturdy, tamper-proof safe for your information.

Here's a diagram that shows the basic structure and components of the record declaration

```
┌─────────────────────────────────────────────────┐
│ public record Person(String name, int age) {    │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │ Implicit Components                     │    │
│  │ ● Private final fields                  │    │
│  │ ● Public constructor                    │    │
│  │ ● Public accessor methods               │    │
│  │ ● equals(), hashCode(), toString()      │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │ Customizable Components                 │    │
│  │ ● Compact constructor                   │    │
│  │ ● Additional methods                    │    │
│  │ ● Static fields and methods             │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
└─────────────────────────────────────────────────┘
```

Example:

```
record Person(String name, int age) {}
```
