class Person 
    def initialize(name, age, lastname)
        @name = name
        @ge = age
        @lastname = lastname
    end
    def name
        puts @name
    end
    def age
        puts @age
    end
    def lastname
        puts @lastname
    end
    def fullname
        puts "#{@name} #{@lastname}"
    end
end
class Employee < Person
    def initialize(name, age, lastname, work, rank, company)
        super(name, age, lastname)
        
        @work = work
        @rank = rank
        @company = company
    end
    def work
        puts @work
    end
    def rank
        puts @rank
    end
    def company
        puts @company
    end
end