function loadYTBLink(link){
 if(link.match(
}

window.onload = () => {
 const plus = document.getElementsByClassName('b1');
 for(let i=0;i<plus.length;i++){
  plus[i].onclick = () => {
   let value = document.getElementById('t'+(i+1)).value;
   if(value.substring(0,4) !== "http" && value.substring(0,4) !== "file"){
    value = "https://" + value;
   }
   document.getElementById('f'+(i+1)).src = value;
  };
 }
 let i=0;
 const areas = document.getElementsByTagName('textarea');
 for(let i=0;i<areas.length;i++){
  areas[i].onkeydown = k => {
   if(k.keyCode === 13){
    k.preventDefault();
    document.getElementsByClassName('b1')[i].onclick();
   }
  }; 
 }
};
