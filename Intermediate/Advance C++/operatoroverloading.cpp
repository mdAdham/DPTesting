#include <iostream>

using namespace std;

class Number
{
public:
    int value;
public:
    Number(int val)
    {
        value = val;
    }

    Number operator+(Number other)
    {
        return Number(value + other.value);
    }
};

int main()
{
    Number n1 = 10, n2 = 20;
    Number n3 = n1 + n2;
    cout << n3.value << endl;
}