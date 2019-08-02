function piggy(s = 5) {
    var getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    var volatile = 3;
    var speed = Math.floor(s);
    var doc = document;
    var win = window;
    var node = doc.createElement('span');
    var documentElement = doc.documentElement;
    var style = node.style;    
    var body = doc.body;
    var w = body.clientWidth;
    var h = body.clientHeight;
    var pig = [" ,,_\no\"  )~\n ''''", " ,,_\no\"  )~\n \" ''", " ,,_\no\"  )~\n '' \""];
    node.textContent = pig[0];
    style.all = 'unset';
    style.position = 'absolute';
    style.whiteSpace = 'pre';
    style.fontFamily = 'monospace';
    style.fontSize = '2em';
    style.lineHeight = '1.2em';
    style.zIndex = 9999;
    style.textShadow = '5px 5px 10px #000';
    body.appendChild(node);
    var l = w - node.clientWidth - volatile;
    var t = h - node.clientHeight - volatile;
    style.left = l + 'px';
    style.top = t + 'px';
    var i = 0;
    var pl = l;
    var pt = t;
    var timer = setInterval(() => {
        node.textContent = pig[i];
        pt = t + getRandomInt(-1*volatile, volatile);
        style.left = pl + 'px';
        style.top = pt + 'px';
        i++;
        pl = pl - speed;
        if(i >= pig.length) i = 0;
        if(pl < -100) {
            clearInterval(timer);
            body.removeChild(node);
        }
    }, 300);
}
