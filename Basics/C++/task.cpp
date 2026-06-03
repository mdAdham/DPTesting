#include <iostream>
#include <string>

using namespace std;

class ATM
{
public:
    void CheckBalance()
    {
        cout << "balance is: " << balance << endl;
    }

    void withdraw(float amount)
    {
        if (amount > balance)
        {
            cout << "no money left" << endl;
        }
        else
        {
            balance -= amount;
            cout << "withdrawn: " << amount << endl;
        }
    }

    void Deposit(float amount)
    {
        balance += amount;
        cout << "deposited: " << amount << endl;
    }

private:
    string username;
    float balance = 100;
};

int main()
{
    ATM user;
    user.CheckBalance();
    user.Deposit(50);
    user.CheckBalance();
    user.withdraw(120);
    user.CheckBalance();

}