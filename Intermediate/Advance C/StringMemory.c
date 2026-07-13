#include <stdio.h>
#include <stdlib.h>

int main()
{
    if (0)
    {

        char* namewoutspace = (char*)calloc(20, sizeof(char));
        
        printf("Enter the Name(Without space): ");
        scanf("%19s", namewoutspace);
        printf("Your name is(Without space) %s\n", namewoutspace);
        
        free(namewoutspace);
        
    }
    else
    {

        char* name = (char*)calloc(20, sizeof(char));
        
        printf("Enter the Name: ");
        fgets(name, 20, stdin);
        printf("\nYour name is %s", name);
        
        free(name);
    }

    return 0;
}