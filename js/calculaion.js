


document.getElementById("btn-calculate").addEventListener('click' ,function(){

    let incomefield=parseFloat(document.getElementById('incomefield').value);
    let totalExpence=totalExpences();
    
    let totalExpensesResult=document.getElementById('total-expenses');
    let totalBalanceResult=document.getElementById('total-balance');
    if(incomefield<totalExpence){
        alert('You cannot use more money then you earn!');
    }
    else if(typeof totalExpence=='number' && typeof incomefield=='number'){
        totalExpensesResult.innerText=totalExpence;
    
        let Balance=incomefield-totalExpence;
        totalBalanceResult.innerText=Balance;
    }
    
});

document.getElementById('btnsave').addEventListener('click', function(){
    let save=Save();
});

function Save(){
    let incomefield=parseFloat(document.getElementById('incomefield').value);
    let totalBalanceResult=parseFloat(document.getElementById('total-balance').innerText);
    
    
    let percentfield=parseFloat(document.getElementById('savefield').value);
    let saveAmount=(incomefield/100)*percentfield;
    let totalRemBalanceResult=totalBalanceResult-saveAmount;
    if(Number.isNaN(percentfield)){
        alert('Please Enter valid Percent  ');
    }
    else if(totalBalanceResult<saveAmount){
        alert('You cannot Save More then you have.');
    }
    else{
        document.getElementById('saveammount').innerText=saveAmount;
        document.getElementById('remainingbalance').innerText=totalRemBalanceResult;
    }
    console.log(saveAmount);

}
function totalExpences(){

    let foodCost=parseFloat(document.getElementById('foodfield').value);
    let rentCost=parseFloat(document.getElementById('rentfield').value);
    let clothesCost=parseFloat(document.getElementById('clothesfield').value);
    if(Number.isNaN(foodCost)){
        alert('Food cost Has to be a number ');
    }
    else if(Number.isNaN(rentCost)){
        alert('Rent cost Has to be a number ');
    }
    else if(Number.isNaN(clothesCost)){
        alert('clothes cost Has to be a number ');
    }
    else if(0>foodCost){
        alert('Food cost Has to be a Possitive number ');
    }
    else if(0>rentCost){
        alert('Rent cost Has to be a Possitive number ');
    }
    else if(0>clothesCost){
        alert('clothes cost Has to be a Possitive number ');
    }
    else{

        let totalExpenc=foodCost+rentCost+clothesCost;
        document.getElementById('foodfield').value='';
        document.getElementById('rentfield').value='';
        document.getElementById('clothesfield').value='';
        return totalExpenc;

    }
    



}