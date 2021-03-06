// トップに戻る処理
// ボタンの表示、非表示を切り替える関数
const updateButton = () => {
  if($(window).scrollTop() >= 300) {
    // 300px以上スクロールされた
    // ボタン表示
    $('.back-to-top').fadeIn();
  } else {
    // ボタンを非表示
    $('.back-to-top').fadeOut();
  }
};

// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);
// ボタンをクリックしたらページトップにスクロールする
$('.back-to-top').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();
  // 600ミリ秒かけてトップに戻る
  $('html, body').animate({ scrollTop: 0 }, 600);
});
