import './css/index.css';
import './css/main.less';
// es6语法

let textList = ['this', 'is', 'my', 'helloworld'];
let appEle = document.getElementById('app');

textList.map((text)=>{
    appEle.appendChild(document.createTextNode(text));
    let brEle = document.createElement('br');
    appEle.appendChild(brEle);
})