import { Console } from "@woowacourse/mission-utils";

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
        const body = custom[2];
        if (body.includes(delimiter)) {
          numbers = body.split(delimiter);
        } else numbers = [body];
      } else if (str.includes(",") || str.includes(":")) {
        numbers = str.split(/[,:]/);
      } else numbers = [str];

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
      throw error;
    }
  }
}

export default App;
