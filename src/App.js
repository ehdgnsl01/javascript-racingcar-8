import InputOutput from "./InputOutput.js";
import Validator from "./Validator.js";

class App {
  async run() {
    const carNamesInput = await InputOutput.readCarNames();
    const roundCountInput = await InputOutput.readRoundCount();

    const carNames = Validator.validateCarNames(carNamesInput);

    InputOutput.printInputResult(carNames.join(","), roundCountInput);
  }
}

export default App;
