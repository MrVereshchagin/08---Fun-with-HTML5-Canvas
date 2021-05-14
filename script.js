const canvas = document.querySelector('#draw'); // помещаем в переменную элемент div

const ctx = canvas.getContext('2d'); // помещаем в переменную контекст 2D рендеринга для рисования с мощью js
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // устанвалиаем ширину и высоту по размерам объекта window
ctx.strokeStyle = 'BADASS';
ctx.lineJoin = 'round';
