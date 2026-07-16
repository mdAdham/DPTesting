#include <iostream>
using namespace std;

class Tier2
{
public:
    int *ptr;
    Tier2(int a)
    {
        ptr = new int(a);
    }
    Tier2(Tier2 &&time)
    {
        ptr = time.ptr;
        time.ptr = nullptr;
    }
};

int main()
{
    Tier2 t1(4);
    Tier2 t2(move(t1));
    cout << *t2.ptr;
}