1. Line 11 will return prices.length as `i` is declared by a `var` inside the same function as line 11.

2. Line 12 will return the value calculated by line 6 on the last iteration of the `for` loop (the discounted price) because it is declared by a `var` that is assigned a new value each iteration.
   
3. Line 13 will return the value calculated by line 7 on the last iteration of the loop because `finalPrice` is declared with function-wide scope but reassigned every iteration of the `for` loop.

4. `[50, 100, 150]` will be returned as the `discounted` array because the loop iterates through the `prices` parameter and calculates the final price post-discount, leaving a 50% discount on all of `prices`

5. Line 11 will return an error as `i` is out of scope from where it is declared in the `for` loop on line 5.
 
6. Like the previous answer, line 12 will return an error due to  `discountedPrice` being contained in the `for` loop and not accessible outside of any iteration.

7. Line 13 will return the value of `finalPrice` calculated by the last iteration of line 7 - which is possible since `finalprice` is declared outside of the `for` loop iteration.

8. The output is the same as problem 4 and the changes made to the variable types is trivial - both `i` and `discountedPrice` have their operations performed within the same scope as them.

9. The same thing will happen to Line 11 as in question 5 - it will return an error because `i` is out of scope.
    
10. Despite being a `const`, `discountedPrice` is still within the scope of the `for`-loop. Therefore the output is an out of scope error.

11. Line 13 outputs `0` since `finalPrice` is assigned as a `const` - no other values can be reassigned to it.

12. The function returns an empty array `[]` from `discounted` since it is assigned as a `const` empty array in the function scope.
    
13. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher".name]
    E. student.courseLoad[0]