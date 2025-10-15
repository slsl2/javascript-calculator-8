import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    const arr = str.split(/[,:]/);
    let sum = 0;
    arr.forEach((num) => {
      sum += Number(num);
    });
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
