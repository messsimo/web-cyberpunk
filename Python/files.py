nc = input("Hello, Wrtite some about you nativ country: ")

file = open("data/nativcountry.txt", "w")
file.write(nc + "\n")
file.close()


file = open("data/nativcountry.txt", "a")

ncn = input("Do yoy want to add something new? ")
if ncn == "Yes":
  text = input("Write: ")
  file.write(text)
else:
  print("Thank you for information.")

file.close()


file = open("data/nativcountry.txt", "r")
print("Your text is: ", file.read())
file.close()
