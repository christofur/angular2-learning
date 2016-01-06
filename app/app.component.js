System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //Component tells Angular that this class is an Angular component
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    //This imports the Component function, which we'll in a minute
                    core_1.Component({
                        //The selector specifies a simple CSS selector for a host HTML element named my-app. Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element in the host HTML.
                        selector: 'my-app',
                        //The template property holds the component's companion template. A template is a form of HTML that tells Angular how to render a view. Our template is a single line of HTML announcing "My First Angular App".
                        template: '<h1>Angular 2 Learning</h1>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map