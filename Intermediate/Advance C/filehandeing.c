#include <stdio.h>
#include <stdlib.h>

int main()
{
    FILE* fb = fopen("newfile.txt", "w");

    printf("File is created!\n");

    char data[50];
    fgets(data, 50, stdin);

    fputs(data, fb);
    printf("%s", data);

    fclose(fb);
}

// Santhosh's Code

// #include <stdio.h>
// #include <stdlib.h> 
// int main()
// { 
//     char *p;
//     p=(char*)malloc(20*sizeof(char)); 
//     printf("enter the name "); 
//     scanf("%19s",p); 
//     printf("the name is %s\n",p); 
//     free(p); 
//     char *pe;
//     pe=(char*)malloc(20*sizeof(char)); 
//     printf("enter the name \n"); 
//     fgets(pe,20,stdin); 
//     printf("the name is %s",pe); 
//     free(pe);
// }