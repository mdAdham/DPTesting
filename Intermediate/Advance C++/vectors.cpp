#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> arr = {10, 20, 30, 40};
    for (int x : arr)
    {
        cout << x << endl;
    }
}