
for(let i=1; i<=100;i++){
    let ul= document.querySelector('ul');
    // let newLi=ul.createElement("li");
    if(i%3==0&&i%5==0)
        newLi.innerHTML="FizzBuzz";
    else if(i%3==0)
        newLi.innerHTML="Fizz";
    else if(i%5==0)
        newLi.innerHTML="Buzz";
    else
        newLi.innerHTML=i;
}