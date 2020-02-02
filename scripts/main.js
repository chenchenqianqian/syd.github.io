// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox_original.png'){
        myImage.setAttribute('src','images/firefox2.png');
    } else {
        myImage.setAttribute('src','images/firefox_original.png');
    }
}
/*对上述代码的解释：这里首先把 <img> 元素的引用存放在 myImage 变量里。然后将这个变量的 onclick 事件与一个匿名函数绑定。每次点击图片时：

获取这张图片的 src 属性值。
用一个条件句来判断 src 的值是否等于原始图像的路径:
如果是，则将 src 的值改为第二张图片的路径，并在 <img> 内加载该图片。
如果不是（意味着它已经修改过）, 则把 src 的值重新设置为原始图片的路径，即原始状态。 */
// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');//这两个let变量将获取新按钮和标题的引用，并保存至变量中。

// 个性化欢迎信息设置函数
function setUserName() {
    let myName = prompt ('请输入你的名字');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem ('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName; 
    }
}

//初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem ('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function(){
    setUserName();
}