export interface PersonType {
    name: String;
    age: number;
    story: String;
    behaviour: BehaviourType;
}

export interface ProfessorType {
    courses: String[];
}

export interface BehaviourType {
    greet(): void;
    tellStory(story: String): void;
    walk(): void;
    code(): void;
}

export interface ButtonType {
    name: String;
    className: String;
    tagName: String;
    createButton(): any;
}

export interface SimpleAnimationType {
    frameColor: String;
    squareColor: String;
    init(): void;
    animateSquare(): void;
    frame(elem: HTMLElement, pos: number): void;
}

export interface SolarSystemAnimationType {
    sun: HTMLImageElement;
    moon: HTMLImageElement;
    earth: HTMLImageElement;
    init(): void;
    draw(sun: HTMLImageElement, moon: HTMLImageElement, earth: HTMLImageElement): void;
}