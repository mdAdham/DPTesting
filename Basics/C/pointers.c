#include <stdio.h>

int main1()
{
    int x = 10;

    printf("Value of x: %d\n", x);
    printf("Address of x: %p\n", &x);

    int *p;
    p = &x;
    printf("Value of p : %d\n", *p);

    (*p)++;
    printf("Value of p after post-increment: %d\n", *p);
    printf("Value of x after post-increment: %d\n", x);

    x--;
    printf("Value of x after pre-decrement: %d\n", x);
    printf("Value of p after pre-decrement: %d\n", *p);
    return 0;
}

int main2()
{
    int arr[5] = {1, 2, 3, 4, 5};

    int *ptr = arr;

    printf("%d\n", *(ptr + 0));
    printf("%d\n", *(ptr + 1));
    printf("%d\n", *(ptr + 2));
    printf("%d\n", *(ptr + 3));
    printf("%d\n", *(ptr + 4));

    return 0;
}

#include <stdlib.h>

int main()
{
    int *arrptr = malloc(2 * sizeof(int));
    int *arr2ptr;
    arr2ptr = (int*) malloc(sizeof(int) * 3);
    
    arrptr[0] = 10;
    arrptr[1] = 20;

    printf("Value of numptr: %d\n", arrptr[0]);
    printf("Value of numptr: %d\n", arrptr[1]);
    
    arr2ptr[0] = 30;
    arr2ptr[1] = 40;

    printf("Value of num2ptr: %d\n", arr2ptr[0]);
    printf("Value of num2ptr: %d\n", arr2ptr[1]);


    free(arrptr);
    free(arr2ptr);
    return 0;
}