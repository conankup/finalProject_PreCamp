function myBGColor() {
  var bgc = document.getElementById("myBGColor").value;
  document.getElementById("changBGC").style.backgroundColor = bgc;
}

function changName() {
  var name = document.getElementById("fullName").value;
  document.getElementById("changName").innerHTML = name;
}

function changSkill(){
  var node = document.createElement("LI");
  var addSkill = document.getElementById("skill").value;
  var textSkill = document.createTextNode(addSkill);
  node.appendChild(textSkill);
  document.getElementById("mySkill").appendChild(node);
  
}

function delSkill(){
 var list = document.getElementById("mySkill");
 if (list.hasChildNodes()) {
      list.removeChild(list.lastChild);
}

}
