#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int a[] = {5, 3, 4, 1, 2};
    for (int i : a)
    {
        cout << i << " ";
    }
    cout << endl;
    
    sort(a, a+5);
    for (int i : a)
    {
        cout << i << " ";
    }
    cout << endl;

    reverse(a, a+5);
    for (int i : a)
    {
        cout << i << " ";
    }
    cout << endl;

    string name = "Adham";
    // cout << name << endl;
    reverse(name.begin(), name.end());
    cout << name << endl;
}