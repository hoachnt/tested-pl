class Person
    def initialize(name = "hoach")
        @name = name
    end
    def self.getName
        @name = "Hoach"
    end
    def greating
        puts "Hello my name is #{self.getName}"
    end
    def greatingWithName(name)
        puts "Hello my name is #{@name}. Nice to meet you #{name}"
    end
end

puts Person.getName