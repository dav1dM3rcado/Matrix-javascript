const main =()=>{
    let
    canvas= document.querySelector('canvas'),
    conntext = canvas.getContext('2d'),
    w = window.innerWidth,
    h = window.innerHeight,
    fontSize = 16,
    columns = Math.floor(w/fontSize),
    drops =[],
    str = 'JavaScript Matrix Effec',
    matrix = ()=>{
        conntext.fillStyle = 'rgba(0,0,55,.05)';
        conntext.fillRect(0,0,w,h);
        conntext.fontSize = `650 ${fontSize}px`;
        conntext.fillStyle ='#ff0';
        for (let i = 0; i < columns; i++) {
            let
            j = Math.floor(Math.random()*str.length),
            x = i*fontSize,
            y = drops[i]*fontSize;
            conntext.fillText(str[j],x,y);
            y >= canvas.height && Math.random() > 0.99 
            ? drops[i]= 0
            : drops[i]++;
        };
    };
    canvas.width = w;
    canvas.hidden = h;
    for (let i =0; i< columns; i++){
        drops.push(0);
    };
    matrix();setInterval(matriz,15);

}; document.addEventListener('DOMContentLoaded', main)