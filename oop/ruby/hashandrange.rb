hash = {"name" => "Hoach", "age" => 16, "lastName" => "Nguyen"} # aka object
range = 1..10 # диапазон чисел от 1 до 10 включая 10
range2 = 1...10 # диапазон чисел от 1 до 10 исключая 10

range.each {|i| if i % 2 == 0 then puts i end}