function integers()
{
    var number1 = Number(document.getElementById('number1').value);
    var number2 = Number(document.getElementById('number2').value);
    var number3 = Number(document.getElementById('number3').value);
    var result;
    document.write("Generated Integers are: "+"<br>")
    for (var count = number1; count <= number2; count++)
    {
        result = count%number3;
        if(result == 0)
        {
          document.writeln(count+"<br>")
        }
    }
}
