import {Component, computed, signal, WritableSignal} from '@angular/core';
import {Fieldset} from "primeng/fieldset";
import {Button} from "primeng/button";

@Component({
  selector: 'app-women-and-code-demo-page',
  imports: [
    Fieldset,
    Button
  ],
  templateUrl: './women-and-code-demo-page.component.html',
  styleUrl: './women-and-code-demo-page.component.scss'
})
export class WomenAndCodeDemoPageComponent {
  // let's create a regular variable
  regularVariable: number = 1;
  // and a signal variable
  signalVariable: WritableSignal<number> = signal(1);

  // let's add functions that will increment both values by 1 and log some inforamtion to the console
  incrementRegularValue(): void {
    console.clear();
    console.log('increment regular value');
    this.regularVariable++;
  }

  incrementSignalValue(): void {
    console.clear();
    console.log('increment SIGNAL value');
    this.signalVariable.update(currentValue => currentValue + 1);
  }

// let's add functions that will return a value 3 times higher the current regular and signal values respectively, plus some logging to see when it will get reevaluated
  multiplyRegularValue(): number {
    console.log('I am multiplying regular value');
    return this.regularVariable * 3;
  }

  multiplySignalValue(): number {
    console.log('I am multiplying signal value');
    return this.signalVariable() * 3;
  }

  // let's add computed signals that will return a value 2 times higher the current regular and signal values respectively, plus some logging to see when it will get reevaluated
  // Question: does the multiplyRegularReturnSignal logic even make sens? Why not?
  multiplyRegularReturnSignal = computed(() => {
    console.log('I am multiplying regular value and returning signal');
    return this.regularVariable * 2
  });
  multiplySignalReturnSignal = computed(() => {
    console.log('I am multiplying SIGNAL value and returning signal');
    return this.signalVariable() * 2
  });

}
