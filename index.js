
document.querySelector("button").addEventListener("click", function onClick(){

  var random1 = Math.floor(Math.random()*3)+1;
  var source1 = "sps"+random1+".png";
  document.querySelectorAll("img")[0].setAttribute("src", source1);

  var random2 = Math.floor(Math.random()*3)+1;
  var source2 = "sps"+random2+".png";
  document.querySelectorAll("img")[1].setAttribute("src", source2);


  //h1
  if(random1===1){
    if(random2===2){
      document.querySelector("h1").innerHTML = "Player2 wins!🚩";
    }
    else if(random2===3){
        document.querySelector("h1").innerHTML = "🚩Player1 wins!";
    }
    else{
      document.querySelector("h1").innerHTML = "Draw";
    }

  }
  else if(random1===2){
    if(random2===1){
        document.querySelector("h1").innerHTML = "🚩Player1 wins!";
    }
    else if(random2===3){
        document.querySelector("h1").innerHTML = "Player2 wins!🚩";
    }
    else{
      document.querySelector("h1").innerHTML = "Draw";
    }

  }
  else if(random1===3){
    if(random2===1){
        document.querySelector("h1").innerHTML = "Player2 wins!🚩";
    }
    else if(random2===2){
        document.querySelector("h1").innerHTML = "🚩Player1 wins!";
    }
    else{
      document.querySelector("h1").innerHTML = "Draw";
    }
  }


});
