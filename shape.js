let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const canvasWidth = canvas.width/2;
const canvasHeight = canvas.height/2;
let numberOfCircle = 150;
let maxRadius = 25;

const drawCircles = (count, radius) => {
    for(let i=0;i<count;i++){
        let rndWidth = Math.floor(Math.random() * canvasWidth*2);
        let rndHeight = Math.floor(Math.random() * canvasHeight*2);
        let rndRadius = Math.floor(Math.random() * radius) + 1;
        ctx.fillStyle = getRandomColor();
        ctx.beginPath();
        ctx.arc(rndWidth,rndHeight,rndRadius,0,Math.PI*2)
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.fill();
    }
}

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

drawCircles(numberOfCircle,maxRadius);

document.getElementById("numberOfCircle").addEventListener("change", function(){
    numberOfCircle = Number(document.getElementById("numberOfCircle").value);
    drawCircles(numberOfCircle,maxRadius);
})

document.getElementById("maxRadius").addEventListener("change", function(){
    maxRadius = Number(document.getElementById("maxRadius").value);
    drawCircles(numberOfCircle,maxRadius);
})

