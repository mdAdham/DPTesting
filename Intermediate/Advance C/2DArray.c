#include <stdio.h>

#define ROW 3
#define COLUMN 5

int main()
{
    int arr[ROW][COLUMN] = {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 8}, {7, 6, 5, 4, 3}};

    for (int i = 0; i < ROW; i++)
    {
        for (int j = 0; j < COLUMN; j++)
            printf("%d ", arr[i][j]);

        printf("\n");
    }

    return 0;
}