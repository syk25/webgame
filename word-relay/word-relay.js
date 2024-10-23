const number = Number(prompt("참가자는 몇명인가요?"));
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let newWord; // 현재 단어
let word; // 제시어
const onInput = (event) => {
    newWord = event.target.value;
};
const inputByEnter = (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        onClickButton();
    }
};

const onClickButton = () => {
    if (!word || word.at(-1) === newWord[0]) {
        // 비어 있음
        word = newWord;
        $word.textContent = word;
        const order = Number($order.textContent);
        if (order + 1 > number) {
            $order.textContent = 1;
        } else {
            $order.textContent = order + 1;
        }
    } else {
        alert("틀린 단어입니다!");
    }
    $input.value = "";
    $input.focus();
};
$input.addEventListener("input", onInput);
$input.addEventListener("keypress", inputByEnter);
$button.addEventListener("click", onClickButton);
