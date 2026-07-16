#include <iostream>
#include <memory>
using namespace std;

int main()
{
    unique_ptr<int> up = make_unique<int>(50);
    cout << *up.get();

    shared_ptr<int> sp1 = make_shared<int>(50);
    cout << *sp1.get();

    shared_ptr<int> sp2 = sp1;
    cout << *sp2.get();

    cout << "\n" << sp2.use_count();
}