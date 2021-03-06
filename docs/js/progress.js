if (window.matchMedia('(max-width: 375px)').matches) {
  //スマホ処理
  let skillset = {'html': 60, 'css': 51, 'js': 40, 'php': 64, 'sql': 24};
  
  for (let keys in skillset) {
    let key = '#' + keys;
  let bar = new ProgressBar.Line(key, {
    strokeWidth: 9, //線の太さ
    easing: 'easeInOut', //エフェクトの加速
    duration: 1700, //アニメーションの速度
    color: '#5ac8ed',//バーのカラー
    trailColor: '#d1d1d1', //下線のカラー
    trailWidth: 10, //下線の太さ
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: 'black', //値のカラー
        position: 'absolute',
        right: '0',
        top: '50px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#9ced5a', a:0},
    to: {color: '#5ac8ed', a:1},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * skillset[keys] + 24.4) + ' %');
      bar.path.setAttribute('stroke', state.color);
    }
  });
  //バーの長さ
  bar.animate(skillset[keys] / 100);  // Number from 0.0 to 1.0
  }
} else if (window.matchMedia('(max-width:559px)').matches) {
  //PC処理
  let skillset = {'html': 60, 'css': 51, 'js': 40, 'php': 64, 'sql': 24};
  
  for (let keys in skillset) {
    let key = '#' + keys;
  let bar = new ProgressBar.Line(key, {
    strokeWidth: 4,
    easing: 'easeInOut', //エフェクトの加速
    duration: 1700, //アニメーションの速度
    color: '#5ac8ed',//バーのカラー
    trailColor: '#d1d1d1', //下線のカラー
    trailWidth: 10, //下線の太さ
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: 'black', //値のカラー
        position: 'absolute',
        right: '0',
        top: '40px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#9ced5a', a:0},
    to: {color: '#5ac8ed', a:1},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * skillset[keys] + 24.4) + ' %');
      bar.path.setAttribute('stroke', state.color);
    }
  });
  //バーの長さ
  bar.animate(skillset[keys] / 100);  // Number from 0.0 to 1.0
  } 
} else if (window.matchMedia('(min-width:960px)').matches || window.matchMedia('(max-width:960px)').matches) {
  //PC処理
  let skillset = {'html': 60, 'css': 51, 'js': 40, 'php': 64, 'sql': 24};
  
  for (let keys in skillset) {
    let key = '#' + keys;
  let bar = new ProgressBar.Line(key, {
    strokeWidth: 4,
    easing: 'easeInOut', //エフェクトの加速
    duration: 1700, //アニメーションの速度
    color: '#5ac8ed',//バーのカラー
    trailColor: '#d1d1d1', //下線のカラー
    trailWidth: 10, //下線の太さ
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: 'black', //値のカラー
        position: 'absolute',
        right: '0',
        top: '60px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#9ced5a', a:0},
    to: {color: '#5ac8ed', a:1},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * skillset[keys] + 24.4) + ' %');
      bar.path.setAttribute('stroke', state.color);
    }
  });
  //バーの長さ
  bar.animate(skillset[keys] / 100);  // Number from 0.0 to 1.0
  }
}