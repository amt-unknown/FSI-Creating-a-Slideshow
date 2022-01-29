const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
var position = 0; 

function setLoadout(position){
    document.querySelector(".image").setAttribute('src',images[position]);
    document.getElementById("button-"+position).textContent = "●";
}

function cycleRight(){
    document.getElementById("button-"+position).textContent = "○";
    if(position<images.length-1){
        position++;
    }
    else{
        position = 0; 
    }
}

function cycleLeft(){
    document.getElementById("button-"+position).textContent = "○";
    if(position == 0){
        position = images.length-1;
    }
    else{
        position--;
    }
}



document.querySelector(".previous").addEventListener('click', function() {
    cycleLeft();
    setLoadout(position);
});

document.querySelector(".next").addEventListener('click', function() {
    cycleRight();
    setLoadout(position);
    
});

document.getElementById('button-0').addEventListener('click', function(){
    document.getElementById("button-"+position).textContent = "○";
    position = 0; 
    setLoadout(position);
})
document.getElementById('button-1').addEventListener('click', function(){
    document.getElementById("button-"+position).textContent = "○";
    position = 1; 
    setLoadout(position);
});
document.getElementById('button-2').addEventListener('click', function(){
    document.getElementById("button-"+position).textContent = "○";
    position = 2; 
    setLoadout(position);
});
document.getElementById('button-3').addEventListener('click', function(){
    document.getElementById("button-"+position).textContent = "○";
    position = 3; 
    setLoadout(position);
});
document.getElementById('button-4').addEventListener('click', function(){
    document.getElementById("button-"+position).textContent = "○";
    position = 4; 
    setLoadout(position);
});
document.getElementById('button-5').addEventListener('click', function(){
    document.getElementById("button-"+position).textContent = "○";
    position = 5; 
    setLoadout(position);
});



setLoadout(position);