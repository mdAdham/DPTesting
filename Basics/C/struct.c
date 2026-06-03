#include <stdio.h>

typedef struct
{
    char name[50];
    int age;
    float marks;
} Student;

int main()
{
    Student student1;

    printf("Enter name: ");
    scanf("%s", student1.name);

    printf("Enter age: ");
    scanf("%d", &student1.age);

    printf("Enter marks: ");
    scanf("%f", &student1.marks);

    printf("Student Name: %s\n", student1.name);
    printf("Student Age: %d\n", student1.age);
    printf("Student Marks: %.1f\n", student1.marks);

    return 0;
}