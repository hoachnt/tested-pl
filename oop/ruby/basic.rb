class A
    def m1
        34
    end
    def m2(x, y)
        z = 7
        if x > y 
            false
        else
            x + y + z
        end
    end
end
class B
    def m1
        343
    end
    def m2 x
        x * 2 + self.m1
    end
end

b = B.new
puts b.m2(2)

class C
    def m1
        print "hello"

        self
    end
    def m2
        print "world"
        
        self
    end
    def m3
        print "good bye"
        
        self
    end
end

c = C.new
puts c.m1.m1.m1.m1