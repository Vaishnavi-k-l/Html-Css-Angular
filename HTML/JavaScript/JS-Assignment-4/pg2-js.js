function func(id)
{
    
        id.innerHTML = "Yaay! The text has changed!!";
     
    //document.write("You have done it!");
}

function alert_box()
{
    alert("Hello, This is HTML, CSS and JS section!");
}

function alert_box2()
{
    var text ;
    if(confirm("Press a button"))
    {
        text = "You pressed OK";
    }
    else
    {
        text = "You pressed Cancel";
    }
    document.getElementById("demo").innerHTML = text;
}