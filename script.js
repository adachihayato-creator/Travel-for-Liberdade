// 入力欄とプレビュー要素を取得する
const imageInput = document.getElementById("imageInput");
const nameInput = document.getElementById("nameInput");
const bioInput = document.getElementById("bioInput");
const profileBackground = document.getElementById("profileBackground");
const previewName = document.getElementById("previewName");
const previewBio = document.getElementById("previewBio");

// 初期表示に入れる文章
const defaultName = "サンプル名";
const defaultBio = "ここにプロフィール本文が表示されます。\n改行もそのまま反映されます。";

// 初期表示の文言を JavaScript 側でも揃える
previewName.textContent = defaultName;
previewBio.textContent = defaultBio;

// 名前入力をリアルタイムで反映する
nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  previewName.textContent = name || defaultName;
});

// プロフィール本文をリアルタイムで反映する
bioInput.addEventListener("input", () => {
  const bio = bioInput.value.trim();
  previewBio.textContent = bio || defaultBio;
});

// 画像が選択されたら、FileReader で読み込んで背景画像として設定する
imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  // 画像が未選択なら何もしない
  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    profileBackground.style.backgroundImage = `url("${reader.result}")`;
  };

  reader.readAsDataURL(file);
});
