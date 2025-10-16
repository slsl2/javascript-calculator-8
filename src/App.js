import { Console } from "@woowacourse/mission-utils";

// 예외처리
// 입력 문자열(str)이 빈 값일 경우
// 구분자가 없는 경우
// 구분자로 구분했는데 빈 값이 있을 경우
// 구분자로 구분했는데 숫자가 아닌 경우
// 구분자로 구분했는데 숫잔데 양수가 아닌 경우 (정수가 아니거나, 0이거나 음수일 경우)

function fail(msg) {
  throw new Error(`[ERROR] ${msg}`);
}

class App {
  async run() {
    try {
      const str = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      if (str.length === 0) {
        fail("빈 문자열입니다.");
      }
      let numbers = [];
      const custom = str.match(/^\/\/(.)\\n(.*)$/);
      if (custom) {
        const delimiter = custom[1];
        if (!custom[2].includes(delimiter)) {
          fail("구분자가 없습니다.");
        }
        numbers = custom[2].split(delimiter);
      } else if (str.includes(",") || str.includes(":")) {
        numbers = str.split(/[,:]/);
      } else fail("구분자가 없습니다.");

      let sum = 0;
      numbers.forEach((item) => {
        if (item === "") {
          fail("빈 값은 계산할 수 없습니다.");
        }
        if (Number.isNaN(item)) {
          fail("숫자가 아닌 값이 포함되어 있습니다.");
        }
        let num = Number(item);
        if (!Number.isInteger(num)) {
          fail("정수만 입력할 수 있습니다.");
        }
        if (num <= 0) {
          fail("0 또는 음수는 입력할 수 없습니다.");
        }
        sum += num;
      });
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(
        error.message ||
          "[ERROR] 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요."
      );
    }
  }
}

export default App;
