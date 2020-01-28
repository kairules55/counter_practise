const start = document.querySelector('button');

start.addEventListener('click', function () {
    let count = 1;
    while (count < 9) {
        let div2 = document.querySelector('#div2');
        let time = 50;
        let t = 0;

        let id = setInterval(function () {
            if (t >= 50) {
                clearInterval(id);
                return;
            }
            let trans = "translate(0," + -t + "px)";
            div2.style.transform = trans;
            t++;
        }, 10);

        //This Lines of code should execute once the setInterval finishes it job.
        let div1 = document.querySelector('#div1');
        div1.parentNode.removeChild(div1);
        div2.id = "div1";
        let newElement = document.createElement('div');
        newElement.id = "div2";
        let container = document.querySelector('#container');
        container.appendChild(newElement);
        console.log(time, div2, div1, newElement, t);
        count++;
    }
});