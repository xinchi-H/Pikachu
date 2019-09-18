!function () {
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code') 
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(() => {
      n += 1
      container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = 10000
      if (n >= code.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 50)
  }
  let code = `
/*
 * 首先，需要准备皮卡丘的皮
*/
#preview{
  height: 100%;
  display: flex;
  justify-content: center;
  background: #fee433;
  align-items: center;
  /*#414549*/
}
/*
 * 接下来，画皮卡丘的鼻子
*/
.nose{
  width: 0;
  height: 0;
  border-style: solid;
  border-radius: 11px;
  top: 28px;  
  border-width: 12px;
  border-color:black transparent transparent;
  position:absolute;
  left:50%;
  margin-left: -12px;
} 
/*
 * 接下来，画皮卡丘的眼睛
*/ 
.eye{
  width:49px;
  height:49px;
  background: #2e2e2e;
  border: 2px solid #000000;
  border-radius: 50%;
  position: absolute;
}
/*
 * 眼睛还没有眼珠子
*/
.eye::before{
  display: block;
  content: '';
  background:white;
  width:24px;
  height:24px;
  border-radius:50%;
  position:absolute;
  left: 6px;
  top: -1px;
  border: 2px solid black;
}
/*
 * 右眼在右边（废话）
*/
.eye.right{
  left:50%;
  margin-left: 90px;
}
/*
 * 左眼在左边（废话）
*/
.eye.left{
  right:50%;
  margin-right: 90px;  
}
/*
 * 然后，画皮卡丘的腮红
*/
.face{
  width:68px;
  height:68px;
  border:2px solid black;
  top:85px;
  background:#fc0d1c;
  border-radius: 50%;
  position:absolute;
  /*#2e2e2e*/
}
/*
 * 把腮红放在正确的位置
*/
.face.right{
  left:50%;
  margin-left:116px;
}
.face.left{
  right:50%;
  margin-right:116px;
}
/*
 * 画它的上嘴唇
*/
.upperLip{
  height:20px;
  width:70px;
  border: 2px solid black;
  position: absolute;
  top: 48px;  
  background: #fee433;/*#414549*/
}
.upperLip.left{
  right:50%;
  border-bottom-left-radius:40px 20px;
  border-top:none;
  border-right:none;
  transform: rotate(-20deg);
}
.upperLip.right{
  left:50%;
  border-bottom-right-radius:40px 20px;
  border-top:none;
  border-left:none;
  transform: rotate(20deg);
}
/*
 * 画下嘴唇
*/
.lowerLip{
  position: absolute;
  background:#990513;
  border: 2px solid black;
  bottom:0;
  width:200px;
  height:4000px;
  border-radius:150px/1000px;
  overflow:hidden;
}
/*
 * 最后，给它画舌头
*/
.lowerLip::after{
  content:'';
  background:#fc4a62;
  position:absolute;
  bottom:-14px;
  width:100px;
  height:100px;
  right:50%;
  margin-right:-50px;
  border-radius:50%;
}
/*
 * 好了
 * 这只皮卡丘送给你
*/`

  writeCode('', code)
}.call()