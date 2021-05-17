const canvas = document.querySelector('#draw'); // помещаем в переменную элемент div

const ctx = canvas.getContext('2d'); // помещаем в переменную контекст 2D рендеринга для рисования с мощью js
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // устанвалиаем ширину и высоту по размерам объекта window
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100; 
// выше "настройка" 
let isDrawing = false; //устанавливаем переменную в ложь, которая будет меняться в будущем при событиях мыши
let lastX = 0;
let lastY = 0; // также устанваливаем начальные значения, которые будут меняться при событиях мыши
let hue = 0;
let direction = true;
// ctx.globalCompositeOperation = 'multiply';


function draw(e) {
    if(!isDrawing) return; //останавлвиает функцию, если нет события мыши (то есть предустановленное значение все еще false), если есть то работает код ниже
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    //начало
    ctx.moveTo(lastX, lastY);
    // конец
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    hue++;
    if(hue >= 360) {
        hue = 0;
    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousout', () => isDrawing = false);



