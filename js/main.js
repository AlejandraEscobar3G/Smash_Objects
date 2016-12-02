$(document).ready(function(){
	var selector, i, objeto, nombre, input_name, j;
	var contador = 0,
		intentos = 0;
	var selection = $('#selector');

    selection.change(function(){
    	selector = selection[0].value;
    	switch(selector){
        case 'Animales':
              console.log(selector);
              proceso(animals);
              break;
        case 'Colores':
              console.log(selector);
              proceso(colors);
              break;
        case 'Partes del Cuerpo':
              console.log(selector);
              proceso(body);
              break;
        case 'Figuras':
              console.log(selector);
              proceso(figures);
              break;
        case 'Transporte':
              console.log(selector);
              proceso(transport);
              break;
        default:
              console.log(selector);
              alert('Seleccione una opción');
              break;
      }
    });
    
    //function
    function proceso(group){
      contador = 0;
      intentos = 0;
      var small = document.getElementById("puntaje");
          small.innerHTML = " " + contador;
    	j = cambiarDatos(group);
      $('#nombre').focus();
      console.log(group.length);
      //console.log(j);
    	//Comparando nombre, haciendo match
      $('#Comprobar').off('click');
    	$('#Comprobar').click(function(){
    		nombre = $('#nombre');
    		input_name = nombre[0].value;
    		if(input_name == objeto.name){
    			//Creando parrafo para agregar texto
          group.splice(j , 1);
          console.log(group.length);
          console.log(group)
    			$('#texto').append('<p>' + "AWESOME" + '</p>');
    			contador += 5;
    			//console.log(contador);
    			//Creando small para agregarle el puntaje
    			var small = document.getElementById("puntaje");
                small.innerHTML = " " + contador;
          //Validando que queden fotos
    			if(group.length == 0){
              alert("GAME OVER");
              return;
          } else{
            j = cambiarDatos(group);
            ocultarTexto();
          }  
    		} else{
    			//Creando parrafo para agregar texto
    			$('#texto').append('<p>' + "WHAT A BAD LUCK" + '</p>');
    			intentos++;
    			if(intentos === 5){
    				contador--;
    				intentos = 0;
    			}
    			//console.log(contador);
    			//Creando small para agregarle puntaje
    			var small = document.getElementById("puntaje");
                small.innerHTML = " " + contador;
    			j = cambiarDatos(group);
    			ocultarTexto();
    		}
    		nombre[0].value = "";
        $('#nombre').focus();
    	});
    }

    function cambiarDatos(group){
    	i = randomInteger(0, group.length-1);
    	objeto = group[i];
    	//Agregando src a img
    	var img = $('#imagen').attr({
    		src: objeto.src,
    		class : 'img-responsive'
    	});
    	$('#contenedor').append(img);
      return i;
    }

    function ocultarTexto(){
    	$('#texto > p').fadeOut(3000);
    }

    function randomInteger(low, high){
    	return low + Math.floor(Math.random()*(high-low));
    }

});