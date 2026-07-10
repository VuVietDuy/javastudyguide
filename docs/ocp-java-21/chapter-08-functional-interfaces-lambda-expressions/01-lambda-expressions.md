---
sidebar_position: 2
---

# Lambda Expressions

Lambda expressions allow you to treat functionality as a method argument or code as data, enabling a more functional programming style.

```java
List<Car> compactCars = fundCars(cars, 
  (Car c) -> c.getType.equals(CarTypes.COMPACT)
)
```

## Syntax

A lambda expression has three parts: a list of parameters, an arrow token (->), and a function body.

```
(parameters) -> expression
// or 
(parameters) -> { statements; }
```