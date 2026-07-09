#include <stdio.h>
#include <string.h>

int main()
{
    char str1[] = "1234";

    printf("%d\n", strlen(str1));

    char* p = str1;
    while(*p != '\0')
    {
        printf("%c", *p);
        p++;
    }
    printf("\n");

    char str[] = "Hello";

    int length = 0;

    while (str[length] != '\0')
    {
        length++;
    }

    printf("Length = %d\n", length);
}