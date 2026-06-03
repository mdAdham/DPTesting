#include <iostream>
#include <string>
using namespace std;

int main()
{
    string name;
    int age = 0;
    string school;

    cout << "Enter you name: ";
    cin >> name;

    cout << "Enter you age: ";
    cin >> age;

    cout << "Enter you school name: ";
    cin >> school;

    cout << "Your name is : " << name << endl;
    cout << "Your age is : " << age << endl;
    cout << "Your school name is : " << school << endl;
}