// 画像とテキストを更新する関数
function upDate(previewPic) {
    // イベントがトリガーされているかを確認するためにコンソールにメッセージを表示
    console.log("画像がホバーされました！");

    // previewPicのaltおよびsrc属性を取得
    var altText = previewPic.alt;
    var imageUrl = previewPic.src;

    // previewPic変数に関する情報をコンソールにログ
    console.log("Altテキスト:", altText);
    console.log("画像のソース:", imageUrl);

    // 'hoveredImage'というIDを持つ要素のテキストを更新
    document.getElementById('hoveredImage').textContent = altText;

    // 'hoveredImage'というIDを持つ要素の背景画像を更新
    document.getElementById('hoveredImage').style.backgroundImage = 'url(' + imageUrl + ')';
}

// 変更を元に戻す関数
function undo() {
    // 背景画像を元の値にリセット
    document.getElementById('hoveredImage').style.backgroundImage = "url('')";

    // テキストを元の値にリセット
    document.getElementById('hoveredImage').textContent = "画像にホバーして表示します。";
}
