# BOM对象
## Window对象
浏览器打开的窗口
### Window对象的属性
#### closed
该值声明了窗口是否已经关闭。该属性为只读。
```javascript
var newWindow = window.open('http://www.baidu.com');
newWindow.closed;
```

#### screenLeft,screenTop,screenX,screenY
只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari 和 Opera 支持 screenLeft 和 screenTop，而 Firefox 和 Safari 支持 screenX 和 screenY。

#### parent
返回窗口的父窗口对象

### Window对象的方法
#### open()方法
打开一个新的浏览器窗口或查找一个已命名的窗口。
```javascript
var newwindow = window.open(URL,name,features,replace);
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| URL               | 一个可选的字符串，声明了要在新窗口中显示的文档的 URL。如果省略了这个参数，或者它的值是空字符串，那么新窗口就不会显示任何文档。|
| name              | 一个可选的字符串，该字符串是一个由逗号分隔的特征列表，其中包括数字、字母和下划线，该字符声明了新窗口的名称。这个名称可以用作标记 a 和 form 的属性 target 的值。如果该参数指定了一个已经存在的窗口，那么 open() 方法就不再创建一个新窗口，而只是返回对指定窗口的引用。在这种情况下，features 将被忽略。|
| features          | 一个可选的字符串，声明了新窗口要显示的标准浏览器的特征。如果省略该参数，新窗口将具有所有标准特征。窗口特性|
| replace           | 一个可选的布尔值。规定了装载到窗口的 URL 是在窗口的浏览历史中创建一个新条目，还是替换浏览历史中的当前条目。支持下面的值：true - URL 替换浏览历史中的当前条目。false - URL 在浏览历史中创建新的条目。|
*name 窗口特性表*
| 参数             | 描述                  |
| ---------------- | --------------------- |
| channelmode=yes,no,1,0        | 是否使用剧院模式显示窗口。默认为 no。|
| directories=yes,no,1,0        | 是否添加目录按钮。默认为 yes。|
| fullscreen=yes,no,1,0         | 是否使用全屏模式显示浏览器。默认是 no。处于全屏模式的窗口必须同时处于剧院模式。|
| height=pixels                 | 窗口文档显示区的高度。以像素计。|
| left=pixels                   | 窗口的 x 坐标。以像素计。|
| location=yes,no,1,0           | 是否显示地址字段。默认是 yes。|
| menubar=yes,no,1,0            | 是否显示菜单栏。默认是 yes。|
| resizable=yes,no,1,0          | 窗口是否可调节尺寸。默认是 yes。|
| scrollbars=yes,no,1,0         | 是否显示滚动条。默认是 yes。|
| status=yes,no,1,0             | 是否添加状态栏。默认是 yes。|
| titlebar=yes,no,1,0           | 是否显示标题栏。默认是 yes。|
| toolbar=yes,no,1,0            | 是否显示浏览器的工具栏。默认是 yes。|
| top=pixels                    | 窗口的 y 坐标。|
| width=pixels                  | 窗口的文档显示区的宽度。以像素计。|

#### close()方法
关闭有 window 指定的顶层浏览器窗口。某个窗口可以通过调用 self.close() 或只调用 close() 来关闭其自身。
```javascript
window.close()
```

#### alert()方法和confirm()方法
显示带有一条指定消息和一个 OK 按钮的警告框。
```javascript
alert(message)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| message        | 要在 window 上弹出的对话框中显示的纯文本（而非 HTML 文本）|
confirm() 方法用于显示一个带有指定消息和 OK 及取消按钮的对话框。
```javascript
confirm(message)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| message        | 要在 window 上弹出的对话框中显示的纯文本（而非 HTML 文本）|

#### setInterval()方法与clearInterval()方法
setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。（不手动终止就一直执行）
clearInterval() 删除setInterval()创建的定时器。
```javascript
setInterval(code,millisec)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| code        | 必需。要调用的函数或要执行的代码串。|
| millisec        | 必须。周期性执行或调用 code 之间的时间间隔，以毫秒计。|

```javascript
clearInterval(id_of_setinterval)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| id_of_setinterval        | 由 setInterval() 返回的 ID 值。|

#### setTimeout()方法和clearTimeout()方法
setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
clearTimeout() 删除setTimeout()创建的定时器。
```javascript
setTimeout(code,millisec)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| code        | 必需。要调用的函数后要执行的 JavaScript 代码串。|
| millisec        | 必需。在执行代码前需等待的毫秒数。|
```javascript
clearTimeout(id_of_settimeout)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| id_of_settimeout	        | 由 setTimeout() 返回的 ID 值。该值标识要取消的延迟执行代码块。|

#### moveBy()方法和moveTo()方法
moveBy() 相对窗口的当前坐标把它移动指定的像素。
```javascript
window.moveBy(x,y)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| x	        | 要把窗口右移的像素数 |
| y	        | 要把窗口下移的像素数 |

moveTo() 把窗口的左上角移动到一个指定的坐标。
```javascript
window.moveTo(x,y)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| x	        | 窗口新位置的 x 坐标 |
| y	        | 窗口新位置的 y 坐标 |

#### scrollBy()方法和scrollTo()方法
scrollBy() 方法可把内容滚动指定的像素数。
```javascript
scrollBy(xnum,ynum)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| xnum	        | 必需。把文档向右滚动的像素数。 |
| ynum	        | 必需。把文档向下滚动的像素数。 |
scrollTo() 方法可把内容滚动到指定的坐标。
```javascript
scrollTo(xpos,ypos)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| xpos	        | 必需。要在窗口文档显示区左上角显示的文档的 x 坐标。 |
| ypos	        | 	必需。要在窗口文档显示区左上角显示的文档的 y 坐标。 |

#### resizeBy()方法和resizeTo()方法
resizeBy() 方法用于根据指定的像素来调整窗口的大小。
```javascript
resizeBy(width,height)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| width	        | 	必需。要使窗口宽度增加的像素数。可以是正、负数值。 |
| height	        | 	可选。要使窗口高度增加的像素数。可以是正、负数值。 |
resizeTo() 方法用于把窗口大小调整为指定的宽度和高度。
```javascript
resizeTo(width,height)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| width	        | 必需。想要调整到的窗口的宽度。以像素计。 |
| height	        | 可选。想要调整到的窗口的高度。以像素计。 |
