import { Console } from "@woowacourse/mission-utils";

function fail(msg) {
  throw new Error(`[ERROR] ${msg}`);
}

function splitItems(str) {
  const custom = str.match(/^\/\/(.)\\n(.*)$/);
  if (custom) {
    const delimiter = custom[1];
    const body = custom[2];
    return body.includes(delimiter) ? body.split(delimiter) : [body];
  } else if (/[,:]/.test(str)) {
    return str.split(/[,:]/);
  }
  return [str];
}

function validateItem(item) {
  if (item === "") {
    fail("빈 값은 계산할 수 없습니다.");
  }
  const num = Number(item);
  if (Number.isNaN(num)) {
    fail("숫자가 아닌 값이 포함되어 있습니다.");
  }
  if (!Number.isInteger(num) || num <= 0) {
    fail("양수인 정수만 입력할 수 있습니다.");
  }
}

function sumItems(items) {
  return items.reduce((acc, cur) => acc + Number(cur), 0);
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
      const items = splitItems(str);
      items.forEach(validateItem);
      const sum = sumItems(items);
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
