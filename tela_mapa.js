var mapaArray=[];
var loteArray=[
  idLoteArray=[],
  uvaArray=[],
  regarArray=[],
  aduboArray=[],
  data=[],
  tipo=[] 
];

var contador = 0;

var contador = 0;

function comandos(){
  var tabela_mapa =document.getElementById("mapa");   
  var div = document.createElement("div"); 
  tabela_mapa.appendChild(div);

  var tabela_lote = document.createElement("table");    
  tabela_lote.id="tabela_lote";
  tabela_lote.classList.add("table-shadow");
  div.appendChild(tabela_lote);

  var lote = document.createElement("th");
  tabela_lote.appendChild(lote);
  lote.id = "Lote";
  var img = document.createElement("IMG");
  img.src = "https://i.imgur.com/Bx3FEK3.png";
  img.style.width = "80px";
  img.style.height = "80px";
  lote.appendChild(img);
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
div.appendChild(modalInfo);

var modalConteudo =  document.createElement("div");
modalConteudo.id="modalConteudo";
modalInfo.appendChild(modalConteudo);

/*========================modal body==========================*/
var modalHeader =document.createElement("div");
modalHeader.innerHTML="lote"+contador;
modalHeader.id="modalHeader";
modalConteudo.appendChild(modalHeader);

var modalBtnX =  document.createElement("spam");
modalBtnX.id="X";
modalBtnX.innerHTML= "&times";
modalBtnX.style.cursor="Pointer";
modalHeader.appendChild(modalBtnX);
modalBtnX.onclick = function() {
modalInfo.style.display = "none";
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
tipoUva.id="tipoUva";
tipoUva.name="tipoUva";
modalTxt1.appendChild(tipoUva);

var msguva = document.createElement("option");
tipoUva.appendChild(msguva);
msguva.innerHTML="Selecione o tipo da uva";
msguva.value=0;

var uva1 = document.createElement("option");
tipoUva.appendChild(uva1);
uva1.innerHTML="Cabernet Sauvignon";
uva1.value=1;

var uva2 = document.createElement("option");
tipoUva.appendChild(uva2);
uva2.innerHTML="Merlot";
uva2.value=2;

var uva3 = document.createElement("option");
tipoUva.appendChild(uva3);
uva3.innerHTML="Pinot Noir";
uva3.value=3;

var uva4 = document.createElement("option");
tipoUva.appendChild(uva4);
uva4.innerHTML="Tannat";
uva4.value=4;

var uva5 = document.createElement("option");
tipoUva.appendChild(uva5);
uva5.innerHTML="Cabernet Franc";
uva5.value=5;

var uva6 = document.createElement("option");
tipoUva.appendChild(uva6);
uva6.innerHTML="Isabel";
uva6.value=6;

var uva7 = document.createElement("option");
tipoUva.appendChild(uva7);
uva7.innerHTML="Bordô";
uva7.value=7;

var uva8 = document.createElement("option");
tipoUva.appendChild(uva8);
uva8.innerHTML="Concord";
uva8.value=8;

var uva9 = document.createElement("option");
tipoUva.appendChild(uva9);
uva9.innerHTML="Chardonnay";
uva9.value=9;

var uva10 = document.createElement("option");
tipoUva.appendChild(uva10);
uva10.innerHTML="Moscato Branco";
uva10.value=10;

var uva11 = document.createElement("option");
tipoUva.appendChild(uva11);
uva11.innerHTML="Riesling Itálico";
uva11.value=11;

var uva12 = document.createElement("option");
tipoUva.appendChild(uva12);
uva12.innerHTML="Trebbiano";
uva12.value=12;

var uva13 = document.createElement("option");
tipoUva.appendChild(uva13);
uva13.innerHTML="Glera/Prosecco";
uva13.value=13;

var uva14 = document.createElement("option");
tipoUva.appendChild(uva14);
uva14.innerHTML="Malvasia";
uva14.value=14;

var uva15 = document.createElement("option");
tipoUva.appendChild(uva15);
uva15.innerHTML="Niagara";
uva15.value=15;

var uva16 = document.createElement("option");
tipoUva.appendChild(uva16);
uva16.innerHTML="Moscato Embrapa";
uva16.value=16;

var uva17 = document.createElement("option");
tipoUva.appendChild(uva17);
uva17.innerHTML="Lorena BRS";
uva17.value=17;

var modalTxt2=document.createElement("fieldset");
modalTxt2.id="modalTxt2";
modalTxt2.innerHTML= "Hora da irrigação : ";
modalMain.appendChild(modalTxt2);

var regar= document.createElement("input");
regar.id="regar";
regar.type="time";
modalTxt2.appendChild(regar);

var modalTxt3=document.createElement("fieldset");
modalTxt3.id="modalTxt3";
modalTxt3.innerHTML= "Dia em que foi adubado : ";
modalMain.appendChild(modalTxt3);

var adubado= document.createElement("input");
adubado.id="adubado";
adubado.type="date";
adubado.min="2022-01-01";
modalTxt3.appendChild(adubado);

var modalTxt4=document.createElement("fieldset");
modalTxt4.id="modalTxt4";
modalTxt4.innerHTML= "Presenças de pragas : ";
modalMain.appendChild(modalTxt4);

var bichado1= document.createElement("input");
bichado1.id="bichado1";
bichado1.type="date";
bichado1.min="2022-01-01";
modalTxt4.appendChild(bichado1);
var bichado2= document.createElement("select");
bichado2.id="bichado2";
modalTxt4.appendChild(bichado2);

var msgpraga = document.createElement("option");
bichado2.appendChild(msgpraga);
msgpraga.innerHTML="Selecione o tipo da praga";
msgpraga.value=0;

var praga1 = document.createElement("option");
bichado2.appendChild(praga1);
praga1.innerHTML="Ácaro";
praga1.value=1;

var praga2 = document.createElement("option");
bichado2.appendChild(praga2);
praga2.innerHTML="Filoxera";
praga2.value=2;

var praga3 = document.createElement("option");
bichado2.appendChild(praga3);
praga3.innerHTML="Nematoides";
praga3.value=3;

var praga4 = document.createElement("option");
bichado2.appendChild(praga4);
praga4.innerHTML="Pássaros ou outros animais";
praga4.value=4;

var praga5 = document.createElement("option");
bichado2.appendChild(praga5);
praga5.innerHTML="Mariposas";
praga5.value=5;

var praga6 = document.createElement("option");
bichado2.appendChild(praga6);
praga6.innerHTML="Mosca da fruta";
praga6.value=6;

var praga7 = document.createElement("option");
bichado2.appendChild(praga7);
praga7.innerHTML="Oídio e míldio";
praga7.value=7;

var praga8 = document.createElement("option");
bichado2.appendChild(praga8);
praga8.innerHTML="Botrytis";
praga8.value=8;

var praga4 = document.createElement("option");
bichado2.appendChild(praga4);
praga4.innerHTML="Esca";
praga4.value=4;

var praga9 = document.createElement("option");
bichado2.appendChild(praga9);
praga9.innerHTML="Mal de Pierce";
praga9.value=9;

var praga10 = document.createElement("option");
bichado2.appendChild(praga10);
praga10.innerHTML="Mancha vermelha";
praga10.value=10;

var praga12 = document.createElement("option");
bichado2.appendChild(praga12);
praga12.innerHTML="Galha da coroa";
praga12.value=12;

var praga13 = document.createElement("option");
bichado2.appendChild(praga13);
praga13.innerHTML="Flavescência dourada";
praga13.value=13;

var modalTxt5=document.createElement("fieldset");
modalTxt5.id="modalTxt5";
modalTxt5.innerHTML= "Salvar Informações: ";
modalMain.appendChild(modalTxt5);

var salvarSim = document.createElement("spam");
salvarSim.id = "salvarSim";
salvarSim.classList="btn-add"
salvarSim.innerHTML = "⭕️";
salvarSim.onclick = pronto;
modalTxt5.appendChild(salvarSim);

var salvarNao = document.createElement("spam");
salvarNao.id = "salvarNao";
salvarNao.classList="btn-add"
salvarNao.innerHTML = "❌";
salvarNao.onclick = aindaN;
modalTxt5.appendChild(salvarNao);


/*====================================================*/
window.onclick = function(event) {
  var modal= document.getElementById("modalInfo")
    if (event.target == modal) {
      modalInfo.style.display = "none";
    }
  }
  /*========================modal body==========================*/
/*================= modal da info===================================*/



/*====================================================*/ 
function informacao(){  
  modalInfo.style.display= "block";
}

function pronto() {
  idLoteArray.pop();
  uvaArray.pop();
    regarArray.pop();
    aduboArray.pop();
    data.pop();
    tipo.pop();
    mapaArray.pop();
  idLoteArray.push("lote :"+contador);
  uvaArray.push("Tipo de uva :"+tipoUva.value);
  regarArray.push("Hora da irrigação :"+regar.value);
  aduboArray.push("Data adubagem :"+adubado.value);
  data.push("Data relato :"+bichado1.value);
  tipo.push("tipo praga :"+bichado2.value);
  mapaArray.push(loteArray);
  console.table(loteArray);
}

function aindaN() {
 console.log(mapaArray)

}
/*====================================================*/ 
contador++;
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
