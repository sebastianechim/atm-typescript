import { Button, SimpleAnimation, SolarSystemAnimation } from "./interactivity.js";
import { Professor } from "./models.js";

const professor = new Professor('Ben Sinclair', 40, 'Let me tell you a story about outer space..',
    ['Geometry', 'Geomatics', 'Celestial Navigation']);

let buttonList: any[] = [];
buttonList.push(new Button('Greet', 'btn', 'btn-1').createButton());
buttonList.push(new Button('Tell a story', 'btn', 'btn-2').createButton());
buttonList.push(new Button('Walk', 'btn', 'btn-3').createButton());
buttonList.push(new Button('Code', 'btn', 'btn-4').createButton());
buttonList.push(new Button('Show details', 'btn', 'btn-5').createButton());
buttonList.push(new Button('Show frame', 'btn', 'btn-6').createButton());
buttonList.push(new Button('Animate', 'btn', 'btn-7').createButton());
buttonList.push(new Button('Animate', 'btn', 'btn-8').createButton());
buttonList.push(new Button('Back Home', 'btn', 'btn-9').createButton());

buttonList[0].onclick = function () {
    professor.behaviour.greet();
}

buttonList[1].onclick = function () {
    professor.behaviour.tellStory(professor.story);
}

buttonList[2].onclick = function () {
    professor.behaviour.walk();
}

buttonList[3].onclick = function () {
    professor.behaviour.code();
}

buttonList[4].onclick = function () {
    alert(professor.toString());
}

let simpleAnimation = new SimpleAnimation('yellow', 'blue');

buttonList[5].onclick = function () {
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));
    simpleAnimation.init();
}

buttonList[6].onclick = function () {
    simpleAnimation.animateSquare();
}

buttonList[7].onclick = function () {
    document.body.innerHTML = '';
    new SolarSystemAnimation().init();
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(document.createElement('br'));
    document.body.appendChild(buttonList[8]);
}

buttonList[8].onclick = function () {
    location.reload();
}

for (let i = 0; i < buttonList.length - 1; i++) {
    if (i === 0) {
        let title1 = document.createElement('h2');
        title1.textContent = "Professor's Actions";
        document.body.appendChild(title1);
    } else if (i === 4) {
        let title2 = document.createElement('h2');
        title2.textContent = "Professor's Details";
        document.body.appendChild(title2);
    } else if (i === 5) {
        let title3 = document.createElement('h2');
        title3.textContent = "Square Animation";
        document.body.appendChild(title3);
    } else if (i === 7) {
        let title4 = document.createElement('h2');
        title4.textContent = "Solar System Animation";
        document.body.appendChild(title4);
    }

    document.body.appendChild(buttonList[i]);
}