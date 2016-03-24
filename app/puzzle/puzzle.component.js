System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number);
                    console.log(this.switch2Number);
                    console.log(this.switch3Number);
                    console.log(this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n    <section class=\"setup\">\n    <h2>Game Setup</h2>\n      Enter your name please:\n      <input type=\"text\" #name (keyup)=\"0\">\n    </section>\n    <section\n    [ngClass]=\"{\n      puzzle: true,\n      solved:\n      switch1.value == switch1Number &&\n      switch2.value == switch2Number &&\n      switch3.value == switch3Number &&\n      switch4.value == switch4Number\n    }\"\n    [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n      <h2>\n      The Puzzle |\n      {{switch1.value == switch1Number &&\n      switch2.value == switch2Number &&\n      switch3.value == switch3Number &&\n      switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n      </h2>\n      <p>Ok,  welcome <span class=\"name\">{{name.value}}</span></p>\n      <br>\n      Switch1:\n      <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n      Switch2:\n      <input type=\"text\"  #switch2 (keyup)=\"0\"><br>\n      Switch3:\n      <input type=\"text\"  #switch3 (keyup)=\"0\"><br>\n      Switch4:\n      <input type=\"text\"  #switch4 (keyup)=\"0\"><br>\n  </section>\n  <h2 [hidden]=\"switch1.value != switch1Number ||\n  switch2.value != switch2Number ||\n  switch3.value != switch3Number ||\n  switch4.value != switch4Number\">Congratulations {{name.value}}, you did it!<h2>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOENBO2dCQUFBO2dCQWlCQSxDQUFDO2dCQVhDLGtDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkEzREg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLGt4Q0FzQ1Q7cUJBQ0YsQ0FBQzs7bUNBQUE7Z0JBbUJGLHNCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCw2Q0FpQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LXB1enpsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cclxuICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cclxuICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uXHJcbiAgICBbbmdDbGFzc109XCJ7XHJcbiAgICAgIHB1enpsZTogdHJ1ZSxcclxuICAgICAgc29sdmVkOlxyXG4gICAgICBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiZcclxuICAgICAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmXHJcbiAgICAgIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJlxyXG4gICAgICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXJcclxuICAgIH1cIlxyXG4gICAgW25nU3R5bGVdPVwie2Rpc3BsYXk6IG5hbWUudmFsdWUgPT09ICcnID8gJ25vbmUnIDogJ2Jsb2NrJ31cIj5cclxuICAgICAgPGgyPlxyXG4gICAgICBUaGUgUHV6emxlIHxcclxuICAgICAge3tzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiZcclxuICAgICAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmXHJcbiAgICAgIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJlxyXG4gICAgICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXIgPyAnU09MVkVEJyA6ICdOT1QgU09MVkVEJ319XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxwPk9rLCAgd2VsY29tZSA8c3BhbiBjbGFzcz1cIm5hbWVcIj57e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XHJcbiAgICAgIDxicj5cclxuICAgICAgU3dpdGNoMTpcclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDEgKGtleXVwKT1cIjBcIj48YnI+XHJcbiAgICAgIFN3aXRjaDI6XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICAjc3dpdGNoMiAoa2V5dXApPVwiMFwiPjxicj5cclxuICAgICAgU3dpdGNoMzpcclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICNzd2l0Y2gzIChrZXl1cCk9XCIwXCI+PGJyPlxyXG4gICAgICBTd2l0Y2g0OlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgI3N3aXRjaDQgKGtleXVwKT1cIjBcIj48YnI+XHJcbiAgPC9zZWN0aW9uPlxyXG4gIDxoMiBbaGlkZGVuXT1cInN3aXRjaDEudmFsdWUgIT0gc3dpdGNoMU51bWJlciB8fFxyXG4gIHN3aXRjaDIudmFsdWUgIT0gc3dpdGNoMk51bWJlciB8fFxyXG4gIHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM051bWJlciB8fFxyXG4gIHN3aXRjaDQudmFsdWUgIT0gc3dpdGNoNE51bWJlclwiPkNvbmdyYXR1bGF0aW9ucyB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCE8aDI+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCB7XHJcbiAgc3dpdGNoMU51bWJlcjogbnVtYmVyO1xyXG4gIHN3aXRjaDJOdW1iZXI6IG51bWJlcjtcclxuICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XHJcbiAgc3dpdGNoNE51bWJlcjogbnVtYmVyO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICB0aGlzLnN3aXRjaDJOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgIHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMk51bWJlcik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN3aXRjaDNOdW1iZXIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2g0TnVtYmVyKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
