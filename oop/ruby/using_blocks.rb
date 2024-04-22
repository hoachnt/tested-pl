class Foo
    def initialize(max)
        @max = max
    end
    def silly
        yield(4, 5) + yield(@max, @max)
    end
    def count base
        if base > @max
            raise "reached max"
        elsif yield base
            1
        else
            1 + (count(base + 1) {|i| yield i })
        end
    end
end

# Блоком кода может быть {} или do end в блоке может содержать логику выполнения кода

# Пример: 
# f.silli do |a, b|
#     2 * a - b
# end
# Короче говоря блок кода do end будет выполняться при вызове метода yield в примере выше метод silly вызывает блок кода do end 2 раза. 
# yield(4, 5) и yield(@max, @max)
# блоки кода принимают аргументы только в виде |x|, но это почти тоже самое что (x) в функциях и методах
    