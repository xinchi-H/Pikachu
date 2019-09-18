!function () {
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setInterval(() => {
      n += 1
      container.innerHTML = code.substring(0, n)
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
  align-items: center;
  background: #fee433;
  /*#414549*/
}
.wrapper{
  width:100%;
  height:165px;
  position:relative;
}
/*
 * 接下来，画皮卡丘的鼻子
*/
.nose{
  width: 0;
  height: 0;
  border-style: solid;
  border-radius: 11px;
  border-width: 12px;
  border-color:black transparent transparent;
  position:absolute;
  left:50%;
  top: 28px;  
  margin-left: -12px;
} 
/*
 * 接下来，画皮卡丘的眼睛
*/ 
.eye{
  width:49px;
  height:49px;
  background: #2e2e2e;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
}
/*
 * 眼睛还没有眼珠子
*/
.eye::before{
  content: '';
  display: block;
  width:24px;
  height:24px;
  background:white;
  position:absolute;
  border-radius:50%;
  left: 6px;
  top: -1px;
  border: 2px solid black;
}
/*
 * 左眼在左边（废话）
*/
.eye.left{
  right:50%;
  margin-right: 90px;  
}
/*
 * 右眼在右边（废话）
*/
.eye.right{
  left:50%;
  margin-left: 90px;
}
/*
 * 然后，画皮卡丘的腮红
*/
.face{
  height:68px;
  width:68px;
  background:#fc0d1c;
  border:2px solid black;
  border-radius: 50%;
  position:absolute;
  /*#2e2e2e*/
}
/*
 * 把腮红放在正确的位置
*/
.face.left{
  right:50%;
  top:85px;
  margin-right:116px;
}
.face.right{
  left:50%;
  top:85px;  
  margin-left:116px;
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
.lowerLip-wrapper{
  position: absolute;
  bottom:0;
  overflow:hidden;
  right:50%;
  margin-right:-100px;
  height: 110px;
  width:200px;
}
.lowerLip{
  position: absolute;
  bottom:0;
  background:#990513;
  width:200px;
  height:4000px;
  border-radius:150px/1000px;
  border: 2px solid black;
  overflow:hidden;
}
/*
 * 最后，给它画舌头
*/
.lowerLip::after{
  content:'';
  position:absolute;
  bottom:-14px;
  width:100px;
  height:100px;
  background:#fc4a62;
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