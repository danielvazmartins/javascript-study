function separaCasas(numero) {
	var n = numero.toString();
	var novaString = "";

	for(var i = 0; i < numero.length; i++) 
		if(n.charAt(i) == '.' || i == numero.length - 1) {
			if(i - 3 > 1) novaString = n.substring(0, i-3) + "," + n.substring(i - 3, numero.length - 1);
			else novaString = n;
			break;
		}

	return novaString;
} 

function Combustivel(p, r) {
		var preco = p;
		var rendimento = r;
		var consumo = parseInt(form.km.value)  / rendimento;
		var custo = consumo * preco;
		
		this.comparar = function(c) {
			var ec = this.calculaEconomia(c);
			var maior = 0;
			if(c.getCusto() > custo) maior = c.getCusto();
			else maior = custo;
			return (ec * 100 / maior).toFixed(2);
		}
		
		this.calculaEconomia = function(c) {
			var economia = c.getCusto() - custo;
			return (economia > 0)?economia:-economia; 
		}
		
		this.getRendimento = function() {
			return rendimento;
		}
		
		this.getConsumo = function() {
			return consumo.toFixed(0);
		}
		
		this.getCusto = function() {
			return custo.toFixed(2);
		}
		
		
	}
	
function calcular() {
    	if(form.km.value == '' || form.p1.value == '' || form.p2.value == '' || form.kit.value == '') {
        	alert('Preencha os campos!');
        	return;
        }
		
        var p1 = parseFloat(form.p1.value);
    	var p2 = parseFloat(form.p2.value); 
		
		var rC;
		var rGNV;
		var r;
		
		if(form.r1.value != '' && form.r2.value == '') {
			
			r = parseFloat(form.r1.value);
			rC = "Etanol";
			rGNV = r * 1.45;
			
			
		} else if(form.r2.value != '' && form.r1.value == '') {
			
			r = parseFloat(form.r2.value);
			rC = "Gasolina";
			rGNV = r * 1.25;
			
		} else {
			alert("Coloque o rendimento de apenas um combustível");
			return;
		}
     
        var gnv = new Combustivel(p2, rGNV);
        var comb = new Combustivel(p1, r);
    	var kit = parseFloat(form.kit.value);
		
		document.getElementById(form.r3.value = rGNV);
		
		var rend = document.getElementById("rendimento");
		var con = document.getElementById("consumo");
		var custo = document.getElementById("custo");
		var economia = document.getElementById("economia");
		var eKit = document.getElementById("ecKit");

		var chartRendimento = document.getElementById("chartRendimento").getContext('2d');
		var chartConsumo = document.getElementById("chartConsumo").getContext('2d');
		var chartCusto = document.getElementById("chartCusto").getContext('2d');
		
		rend.innerHTML =
			"<font color = blue>RENDIMENTO</font> <br/>" + rC + ": " + comb.getRendimento() + " km/L<br/>GNV: " + gnv.getRendimento() + " km/L";
			drawChart(chartRendimento, 'Km/L ou Km/m³', 'Gasolina', 'GNV', comb.getRendimento(), gnv.getRendimento());

		con.innerHTML =
			"<font color = blue>CONSUMO MENSAL</font> <br/>" + rC + ": " + separaCasas(comb.getConsumo()) + " L<br/>GNV: " + separaCasas(gnv.getConsumo()) + "L";
			drawChart(chartConsumo, 'L ou m³', 'Gasolina', 'GNV', separaCasas(comb.getConsumo()), separaCasas(gnv.getConsumo()));
			
		custo.innerHTML =
			"<font color = blue>CUSTO EM REAIS</font> <br/>" + rC + ": " + separaCasas(comb.getCusto()) + "<br/>GNV: R$ " + separaCasas(gnv.getCusto());
			drawChart(chartCusto, 'R$', 'Gasolina', 'GNV', separaCasas(comb.getCusto()), separaCasas(gnv.getCusto()));
		
		economia.innerHTML =
		 	"<font color=steelblue size=3>Sua economia</font><br/><hr/><p/><font color=green> Economia Mensal (em %) </font><br/>GNV X " + rC + ": " + gnv.comparar(comb);
		 
        eKit.innerHTML = 
		 	"<font color=steelblue size=3>Tempo de retorno do KIT GNV (em meses): </font><hr/><p/>GNV X " + rC + ": " + (kit / gnv.calculaEconomia(comb)).toFixed(1) + " meses"; 


}

function drawChart(canvas, title, label1, label2, data1, data2) {
	new Chart(canvas, {
	    type: 'horizontalBar',
	    data: {
	        labels: [label1, label2],
	        datasets: [{
	            label: title,
	            data: [data1, data2],
	            backgroundColor: [
	                '#87b400',
	                '#273d9f'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            xAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});
}





