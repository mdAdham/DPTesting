#include <stdio.h>

void print_message()
{
    printf("Good Evening Everyone!\n");
}

int add(int x, int y)
{
    return x + y;
}

int main()
{
    print_message();
    int result = add(5, 10);
    printf("The sum is: %d\n", result);
    return 0;
}