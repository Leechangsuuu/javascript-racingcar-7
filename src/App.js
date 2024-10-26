import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    try{
      const inputCar = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
      const car = inputCar.split(",").map(name=>name.trim());
      
      const inputTryNum = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
      const tryNum = parseInt(inputTryNum, 10);

    }catch{
      console.error("[ERROR]", error.message);
    }
  }
}

export default App;
