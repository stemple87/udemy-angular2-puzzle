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
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n    <section class=\"setup\"> \n      Enter your name please:\n      <input type=\"text\">\n    </section>\n    <section>\n      <h2>The Puzzle</h2>\n      <p>Ok,  welcome <span class=\"name\">XXX</span></p>\n      <br>\n      Switch1:\n      <input type=\"text\"><br>\n      Switch2:\n      <input type=\"text\"><br>\n      Switch3:\n      <input type=\"text\"><br>\n      Switch4:\n      <input type=\"text\"><br>\n  </section>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBekJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxxYkFrQlQ7cUJBQ0YsQ0FBQzs7bUNBQUE7Z0JBSUYsc0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELDZDQUVDLENBQUEiLCJmaWxlIjoicHV6emxlL3B1enpsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LXB1enpsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj4gXHJcbiAgICAgIEVudGVyIHlvdXIgbmFtZSBwbGVhc2U6XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxoMj5UaGUgUHV6emxlPC9oMj5cclxuICAgICAgPHA+T2ssICB3ZWxjb21lIDxzcGFuIGNsYXNzPVwibmFtZVwiPlhYWDwvc3Bhbj48L3A+XHJcbiAgICAgIDxicj5cclxuICAgICAgU3dpdGNoMTpcclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PGJyPlxyXG4gICAgICBTd2l0Y2gyOlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48YnI+XHJcbiAgICAgIFN3aXRjaDM6XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjxicj5cclxuICAgICAgU3dpdGNoNDpcclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PGJyPlxyXG4gIDwvc2VjdGlvbj5cclxuICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IHtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
