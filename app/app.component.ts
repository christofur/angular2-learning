import {Component} from 'angular2/core'; //This imports the Component function, which we'll in a minute

//Component tells Angular that this class is an Angular component
@Component({ //This is how we use the Component function that we imported on line 1

    //The selector specifies a simple CSS selector for a host HTML element named my-app. Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element in the host HTML.
    selector: 'my-app',

    //The template property holds the component's companion template. A template is a form of HTML that tells Angular how to render a view. Our template is a single line of HTML announcing "My First Angular App".
    template: '<h1>Angular 2 Learning</h1>'
})

export class AppComponent { }

