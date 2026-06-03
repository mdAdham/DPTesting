#include <stdio.h>
#include <string.h>

int main(){
    char username[20] = "admin";
    char password[9] = "admin123";

    char input_username[20];
    char input_password[20];

    printf("Enter username: ");
    scanf("%s", input_username);  
    printf("Enter password: ");
    scanf("%s", input_password);

    if (strlen(input_password) < 8) {
        printf("Password is Weak");
    } else {
        if (strcmp(username, input_username) == 0 && strcmp(password, input_password) == 0)
        {
                printf("Login Successful");
        }
        else{
            printf("Failed to Login");
        }
    }
    return 0;
}