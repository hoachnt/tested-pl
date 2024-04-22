list = [1, 2, 3, 4]
list2 = [1, 2, 3, 4]

defmodule Calculator do
  def sum(a, b) do
    result = a + b
    result
  end
  def minus(a, b) do
    result = a - b
    result
  end
  def mult(a, b) do
    result = a * b
    result
  end
  def div(a, b) do
    result = a / b
    result
  end
  def expo(_, 0), do: 1
  def expo(numb, numb2) when numb2 >= 1 do
    numb * expo(numb, numb2 - 1)
  end
end

calculator = Calculator
calculator2 = Calculator

IO.puts(calculator.expo(2, 10))
IO.puts(calculator.sum(12, 232))
IO.puts(calculator.minus(12, 232))
IO.puts(calculator.mult(12, 232))
IO.puts(calculator.div(12, 232))
IO.puts(calculator2.sum(1123, 21332))
IO.puts(calculator2.minus(222, 22))
IO.puts(calculator2.mult(1254, 332))
IO.puts(calculator2.div(5464, 232))
