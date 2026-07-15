// to be filled
#include <iostream>
using namespace std;

class Shape 
{
public:
    virtual Shape* operator+(Shape* other) = 0;
};

class Square : public Shape
{
public:
    Shape* operator+(Shape* other)
    {
        return NULL;
    }
};

int main()
{
    Square s1, s2;
    Shape* sh1 = &s1;
    Shape* sh2 = &s2;

    Shape* s3 = (*sh1) + sh2;
    Shape *s4 = sh1->operator+(sh2);
}