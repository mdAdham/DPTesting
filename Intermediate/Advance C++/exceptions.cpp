#include <iostream>

int main()
{
    int a = 10, b = 0;

    try
    {
        if (b==0)
            throw(2);
    }
    catch(int err){
        std::cout << "Error " << err;
    }

    return 0;
}