#include <stdio.h>
#include <stdlib.h>

int mallocfunc()
{
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int *arr = (int*)malloc(sizeof(int)*n);

    if (arr == NULL)
    {
        printf("Memory allocation Failed");
        return 1;
    }

    printf("Enter the numbers:\n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Numbers is: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d\n", arr[i]);
    }

    free(arr);
    return 0;
}

int callocfunc()
{
    int n;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    
    int *arr = (int*)calloc(5, sizeof(int));

    if (arr == NULL)
    {
        printf("Memory allocation Failed");
        return 1;
    }

    printf("Enter the numbers:\n");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Numbers is: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d\n", arr[i]);
    }

    free(arr);
    return 0;
}

int reallocfunc()
{
    int* arr = (int*) calloc(5, sizeof(int));

    for (int i = 0; i < 5; i++)
    {
        arr[i] = i+1;
    }

    arr = (int*)realloc(arr, 8*sizeof(int));

    for (int i = 5; i < 8; i++)
    {
        arr[i] = i+1;
    }

    for (int i = 0; i < 8; i++)
    {
        printf("%d\n", arr[i]);
    }
}

int main()
{
    //return mallocfunc();
    //return callocfunc();
    return reallocfunc();
}