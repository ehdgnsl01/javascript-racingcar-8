import InputOutput from "./InputOutput.js";
import Validator from "./Validator.js";
import RaceInitializer from "./RaceInitializer.js";
import RandomMove from "./RandomMove.js";
import Winner from "./Winner.js";

class App {
  async run() {
    const carNamesInput = await InputOutput.readCarNames();
    const roundCountInput = await InputOutput.readRoundCount();

    const carNames = Validator.validateCarNames(carNamesInput);
    const roundCount = Validator.validateRoundCount(roundCountInput);

    const cars = RaceInitializer.initializeCars(carNames);

    RandomMove.runRace(cars, roundCount);

    const winners = Winner.getWinners(cars);
    Winner.printWinners(winners);
  }
}

export default App;
