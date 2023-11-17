var fullName = "ZohaAsghar"

                 // Alert //
document.getElementById('alertString').onclick = function (){
    // console.log('clicked')
    alert('Tom & Jerry')
    let statement = "alert('Tom & Jerry')"
    document.getElementById('originalTextBox').innerHTML = statement 
    
}
        //    Clear Statement Text  //
document.getElementById('clearStatmentButton').onclick = function (){
    document.getElementById('originalTextBox').innerHTML = ""
}
            //  Alert Numbers  //
document.getElementById('alertNumber').onclick = function(){
    alert("32")
    let statement ="alert('32')"
    document.getElementById('originalTextBox').innerHTML = statement
}
            //  Show Variable Name legal and illegal  //
document.getElementById('variableName').onclick = function(){
    let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example,<code>userAlert</code>  and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a<code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScriptfor the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>"
document.getElementById('output').innerHTML = html
}
          //  CamelCase Example //
document.getElementById('camelCase').onclick = function(){
    let html ="<code>userResponse</code><br><code>userResponseTime</code><br><code>userResponseTimeLimit</code><br><code>response</code>"
    document.getElementById('output').innerHTML = html
}
           //    Clear Output Text  //
document.getElementById('clearOutputButton').onclick = function (){
    document.getElementById('output').innerHTML = ""
}
           //   Sum 2 Numbers    //
document.getElementById('sum2Numbers').onclick = function(){
    let num1 = 10;
    let num2 = 20;
    let sum2Numbers = num1 + num2;
    let statement = "let num1 =" + num1 + ";<br>let num2 =" + num2 +";<br>let sum2Numbers = num1 + num2;"
    document.getElementById('originalTextBox').innerHTML = statement
    document.getElementById('output').innerHTML = sum2Numbers 
} 
          //   Subtract 2 Numbers    //
   document.getElementById('subtract2Numbers').onclick = function(){
    let num1 = 20;
    let num2 = 10;
    let subtract2Numbers = num1 - num2;
    let statement = "let num1 =" + num1 + ";<br>let num2 =" + num2 +";<br>let subtract2Numbers = num1 - num2;"
    document.getElementById('originalTextBox').innerHTML = statement
    document.getElementById('output').innerHTML = '<p class="text-center">' + subtract2Numbers + '</p>'
        } 
            //   Multiply 2 Numbers    //
  document.getElementById('multiply2Numbers').onclick = function(){
    let num1 = 20;
    let num2 = 10;
    let multiply2Numbers = num1 * num2;
    let statement = "let num1 =" + num1 + ";<br>let num2 =" + num2 +";<br>let multiply2Numbers = num1 * num2;"
    document.getElementById('originalTextBox').innerHTML = statement
    document.getElementById('output').innerHTML = '<p class="text-center">' + multiply2Numbers + '</p>'
        }
            //   Divide 2 Numbers    //
document.getElementById('divide2Numbers').onclick = function(){
    let num1 = 20;
    let num2 = 10;
    let divide2Numbers = num1 / num2;
    let statement = "let num1 =" + num1 + ";<br>let num2 =" + num2 +";<br>let divide2Numbers = num1 / num2;"
    document.getElementById('originalTextBox').innerHTML = statement
    document.getElementById('output').innerHTML = '<p class="text-center">' + divide2Numbers + '</p>'
        } 
          //   Calculate some Numbers    //
document.getElementById('calculateSomeNumbers').onclick = function(){
    
    let calculateSomeNumbers = 36 / 6 * 3 + 2 ** 4 - (3+5);
    let statement = "let calculateSomeNumbers = 36 / 6 * 3 + 2 ** 4 - (3+5);"
    document.getElementById('originalTextBox').innerHTML = statement
    document.getElementById('output').innerHTML = '<p class="text-center">' + calculateSomeNumbers + '</p>'
        } 






