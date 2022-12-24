var mapa=[];
var modalLote=[];

function comandos(){
    var quantidade = document.getElementById("qntd").value;
    if (quantidade==0){
        alert("insira uma quantidade")
    }else{       
        for (var i = 0; i < quantidade; i++) {  
            var tabela_mapa =document.getElementById("mapa");   
            var tabela_lote = document.createElement("table");    
            tabela_lote.id="tabela_lote";
            tabela_lote.classList.add("table-shadow");
            tabela_mapa.appendChild(tabela_lote);      
            var lote = document.createElement("th");
            tabela_lote.appendChild(lote);
            lote.id = "Lote";
            var img = document.createElement("IMG");
            img.src = "https://i.imgur.com/Bx3FEK3.png";
            img.style.width = "80px";
            img.style.height = "80px";
            lote.appendChild(img);
/*====================================================*/
            var adubagem = document.createElement("th","button");
            adubagem.id = "adubo";
            adubagem.classList="btn-add"
            adubagem.innerHTML = "🌱";
            lote.appendChild(adubagem);
/*====================================================*/
            var irrigado = document.createElement("th","button");
            irrigado.id = "regado";
            irrigado.classList="btn-add"
            irrigado.innerHTML = "🚰";
            lote.appendChild(irrigado);
/*====================================================*/
            var praga = document.createElement("th","button");
            praga.id = "infestado";
            praga.classList="btn-add"
            praga.innerHTML = "🐜";
            lote.appendChild(praga);
/*====================================================*/
            var info= document.createElement("spam");
            info.innerHTML="ℹ️";
            info.id="detalhes";
            lote.appendChild(info);
            info.style.cursor="Pointer";
            info.onclick = informacao;



/*================= modal da info===================================*/
var modalInfo = document.createElement("div");
modalInfo.id="modalInfo";
modalInfo.classList="modalInfo";
tabela_mapa.appendChild(modalInfo);
var modalConteudo =  document.createElement("div");
modalConteudo.id="modalConteudo";
modalInfo.appendChild(modalConteudo);
var modal = document.getElementById("modalInfo");
/*========================modal body==========================*/
var modalHeader =document.createElement("div");
modalHeader.innerHTML=modalInfo.classList;
modalHeader.id="modalHeader";
modalConteudo.appendChild(modalHeader);

var modalBtnX =  document.createElement("spam");
modalBtnX.id="X";
modalBtnX.innerHTML= "&times";
modalBtnX.style.cursor="Pointer";
modalHeader.appendChild(modalBtnX);
modalBtnX.onclick = function() {
modal.style.display = "none";
  }
/*====================================================*/

var modalMain =document.createElement("div");
modalMain.id="modalMain";
modalConteudo.appendChild(modalMain);

var modalTxt1=document.createElement("fieldset");
modalTxt1.id="modalTxt1";
modalTxt1.innerHTML= "Tipo da uva : ";
modalMain.appendChild(modalTxt1);

var tipoUva = document.createElement("select");
modalTxt1.appendChild(tipoUva);

var msguva = document.createElement("option");
tipoUva.appendChild(msguva);
msguva.innerHTML="Selecione o tipo da uva";
msguva.value=0;

var uva1 = document.createElement("option");
tipoUva.appendChild(uva1);
uva1.innerHTML="uva1";
uva1.value=1;

var uva2 = document.createElement("option");
tipoUva.appendChild(uva2);
uva2.innerHTML="uva2";
uva2.value=2;

var uva3 = document.createElement("option");
tipoUva.appendChild(uva3);
uva3.innerHTML="uva3";
uva3.value=3;

var modalTxt2=document.createElement("fieldset");
modalTxt2.id="modalTxt2";
modalTxt2.innerHTML= "Hora da irrigação : ";
modalMain.appendChild(modalTxt2);

var regar= document.createElement("input");
regar.type="time";
modalTxt2.appendChild(regar);

var modalTxt3=document.createElement("fieldset");
modalTxt3.id="modalTxt3";
modalTxt3.innerHTML= "Dia em que foi adubado : ";
modalMain.appendChild(modalTxt3);

var adubado= document.createElement("input");
adubado.type="date";
adubado.min="2022-01-01";
modalTxt3.appendChild(adubado);

var modalTxt4=document.createElement("fieldset");
modalTxt4.id="modalTxt4";
modalTxt4.innerHTML= "Presenças de pragas : ";
modalMain.appendChild(modalTxt4);

var bichado1= document.createElement("input");
bichado1.type="date";
bichado1.min="2022-01-01";
modalTxt4.appendChild(bichado1);
var bichado2= document.createElement("select");
modalTxt4.appendChild(bichado2);

var msgpraga = document.createElement("option");
bichado2.appendChild(msgpraga);
msgpraga.innerHTML="Selecione o tipo da praga";
msgpraga.value=0;

var praga1 = document.createElement("option");
bichado2.appendChild(praga1);
praga1.innerHTML="praga1";
praga1.value=1;

var praga2 = document.createElement("option");
bichado2.appendChild(praga2);
praga2.innerHTML="praga2";
praga2.value=2;

var praga3 = document.createElement("option");
bichado2.appendChild(praga3);
praga3.innerHTML="praga3";
praga3.value=3;
/*====================================================*/
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  /*========================modal body==========================*/
/*================= modal da info===================================*/




mapa.push("lote"+i);
console.log(mapa);
/*====================================================*/ 
function informacao(){  
    modal.style.display= "block";
}
    } 
   
}
    
}
function time()
{
    today=new Date();
    D=today.getDate();
    M=today.getMonth();
    A=today.getFullYear();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    document.getElementById('rodaPé').innerHTML=h+":"+m+":"+s+" "+D+"/"+(M+1)+"/"+A;
    setTimeout('time()',500);
}


