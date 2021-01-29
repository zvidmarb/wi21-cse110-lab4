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

14. Arithmetic
    A. '32', `2` was converted to a string and concatenated
    B. 1, since there is no string operator involving `-`, but there is subtraction
    C. 3, null acts as a 0 in terms of number addition
    D. '3null', null is converted to a string and concatenated
    E. 4, as `true` is converted to `1` after suspecting number addition
    F.  0, `false` and  `null` are both convertible and treated as 0's in number addition
    G. '3undefined', `undefined` is converted to a string and concatenated with `3`
    H. NaN, as one of the operands (`undefined`) is not defined/ assigned a value

15. Comparison
    A. true, `'2'` was converted to the number 2
    B. false, since it compares strings lexiographically - 2 is a larger value in the alphabet
    C. true, since `'2'` is converted to a number equal to 2
    D. false, number and string are not the same types
    E. false, type changing a `true` boolean sets it to the number 1
    F. true, as `2` was already converted to a true boolean before the strict equality was checked

16. `==`, the equality sign, converts each operand to numbers if they aren't already, then compares their values. `==`, the *strict* equality does not convert each operand - if the types are different, it automatically returns false.

17. `'How are you?'` gets printed since `true` converts to 1 in the first condition and `2` is treated as a true boolean in the second.

19. `[6,8,10]` is the result of `newArr` - the function `modifyArray` iterates through `[1,2,3]`, taking each element and passing it into the callback function `doSomething`. The callback function adds 2 to the array element and passes it into its callback, a `function(x)`, which then multiplies the element by 2. The final return value of this is the result of `doSomething`, a new number that is pushed to the `newArr`. This iteration occurs three times, adding a new modified array element for each existing one.

21. The output is 1 4 3 2, since 1 and 4 don't have any `setTimeout` structure attached to them, 3 has a 0ms timeout, and 2 has a 1000ms timeout.