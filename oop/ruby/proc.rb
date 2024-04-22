# Proc это аналогия стрелочной функции в js

def greetingName(name, greeting)
    greeting.call(name) # метод call позволяет вызвать proc, так как в ruby функции и proc - разные
end

greeting = -> (name) {puts "Hello #{name}"}
greeting = lambda { |name| puts "Hello #{name}"}
greeting = -> (name) do
    puts "Hello, #{name}"
end

# Все три метода работают

greetingName("Hoach", greeting)