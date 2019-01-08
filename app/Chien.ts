import {Animal} from './Animal';

export namespace Chien {
    export class Enumerer {
        felin: Animal.Felin = new Animal.Felin();

        enumere(): void {
            console.log(this.felin.compter());
        }
    }
}