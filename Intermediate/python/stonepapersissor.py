import random
ch = int(input("1.Rock\n2.Paper\n3.Sissor\nEnter your choice:"))
choices = ["1.Rock", "2.Paper", "3.Sissor"]
AIchoice = random.choice(choices)
print("you chooses " + choices[ch-1])
print("CPU chooses " + AIchoice)
c = choices[ch-1]
if c == AIchoice:
    print("Draw")
elif c == choices[0] and AIchoice == choices[1]:
    print("AI Wins")
elif c == choices[1] and AIchoice == choices[2]:
    print("AI Wins")
elif c == choices[2] and AIchoice == choices[0]:
    print("AI Wins")
else:
    print("You Won")