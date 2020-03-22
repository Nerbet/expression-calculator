function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
var symbol;
var symbol1;
var symbol2;
var number;
var Num;
var arr = [];
var sum;
for(var i = 0; i<expr.length; i++)
{
    symbol = expr.charAt(i);
    symbol1 = expr.charAt(i+1);
    symbol2 = expr.charAt(i+2);
    if(symbol == " ")
    {
        continue;
    }
    if(symbol == "0" || symbol == "1" || symbol == "2" || symbol == "3" || symbol == "4" || symbol == "5" || symbol == "6" || symbol == "7" || symbol == "8" || symbol == "9")
    {
        if(symbol1 == "0" || symbol1 == "1" || symbol1 == "2" || symbol1 == "3" || symbol1 == "4" || symbol1 == "5" || symbol1 == "6" || symbol1 == "7" || symbol1 == "8" || symbol1 == "9")
        {
            if(symbol2 == "0" || symbol2 == "1" || symbol2 == "2" || symbol2 == "3" || symbol2 == "4" || symbol2 == "5" || symbol2 == "6" || symbol2 == "7" || symbol2 == "8" || symbol2 == "9")
            {
                number = symbol + symbol1 + symbol2;
                i = i+2;
            }
            else 
            {
                number = symbol + symbol1;
                i++;
            }
        }
        else
        {
            number = symbol;
        }
        Num = Number(number);
        arr.push(Num);
    }
    if(symbol == "(" || symbol == ")" || symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/")
    {
        arr.push(symbol);
    }
}
console.log(arr.length);
while(arr.length != 0)
{
for(var k=0; k<arr.length; k++)
{
for(var i=0; i<arr.length; i++)
{
    if(arr[i] == "(")
    {
        if(arr[i+2] == ")" )
        {
            arr.splice(i,1);
            arr.splice(i+1,1);
            i--;
        }
    }
    if(arr[i] == "*")
    {
        if(arr[i-1] == "(" || arr[i-1] == ")" || arr[i+1] == "(" || arr[i+1] == ")")
        {
            continue;
        }
        sum = arr[i-1] * arr[i+1];
        arr[i-1] = sum;
        arr.splice(i, 2);
        i--;
    }
    if(arr[i] == "/")
    {
        if(arr[i-1] == "(" || arr[i-1] == ")" || arr[i+1] == "(" || arr[i+1] == ")")
        {
            continue;
        }
        sum = arr[i-1] / arr[i+1];
        arr[i-1] = sum;
        arr.splice(i, 2);
        i--;
    }
}
for(var k=0; k<arr.length; k++)
{
for(var i=0;i<arr.length;i++)
{
    if(arr[i] == "+")
{
    if(arr[i-1] == "(" || arr[i-1] == ")" || arr[i+1] == "(" || arr[i+1] == ")")
    {
        continue;
    }
    sum = arr[i-1] + arr[i+1];
    arr[i-1] = sum;
    arr.splice(i, 2);
    i--;
}
if(arr[i] == "-")
{
    if(arr[i-1] == "(" || arr[i-1] == ")" || arr[i+1] == "(" || arr[i+1] == ")")
    {
        continue;
    }
    sum = arr[i-1] - arr[i+1];
    arr[i-1] = sum;
    arr.splice(i, 2);
    i--;
}
}
}
}
}
return arr[0];
}

module.exports = {
    expressionCalculator
}
