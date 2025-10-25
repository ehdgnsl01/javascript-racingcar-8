import InputOutput from "./InputOutput.js";

class App {
  async run() {
    const carNamesInput = await InputOutput.readCarNames();
    const roundCountInput = await InputOutput.readRoundCount();

    InputOutput.printInputResult(carNamesInput, roundCountInput);
  }
}

export default App;
