window.onload = function () {
  let x = document.getElementById('x')
  let y = document.getElementById('y')
  document.body.onmousemove = (e) => {
    x.innerText = 'x:' + e.clientX;
    y.innerText = 'y:' + e.clientY;
  };

  let colors = ['red', 'orange', 'gold', 'yellow', 'green', 'blue', 'purple', 'black']

  let startCanvas = function (e) {
    let canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.moveTo(e.clientX, e.clientY - 30);
    ctx.strokeStyle = 'black';
    canvas.onmousemove = (e) => {
      ctx.lineTo(e.clientX, e.clientY - 30);
      ctx.stroke();
    }
    document.body.onkeypress = (e) => {
      if (e.keyCode === 32) {
        ctx.beginPath();
        ctx.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
      }
    }

    canvas.addEventListener('dblclick', () => {
      ctx.strokeStyle = colors[Math.round(Math.random() * colors.length)];
    })
  }
  document.body.onclick = (e) => startCanvas(e);
};
