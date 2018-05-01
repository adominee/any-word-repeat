'use strict';
const start=document.getElementById("start");
const keywords = document.getElementById("input-word-area");
const num = document.getElementById("input-num-area");
const resultDivided=document.getElementById("result-area");
//ループ関数
function loop(num,word){
    var words;
    words=word;
    for(var i =2;i<=num;i++){
        words=words+word;
    }
    return words
}
start.onclick=function(){
    const number=num.value;
    const word=keywords.value;
    if(number.length===0 || word.length===0){
        while(resultDivided.firstChild){
            resultDivided.removeChild(resultDivided.firstChild);
        }
        const paragraph=document.createElement('p');
        paragraph.innerHTML='<p class="alert">入力してください</p>';
        resultDivided.appendChild(paragraph);
        return;
    }
    if(isNaN(number)){
        while(resultDivided.firstChild){//子要素がある限り削除
            resultDivided.removeChild(resultDivided.firstChild);
        }
        const paragraph=document.createElement('p');
        paragraph.innerHTML='<p class="alert">数値を入力してください</p>';
        resultDivided.appendChild(paragraph);
        return;
        }
    //表示場所の作成
    while(resultDivided.firstChild){//子要素がある限り削除
        resultDivided.removeChild(resultDivided.firstChild);
    }
    const header =document.createElement('h3');
    header.innerHTML='実行結果';
    resultDivided.appendChild(header);

    const paragraph=document.createElement('p');
    const result=loop(number,word);
    paragraph.innerHTML=result;
    resultDivided.appendChild(paragraph);
}
num.onkeydown=(event)=>{
    if(event.keyCode===13){
        start.onclick();
    }
}