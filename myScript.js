function myBGColor() {
    var bgc = document.getElementById("myBGColor").value;
   /* document.getElementById("showcode-bg").innerHTML = bgc;*/
    document.getElementById("changBGC").style.backgroundColor = bgc;
  }
  
  function changResume() {
    var name = document.getElementById("fullName").value;
    var skill = document.getElementById("listSkill").value;
    document.getElementById("changName").innerHTML = name;
    document.getElementById("changSkill").innerHTML = skill;
  }