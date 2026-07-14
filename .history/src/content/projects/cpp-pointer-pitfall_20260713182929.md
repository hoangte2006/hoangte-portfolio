---
title: 'Learning Log: C++ Dangling Pointer Pitfall'
description: 'A quick note on a common bug I encountered with dangling pointers after a function returns, and how to solve it.'
pubDate: 2024-04-10
period: 'Q2 2024'
category: 'Learning Log'
tags: ['C++', 'Pointers', 'Debugging', 'Bug']
heroImage: '../../assets/LB1.png'
outcome: 'Reinforced understanding of stack vs. heap memory and the importance of dynamic allocation for data that needs to outlive its scope.'
---

## The Problem

I spent hours debugging why a pointer was pointing to garbage data. The code looked simple:

```cpp
int* createNumber() {
    int num = 10;
    return &num; // Big mistake!
}

int main() {
    int* my_ptr = createNumber();
    std::cout << *my_ptr; // Prints garbage or crashes
}
```

## The "Aha!" Moment

The variable `num` is created on the **stack**. When the `createNumber` function returns, its stack frame is destroyed, and `num` ceases to exist. The pointer `my_ptr` is now "dangling" – it points to a memory location that is no longer valid.

## The Solution

The correct way is to allocate memory on the **heap** using `new`. This memory persists until it's explicitly deallocated with `delete`.

```cpp
int* createNumber() {
    int* num = new int(10);
    return num;
}

int main() {
    int* my_ptr = createNumber();
    std::cout << *my_ptr; // Correctly prints 10
    delete my_ptr; // Don't forget to clean up!
}
```

This was a classic mistake, but tracking it down was a great real-world lesson in memory management.