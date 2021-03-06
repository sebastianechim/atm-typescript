import { PersonType, ProfessorType, BehaviourType } from './types.js'

export class Person implements PersonType {
    name: String;
    age: number;
    story: String;
    behaviour: Behaviour;

    constructor(name: String, age: number, story: String) {
        this.name = name;
        this.age = age;
        this.story = story;
        this.behaviour = new Behaviour();
    }
}

export class Professor extends Person implements ProfessorType {
    courses: String[];

    constructor(name: String, age: number, story: String, courses: String[]) {
        super(name, age, story);
        this.courses = courses;
        this.story = story;
    }

    toString() {
        return JSON.stringify(this);
    }
}

export class Behaviour implements BehaviourType {
    greet(): void {
        alert("Hello world!");
    }

    tellStory(story: String): void {
        alert(story);
    }

    walk(): void {
        alert("I am walking..");
    }

    code(): void {
        alert("I am coding..");
    }
}