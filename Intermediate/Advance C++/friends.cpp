#include <iostream>

class Student
{
private:
    int mark;
public:
    Student()
    {
        mark = 90;
    }

    friend void display(Student);
};

void display(Student a)
{
    std::cout <<  a.mark << std::endl;
}

int main()
{
    Student sud;
    
    display(sud);
}