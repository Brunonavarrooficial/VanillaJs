const turnOn = document.getElementById ('turnOn');
const turnoff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
  return lamp.src.indexOf('quebrada') > -1    
}

function lampOn (){
  if (!isLampBroken ()){
    lamp.src = '/img/ligada.jpg';    
  }  
}

function lampOff () {
  if (!isLampBroken ()) {
    lamp.src = 'img/desligada.jpg';
  } 
  
}

function lampBroken () {
  lamp.src = 'img/quebrada.jpg';
  setInterval(function(){
    alert('Lampada quebrou, Favor Reiniciar a Página');
  }, 5000); 
  
  
}

turnOn.addEventListener('click', lampOn);
turnoff.addEventListener('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
