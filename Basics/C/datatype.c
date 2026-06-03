#include <stdio.h>
#include <stdbool.h>
#include <string.h>

int main0()
{
    bool isTrue = false;
    printf("%d", isTrue);
    return 0;
}

int main()
{
    int subjects[5] = { 1, 2, 3, 4, 5 };

    char name[20] = "Hello World";
    printf("%s\n", name);

    printf("Enter you Name: ");
    char name1[20];
    scanf("%s", name1);
    printf("Your name is %s", name1);

    return 0;
}