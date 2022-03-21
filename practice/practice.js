/**
 * const, let等の変数宣言
 */
// var val1 = "変数だよ";
// console.log(val1);

// val1 = "変数を上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

// let val2 = "再宣言";

// const val3 = "定数だよ";
// console.log(val3);

// val3 = "上書き";

// const val4 = {
//   name: "teruya",
//   age: 29,
// };

// val4.name = "yasushi";
// console.log(val4.name);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "teruya";
// const age = 29;

// // 私の名前はteruyaです。年齢は29歳です。
// // 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた場合
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数の場合
// const func2 = (str) => {
//   return str;
// };
// // const func2 = (str) => str; でもOK

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// オブジェクトの場合
// const myProfile = {
//   name: "teruya",
//   age: 29,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// // 配列の場合
// const myProfile = ['teruya', 29];
// // const { name, age } = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message3);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("teruya");

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const array1 = [1, 2];
// console.log(array1);
// console.log(...array1)

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(array1[0], array1[1]);
// sumFunc(...array1);

// 集約
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array2;
// console.log(num1);
// console.log(num2);
// console.log(array3);

// 配列のコピー、結合
// const array4 = [10, 20];
// const array5 = [30, 40];

// const array6 = [...array4, ...array5];
// console.log(array6);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArray = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArray.length; index++) {
//   console.log(nameArray[index]);
// }

// const nameArray2 = nameArray.map((name) => {
//   return `${name}さん`;
// })
// console.log(nameArray2);

// nameArray.map((name, index) => console.log(`${index + 1}番目は${name}です。`))

// const numArray = [1, 2, 3, 4, 5];
// const oddArray = numArray.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(oddArray);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? 'true' : 'false';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
// console.log(formattedNum);

/**
 * 論理演算子のほんとうの意味を知ろう && ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueです");
}

if (flag1 && flag2) {
  console.log("1と2はtrueです");
}

// p || q   q
//          1 0
// p      1 1 1
//  0 1 0

// p || q の挙動
// pがtrue  => pを返す
// pがfalse => qを返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// p && q   q
//          1 0
// p      1 1 0
//        0 0 0

// p && q の挙動
// pがfalse => pを返す
// pがtrue  => qを返す
const num2 = null;
const fee2 = num2 || "何かが設定されたました";
console.log(fee2);
