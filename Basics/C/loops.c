#include <stdio.h>

int main1()
{
    int lines = 20;

    for (int i = 1; i <= lines; i+=1)
    {
        for (int j = 0; j < i; j+=1)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}

int main()
{
    int arr[5];

    for (int i = 0; i < 5; i+=1)
    {
        printf("Enter a number: ");
        scanf("%d", &arr[i]);
    }

    printf("You entered: \n");
    for (int i = 0; i < 5; i+=1)
    {
        printf("%d \n", arr[i]);
    }
    printf("\n");
    return 0;
}