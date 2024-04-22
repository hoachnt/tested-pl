datatype for = to of int * int

infix to 

val for =
    fn lo to up =>
        (fn f => let fun loop lo = if lo > up then ()
                                  else (f lo; loop (lo+1))
                in loop lo end)
     

fun mul(x, y) = x * y;
fun double x = mul(x, 2);
fun printOneToNine() = 
    for (1 to 9) 
        (fn i => print(Int.toString i) )

val arr = Array.array(5, 0);
val z = 17;
val abs_of_z = if z > 0 then 0 - z else z; (*output: val abs_of_z = ~17 : int - I think "~17" mean "-17"*)


double(4);
printOneToNine();