#include <stdio.h>
#include <string.h>

// int main()
// {
//     int age = 0;
//     char state[] = "TN";
//     scanf("%d", &age);

//     if (age >= 18 && strcmp(state, "TN") == 0)
//     {
//         printf("You are eligible to vote\n");
//     }
//     else
//     {
//         printf("You are not eligible to vote\n");
//     }
//     return 0;
// }

int main()
{
    int a = 10, b = 20;

    printf("Before swapping: a = %d, b = %d\n", a, b);

    a = a + b;
    b = a - b;
    a = a - b;

    printf("After swapping: a = %d, b = %d\n", a, b);
    return 0;
}