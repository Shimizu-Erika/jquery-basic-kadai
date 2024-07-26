// HTMLドキュメントが読み込み完了した際に
$(window).on('load', () => {
  // コメントをコンソールに出力
  console.log('loadイベントが発生しました');
});

// 画面スクロールした際に
$(window).on('scroll', () => {
  // コメントをコンソールに出力
  console.log('scrollイベントが発生しました');
});