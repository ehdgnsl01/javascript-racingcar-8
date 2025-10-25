import InputOutput from "./InputOutput.js";
import Validator from "./Validator.js";
import RaceInitializer from "./RaceInitializer.js";

class App {
  async run() {
    const carNamesInput = await InputOutput.readCarNames();
    const roundCountInput = await InputOutput.readRoundCount();

    const carNames = Validator.validateCarNames(carNamesInput);
    const roundCount = Validator.validateRoundCount(roundCountInput);

    const cars = RaceInitializer.initializeCars(carNames);

    InputOutput.printInputResult(cars.map(car => car.name).join(", "), roundCount);
  }
}

export default App;
