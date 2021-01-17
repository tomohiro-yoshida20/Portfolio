'use strict';
{
  // hamberger
  const hamberger = document.getElementById('btn01');
  // header
  const header = document.getElementById('header');
  // modal
  const modal = document.getElementById('modal');

  // hamberger-menu クリック
  hamberger.addEventListener('click', () => {
    hamberger.classList.add('active');
    // header ウィンドウ上部へ隠す
    header.classList.add('active');
    // modal ウィンドウ上部からおろす
    modal.classList.add('active');
  });
  
  // modal のどこかをクリック
  modal.addEventListener('click', () => {
    hamberger.classList.remove('active');
    // header を下す
    header.classList.remove('active');
    // modal 戻す
    modal.classList.remove('active');
  });

  // typing
  const typing = (element, sentence) => {
    [...sentence].forEach((letter, index) => {
    // 1文字を0.1秒毎にずらして出力
      setTimeout(() => {
        document.querySelector(element).textContent += letter;
      }, 100 * ++index);
    });
  }

  // メインタイトル文字
  const titleLtter = "Tomohiro Yoshida 's" + "\n" + "Portforio Site";
  // サブタイトル文字
  const subLetter = 'Web Design & Engineering';

  // メインタイトルを出力
  typing('#title', titleLtter);
  // メインタイトル出力後サブを出力
  setTimeout(() => {typing('#title-sub', subLetter)}, titleLtter.length * 100);
}