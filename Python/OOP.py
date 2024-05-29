class building:
    year = None
    name = None

    def __init__(self, year, name):
        self.year = year
        self.name = name

    def get_info(self):
        print("Name of building: ", self.name, "Year of building: ", self.year)

class Shop(building):
    city = None
    shops = 0

    def __init__(self, year, name, city, shops):
        super().__init__(year, name)
        self.city = city
        self.shops = shops

    def get_info(self):
        super().get_info()
        print("City: ", Shop.city, "Shops: ", Shop.shops)
     

class School(building):
    students = 0

    def __init__(self, year, name, students):
        super().__init__(year, name)
        self.students = students

    def get_info(self):
        super().get_info()
        print("Students: ", School.students)

moll = Shop("2006", "MollDova", "Chisinau", 78)
Shop.city = "Chisinau"
Shop.shops = 78
school = School(1957, "N.V.Gogol", 1107)
School.students = 78

moll.get_info()
school.get_info()

