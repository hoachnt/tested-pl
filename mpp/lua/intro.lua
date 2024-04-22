function Fact(n)
	if n == 0 then
		return 1
	else
		return n * Fact(n - 1)
	end
end

print("enter a number:")
local n = io.read("*number")
print(Fact(n))
