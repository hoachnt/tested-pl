class A
    def initialize(f = 0)
        @@bar = 10
        @foo = f
    end
    def self.reset_bar
        @@bar = 0
    end
    def m2
        @foo += 2
        @@bar += 1
    end
    def bar 
        @@bar
    end
    def foo
        @foo
    end
end

# @@bar - переменная класса(доступен во всём классе, а не только в экземпляре класса)
# @foo - переменная экземпляр класса(доступен только в экземпляре)

a = A.new(18)
b = A.new(9)

puts a.m2
puts b.m2