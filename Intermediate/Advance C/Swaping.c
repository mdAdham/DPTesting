#include <stdio.h>

int main()
{
    int a = 10;
    int b = 20;

    printf("Before Swapping: a=%d, b=%d\n", a, b);
    
    int *ap = &a;
    int *bp = &b;
    
    int temp = *bp;
    *bp = *ap;
    *ap = temp;
    
    printf("After Swapping: a=%d, b=%d", a, b);

    return 0;
}