$(function() {
//全てのサイズに対応する処理

//タイトルの表示
  $(".title-text").t({
    delay: 1,
    speed: 120,
    speed_vary: true,
    mistype: 50,
  });

//モーダルの表示・非表示
$('#open-modal').click(function() {
    $('#contact-modal').fadeIn();
  });

$('#close-modal').click(function() {
    $('#contact-modal,#html-modal,#css-modal,#js-modal,#php-modal,#sql-modal').fadeOut();
  });

  $('#open-html-modal').click(function() {
    $('#html-modal').fadeIn();
  });

  $('#open-css-modal').click(function() {
    $('#css-modal').fadeIn();
  });

  $('#open-js-modal').click(function() {
    $('#js-modal').fadeIn();
  });

  $('#open-php-modal').click(function() {
    $('#php-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#html-modal,#css-modal,#js-modal,#php-modal').fadeOut();
  });

//レスポンシブ対応
$(window).ready(function() {
  var w = $(window).width();
  var x = 960;
  if(w > x) {
//960px以上の時のみの処理

  //ヘッダーの開閉
  var pos = 0; //※変数の初期化
  $(window).on('scroll', function(){ //スクロールが発生した際に実行
    if($(this).scrollTop() < pos ){ //scrollTopでスクロール位置取得&スクロール方向で分岐
      $('.header-nav').slideDown(); //上スクロール時の処理
    }else{
  $('.header-nav').slideUp(); //下スクロール時の処理
    }
    pos = $(this).scrollTop(); //スクロールが停止した位置を保持
  });

  // 各項目への移動
  $('header li a, .top-btn a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top -100;
    $('html, body').animate({'scrollTop': position}, 500);
  });
  } else if(w < x) {
//959px以上の時のみの処理

  // 各項目への移動
  $('header li a, .top-btn a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top -100;
    $('html, body').animate({'scrollTop': position}, 500);
  });

    //ハンバーガーメニューの処理
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();
  }
});

//ここより上に書く
});
