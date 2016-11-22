var count=25;

var counter=setInterval(timer, 1500); 

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);

     return;
  }

}
