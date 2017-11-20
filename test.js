function addpg()
{

    var element = document.getElementById("main");

  var hh = document.createElement("h2");
  element.appendChild(hh);
  var txth = document.createTextNode("dsad");
  hh.appendChild(txth);


  //para

  var pp = document.createElement("p");
  element.appendChild(pp);
  var txt = document.createTextNode("sdakjashdjkhkja");
  pp.appendChild(txt);


}

function delpg()
{


  var hhd = document.getElementsByTagName("h2")[2];
  var main = hhd.parentNode;
  var ppd = document.getElementsByTagName("p")[2];

  main.removeChild(hhd);
  main.removeChild(ppd);

}
