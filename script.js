var data = [
  { color:"orange" },
  { color:"pink" },
  { color:"yellow" }
];
var squares = [];




function box(color){
  var that = this;
  this.number = 0;
  this.ele = document.createElement("div");
  this.ele.innerHTML = this.number;
  
  //info to stylize the squares
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  
  this.ele.style.borderRadius = "10px";
  this.ele.style.fontSize = "18px";
  this.ele.style.textAlign = "center";
  this.ele.style.lineHeight = "100px";
  //this.ele.style.vertical.align= "middle";
  
  this.ele.style.backgroundColor = color;
  
  
  
  this.ele.addEventListener("click", function(){
    that.countUp();
  })
  
  
  
document.body.appendChild(this.ele);
}

box.prototype.countUp = function(){
  this.number++;
  this.ele.innerHTML = this.number;
}




for(var i=0; i<data.length; i++){
  squares.push(new box(data[i].color));
}