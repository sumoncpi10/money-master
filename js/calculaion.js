


document.getElementById("btn-calculate").addEventListener('click' ,function(){

    let incomefield=parseFloat(document.getElementById('incomefield').value);
    let totalExpence=totalExpences();
    
    let totalExpensesResult=document.getElementById('total-expenses');
    let totalBalanceResult=document.getElementById('total-balance');
    if(incomefield<totalExpence){
        alert('You cannot use more money then you earn!');
    }
    else{
        totalExpensesResult.innerText=totalExpence;
    
        let Balance=incomefield-totalExpence;
        totalBalanceResult.innerText=Balance;
    }
    

    




});

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