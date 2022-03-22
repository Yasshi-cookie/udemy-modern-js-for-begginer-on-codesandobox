import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタン
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  buttonComplete.addEventListener("click", () => {
    // 未完了リストから対象の<li>タグを削除
    deleteFromIncompleteList(buttonComplete.parentNode.parentNode);

    // クリックされた完了ボタンの親タグ<li>を「完了したTODO」に移す
    const completeTarget = buttonComplete.parentNode.parentNode;
    const targetText =
      completeTarget.firstElementChild.firstElementChild.innerText;

    completeTarget.firstElementChild.textContent = null;

    const p = document.createElement("p");
    p.innerText = targetText;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    completeTarget.firstChild.appendChild(p);
    completeTarget.firstChild.appendChild(backButton);

    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // 削除ボタン
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  buttonDelete.addEventListener("click", () => {
    // クリックされた削除ボタンの親タグ<li>を削除する
    deleteFromIncompleteList(buttonDelete.parentNode.parentNode);
  });

  // 階層構造を定義
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(buttonComplete);
  div.appendChild(buttonDelete);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
