---
sidebar_position: 2
---

# Object Life-Cycle in Java

Understanding the different stages of an object's life cycle is essential in Java's object-oriented programming. This includes the creation of objects, how reference variables access them, and how unused objects are managed by Java's garbage collector.

Here's a diagram that illustrates the typical life-cycle of the Java object, from creation to garbage collection:

```
┌────────────────────┐
│   Object Creation  │
│    (new keyword)   │
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│   Initialization   │
│   (Constructor)    │
└────────┬───────────┘
         │
         ▼
┌───────────────────┐
│     Object Use    │
│ (Active Lifetime) │
└────────┬──────────┘
         │
         ▼
┌────────────────────┐
│     Unreachable    │
│(No more references)│
└────────┬───────────┘
         │
         ▼
┌────────────────────┐
│   Garbage Collect  │
│     (finalize)     │
└────────────────────┘
```







