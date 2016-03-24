import {Component} from 'angular2/core';

@Component({
  selector: 'my-puzzle',
  template: `
    <section class="setup"> 
      Enter your name please:
      <input type="text">
    </section>
    <section>
      <h2>The Puzzle</h2>
      <p>Ok,  welcome <span class="name">XXX</span></p>
      <br>
      Switch1:
      <input type="text"><br>
      Switch2:
      <input type="text"><br>
      Switch3:
      <input type="text"><br>
      Switch4:
      <input type="text"><br>
  </section>
  `
})

export class PuzzleComponent {

}
