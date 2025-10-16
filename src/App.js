import { Console } from "@woowacourse/mission-utils";

// 예외처리
//

class App {
  async run() {
    // 문자열 입력
    const str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    let numbers = [];
    let custom = str.match(/^\/\/(.)\\n(.*)$/); // 커스텀 구분자가 있는지 확인
    if (custom) {
      const delimiter = custom[1];
      numbers = custom[2].split(delimiter);
    } else {
      numbers = str.split(/[,:]/); // 커스텀 구분자가 없을 경우에는 쉼표와 콜론을 구분자로
    }

    // 덧셈
    let sum = 0;
    numbers.forEach((num) => {
      sum += Number(num); // 요소 하나씩 돌면서 덧셈
    });
    Console.print(`결과 : ${sum}`);
  }
}

export default App;
