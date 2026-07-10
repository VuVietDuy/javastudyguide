---
sidebar_position: 1
---

# Generics

In simple terms, generics allow you to write code that can work with different types, without losing the benefits of type safety. They provide a way to parameterize types, so that you can create classes, interfaces, and methods that can operate on objects of various type while still maintaining compile-time type check.

## Understanding Type Erasure

Type erasure is a process where the compiler removes all the generic type infomation at compile time, replacing it with their bounds of with the Object type if no bounds are specified.