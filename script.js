const canvas = document.querySelector('#draw'); // помещаем в переменную элемент div

const ctx = canvas.getContext('2d'); // помещаем в переменную контекст 2D рендеринга для рисования с мощью js
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // устанвалиаем ширину и высоту по размерам объекта window
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// выше "настройка" 
let isDrawing = false; //устанавливаем переменную в ложь, которая будет меняться в будущем при событиях мыши
let lastX = 0;
let lastY = 0; // также устанваливаем начальные значения, которые будут меняться при событиях мыши

function draw(e) {
    if(!isDrawing) return; //останавлвиает функцию, если нет события мыши (то есть предустановленное значение все еще false), если есть то работает код ниже
    console.log(e);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
//canvas.addEventListener('mousout', () => isDrawing = false);



