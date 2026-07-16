#include <iostream>
#include <map>
using namespace std;

int main()
{
    map<int, string> m = { {1, "String1"}, {2, "String2"}};
    m[3] = "Adham";
    m[4] = "Anas";

    for (auto x : m)
    {
        cout << x.first << ": " << x.second << endl;
    }
}