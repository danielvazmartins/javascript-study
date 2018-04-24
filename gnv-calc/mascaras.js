function mascara(o,f){
	v_obj=o;
	v_fun=f;
	var ua=navigator.userAgent.toLowerCase();
	var isAndroid=ua.indexOf("android")>-1;
	var androidversion=parseFloat(ua.slice(ua.indexOf("android")+8));
	if((isAndroid)&&(androidversion<4.1)){
		execmascara();
	}else{
		setTimeout("execmascara()",1);
	}
};

function execmascara(){
	v_obj.value=v_fun(v_obj.value);
}

function soNumeros(v){
	return v=v.replace(/\D/g,"");;
}

// Funcao para permitir que usuario digite numeros com virgulas e duas casas decimais
function soValores(v){ 
	var index = v.length - 1;
	// Verifica se nao for numero
	if (isNaN(v.charAt(index))){		
		if (!v.charAt(index).match(/[\,]/)){
			// Se nao for virgula remove
			v = v.replace(v.charAt(index),"");
		} else {
			//Caso seja digitado a virgula novamente, apaga a anterior
			v = v.replace(/[\D]/g, '');
			v = v + ",";
		}
	}
	v=v.replace(/(\d),(\d{2})(\d)/,"$1,$2");
	return v;
}

// Funcao para aceitar apenas 1 digito e duas casas decimais
function maskMoney(v) {
	v=v.replace(/\D/g,"");
	v=v.substring(0,4);
	v=v.replace(/(\d{1})(\d)/,"$1,$2");
	return v;
}