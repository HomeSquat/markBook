# JavaScript内置对象

## Array对象
### 创建Array对象
```javascript
var array = [];
new Array();
new Array(size);
new Array(element0, element1, ..., elementn);
```
**参数**
参数 size 是期望的数组元素个数。返回的数组，length 字段将被设为 size 的值。
参数 element ..., elementn 是参数列表。当使用这些参数来调用构造函数 Array() 时，新创建的数组的元素就会被初始化为这些值。它的 length 字段也会被设置为参数的个数。

### Array对象方法
#### concat()方法
连接两个数组或多个数组
```javascript
arrayObject.concat(arrayX,arrayX,...,arrayX)
```
<font color="#FF6347">不改变原数组值，返回一个新数组</font>

#### join()方法
把数组中的所有元素放入一个字符串中
```javascript
arrayObject.join(separator)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| separator        | 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。|

#### pop()方法
删除并返回数组最后一个元素  
```javascript
arrayObject.pop()
```
<font color="#FF6347">改变原有数组</font>

#### push()方法
向数组的末尾添加一个或多个元素
```javascript
arrayObject.push(newelement1,newelement2,....,newelementX)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| newelement1        | 必选。要添加到数组的第一个元素。|
| newelement2        | 可选。要添加到数组的第二个元素。|
| newelementX        | 可选。可添加多个元素。          |
<font color="#FF6347">改变原有数组</font>

#### shift()方法
删除数组的第一个元素并返回第一个元素
```javascript
arrayObject.shift()
```
<font color="#FF6347">改变原有数组</font>

#### unshift()方法
向数组的开头添加一个或多个元素
```javascript
arrayObject.unshift(newelement1,newelement2,....,newelementX)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| newelement1        | 必选。要添加到数组的第一个元素。|
| newelement2        | 可选。要添加到数组的第二个元素。|
| newelementX        | 可选。可添加多个元素。          |
<font color="#FF6347">改变原有数组</font>

#### slice()方法
从数组中返回选择的元素
```javascript
arrayObject.slice(start,end)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| start        | 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。|
| end          | 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。|
<font color="#FF6347">不改变原数组</font>

#### splice()方法
向数组中添加或删除元素，返回被删除的元素
```javascript
arrayObject.splice(index,howmany,item1,.....,itemX)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| index        | 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。|
| howmany        | 必需。要删除的项目数量。如果设置为 0，则不会删除项目。|
| item1, ..., itemX        | 可选。向数组添加的新项目。          |
<font color="#FF6347">改变原有数组</font>

#### sort()方法
对数组进行排序
```javascript
arrayObject.sort(sortby)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| sortby        | 可选。规定排序顺序。必须是函数。|
<font color="#FF6347">改变原有数组</font>
::: tip 自定义排序函数
如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：

若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
若 a 等于 b，则返回 0。
若 a 大于 b，则返回一个大于 0 的值。
:::

## String对象
### 创建String对象
```javascript
var sting = "lalal";
new String(s);
String(s);
```
### String对象
#### concat()方法
连接两个或多个字符串,并返回连接后的字符串
```javascript
stringObject.concat(stringX,stringX,...,stringX)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| stringX        | 必需。将被连接为一个字符串的一个或多个字符串对象。|
<font color="#FF6347">不改变原有String</font>

#### indexOf()方法
返回某个指定的字符串值在字符串中首次出现的位置。
```javascript
stringObject.indexOf(searchvalue,fromindex)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| searchvalue        | 必需。规定需检索的字符串值。|
| fromindex        |可选的整数参数。规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。|
::: warning 注意
indexOf() 方法对大小写敏感！  
如果要检索的字符串值没有出现，则该方法返回 -1。
:::

#### match()方法
方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。如果没找到返回null
```javascript
stringObject.match(searchvalue)
stringObject.match(regexp)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| searchvalue        | 	必需。规定要检索的字符串值。|
| regexp        | 	必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。|

#### replace()方法
在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
```javascript
stringObject.replace(regexp/substr,replacement)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| regexp/substr        | 必需。规定子字符串或要替换的模式的 RegExp 对象。|
| replacement        | 必需。一个字符串值。规定了替换文本或生成替换文本的函数。|
<font color="#FF6347">不改变原有String</font>

#### slice()方法
提取字符串的某个部分，并以新的字符串返回被提取的部分。
```javascript
stringObject.slice(start,end)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| start        | 要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。|
| end        | 紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。|
<font color="#FF6347">不改变原有String</font>

#### substr()方法
substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
```javascript
stringObject.substr(start,length)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| start        |	必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。|
| length        | 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。|
<font color="#FF6347">不改变原有String</font>

#### substring()方法
提取字符串中介于两个指定下标之间的字符。
```javascript
stringObject.substring(start,stop)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| start        | 必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。|
| stop        | 可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。|
<font color="#FF6347">不改变原有String</font>

#### split()方法
把一个字符串分割成字符串数组。
```javascript
stringObject.split(separator,howmany)
```
| 参数             | 描述                  |
| ---------------- | --------------------- |
| separator        | 必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。|
| howmany        |可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。|
<font color="#FF6347">不改变原有String</font>
