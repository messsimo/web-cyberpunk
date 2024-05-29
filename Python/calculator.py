symb1 = int(input("Write first number: "))
symb2 = int(input("Write second number: "))

action = ["+", "-", "*", "/"]

usaction = input("Chose the action [+,-,*,/]: ")

if usaction == action[0]:
    print(symb1, "+", symb2, "=", symb1 + symb2)
elif usaction == action[1]:
     print(symb1, "-", symb2, "=", symb1 - symb2)
elif usaction == action[2]:
     print(symb1, "*", symb2, "=", symb1 * symb2)
elif usaction == action[3]:
     print(symb1, "/", symb2, "=", symb1 / symb2)


