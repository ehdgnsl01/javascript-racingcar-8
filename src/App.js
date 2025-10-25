import InputOutput from "./InputOutput.js";
import Validator from "./Validator.js";

class App {
  async run() {
    const carNamesInput = await InputOutput.readCarNames();
    const roundCountInput = await InputOutput.readRoundCount();

    const carNames = Validator.validateCarNames(carNamesInput);
    const roundCount = Validator.validateRoundCount(roundCountInput);

    InputOutput.printInputResult(carNames.join(","), roundCount);
  }
}

export default App;
