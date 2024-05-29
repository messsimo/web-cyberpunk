# Создание класса
class robot:
    name = None
    model = None
    number = None
    sepcification = None

# Конструктор + индефектор None для не заполненых пунктов
    def __init__(self, name = None, model = None, number = None, specification = None):
        self.name = name
        self.model = model
        self.number = number
        self.sepcification = specification
        
# Сокращение строк, за счет добавления методов
    #def set_data(self, name, model, number, specification):
        #self.name = name
        #self.model = model
        #self.number = number
        #self.sepcification = specification

# Вывод всех значений робота
    def get_data(self):
        print("Name: ", self.name, "Model: ", self.model, "Number: ", self.number, "Specification: ", self.sepcification,)
 
# Cоздание объекта класса
robot1 = robot("Apallon", "Universal 3.2", 1)

robot2 = robot("Creed", "Universal 3.1", 2)

# Вопрос о покупке
user = input("Do you want to buy any robot? ")
print("We have more robots for you!")
# Вывод информации о роботах
robot1.get_data()
robot2.get_data()

# Принятие решение о покупки(Да/Нет)
if user == "No":
    print("Have a nice day!")

if user == "Yes":
   which = input("Which robot do you like? [Write the name] ")

# Финальная часть. Покупка
   if which == "Apallon":
       print("Nice chose, you buy robot-1!")
   if which == "Creed":
       print("Nice chose, you buy robot-2!")

