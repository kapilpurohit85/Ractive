
var ractive = new Ractive({
  el: document.body,
  template: '#template',
  data: {
    readonly: false,					
    progress: 0,
	progress1: 0,
	progress2: 0
  }
});

document.getElementById( 'count1' ).addEventListener( 'click', function () {
	var temp = document.getElementById( 'barNumber' ).value;
	document.getElementById("bar1").style.backgroundColor='red';
  if(ractive.get( 'progress'+temp ) - 25 >= 0){
	  ractive.set( 'progress'+temp, ractive.get( 'progress'+temp ) - 25 );
  }
  else{
	  ractive.set( 'progress'+temp, 0 );
  }
  
});
document.getElementById( 'count2' ).addEventListener( 'click', function () {
	var temp = document.getElementById( 'barNumber' ).value;
  if(ractive.get( 'progress'+temp ) - 10 >= 0){
	  ractive.set( 'progress'+temp, ractive.get( 'progress'+temp ) - 10 );
  }
  else{
	  ractive.set( 'progress'+temp, 0 );
  }
});
document.getElementById( 'count3' ).addEventListener( 'click', function () {
	var temp = document.getElementById( 'barNumber' ).value;
    ractive.set( 'progress'+temp, ractive.get( 'progress'+temp ) + 25 );
});
document.getElementById( 'count4' ).addEventListener( 'click', function () {
	var temp = document.getElementById( 'barNumber' ).value;
	ractive.set( 'progress'+temp, ractive.get( 'progress'+temp ) + 10 );
});