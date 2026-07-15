#include <iostream>
using namespace std;

class Student
{
public:
    string name;
    Student(string n)
    {
        name = n;
    }
    Student (const Student& s)
    {
        name = s.name;
        cout << "Copy Constructor called " << s.name << endl;
    }
};

int main()
{
    Student s1("Adham");
    Student s2("Hello");
    Student s3 = s1;

    s2 = s1;
}