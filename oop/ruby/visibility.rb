class ClassName
    def initialize(x, y)
        @x = x
        @y = y
    end
    
    private
    def x
        @x
    end

    public
    def y
        @y
    end
    
    protected
    def protectedX
        @x
    end
end
class ChildClass < ClassName
    def initialize
        @x = 10
    end
end