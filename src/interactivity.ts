import { ButtonType, SimpleAnimationType, SolarSystemAnimationType } from "./types.js";

export class Button implements ButtonType {
    name: String;
    className: String;
    tagName: String;

    constructor(name: String, className: String, tagName: String) {
        this.name = name;
        this.className = className;
        this.tagName = tagName;
    }

    createButton(): any {
        let button = document.createElement('button');
        button.textContent = this.name.toString();
        button.classList.add(this.className.toString());
        button.id = this.tagName.toString();
        return button;
    }
}

export class SimpleAnimation implements SimpleAnimationType {
    frameColor: String;
    squareColor: String;
    interval: number;

    constructor(frameColor: String, squareColor: String) {
        this.frameColor = frameColor;
        this.squareColor = squareColor;
        this.interval = 0;
    }

    init(): void {
        if (document.getElementById('div-frame') === null) {
            let divFrame = document.createElement('div');
            divFrame.id = "div-frame";
            divFrame.style.width = '300px';
            divFrame.style.height = '300px';
            divFrame.style.backgroundColor = this.frameColor.toString();
            divFrame.style.position = 'absolute';

            let divSquare = document.createElement('div');
            divSquare.id = "div-square";
            divSquare.style.width = '50px';
            divSquare.style.height = '50px';
            divSquare.style.backgroundColor = this.squareColor.toString();
            divSquare.style.position = 'relative';

            divFrame.appendChild(divSquare);
            document.body.appendChild(divFrame);
        }
    }

    animateSquare(): void {
        let elem = document.getElementById("div-square") as HTMLElement;

        if (elem) {
            let pos = 0;
            clearInterval(this.interval);
            this.interval = setInterval(() => { pos = this.frame(elem, pos) }, 5);
        } else
            alert('Initialise the frame first!');
    }

    frame(elem: HTMLElement, pos: number): number {
        if (pos == 250) {
            clearInterval(this.interval);
            return 0;
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
            return pos;
        }
    }
}

export class SolarSystemAnimation implements SolarSystemAnimationType {
    sun: HTMLImageElement = new Image();
    moon: HTMLImageElement = new Image();
    earth: HTMLImageElement = new Image();

    init() {
        this.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
        this.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
        this.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';

        let canvas: HTMLCanvasElement;
        canvas = document.createElement('CANVAS') as HTMLCanvasElement;
        canvas.id = 'canvas-1';
        canvas.width = 300;
        canvas.height = 300;
        document.body.appendChild(canvas);

        window.requestAnimationFrame(() => this.draw(this.sun, this.moon, this.earth));
    }

    draw(sun: HTMLImageElement, moon: HTMLImageElement, earth: HTMLImageElement) {
        let canvas = document.getElementById('canvas-1') as HTMLCanvasElement;

        let ctx = canvas.getContext('2d');

        if (ctx) {
            ctx.globalCompositeOperation = 'destination-over';
            ctx.clearRect(0, 0, 300, 300); // Clear canvas

            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
            ctx.save();
            ctx.translate(150, 150);

            // Earth
            let time = new Date();
            ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
            ctx.translate(105, 0);
            ctx.fillRect(0, -12, 40, 24); // Shadow
            ctx.drawImage(this.earth, -12, -12);

            // Moon
            ctx.save();
            ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
            ctx.translate(0, 28.5);
            ctx.drawImage(this.moon, -3.5, -3.5);
            ctx.restore();

            ctx.restore();

            ctx.beginPath();
            ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
            ctx.stroke();

            ctx.drawImage(this.sun, 0, 0, 300, 300);
        }

        window.requestAnimationFrame(() => this.draw(this.sun, this.moon, this.earth));
    }
}