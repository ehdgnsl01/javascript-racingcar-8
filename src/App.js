import InputOutput from "./InputOutput.js";

class App {
  async run() {
    const carNames = await InputOutput.readCarNames();
    const roundCount = await InputOutput.readRoundCount();

    InputOutput.printInputResult(carNames, roundCount);
  }
}

export default App;
