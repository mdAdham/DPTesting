#include <iostream>
#include <string>

template<typename T>
T add(T a, T b)
{
    return a + b;
}

int main()
{
    int isum = add(10, 20);
    float fsum = add(10.f, 20.f);
    double dsum = add(10.0, 20.0);
    //std::string ssum = add("Hello ", "World");

    std::cout << isum << std::endl;
    std::cout << fsum << std::endl;
    std::cout << dsum << std::endl;
    //std::cout << ssum << std::endl;
}