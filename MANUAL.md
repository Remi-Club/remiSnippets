## 创建Snippet

- **选择 Tools -> Developer -> New Snippet 会自动创建一个snippet 代码框架**
- **以`.sublime-snippet`作为后缀保存在package目录下** 

#### 文件结构

```
<snippet>
    <content><![CDATA[Type your snippet here]]></content>
    <!-- Optional: Tab trigger to activate the snippet -->
    <tabTrigger>xyzzy</tabTrigger>
    <!-- Optional: Scope the tab trigger will be active in -->
    <scope>source.js</scope>
    <!-- Optional: Description to show in the menu -->
    <description>My Fancy Snippet</description>
</snippet>

```
#### snippet

所有的snippet代码都必须在<snippet>标签内

1. content
   - 代码段内容必须以 `<![CDATA[` 开头 `]]>`结尾,  并且不能含有 `]]>`
   - $是关键字, 如果需要使用 `$`字符 可以用 `\$`
   - 如果需要代码格式, 用tab代替space
2. tabTrigger
 - 唤起snippets的关键字
3. scope
   - 代码段的作用范围
4. description
   - 描述

### 环境变量

<table>
	<tr>
		<td>变量</td>
		<td>作用</td>
	</tr>
	<tr>
		<td>$SELECTION </td>
		<td>当代码段被触发的时候, 立即选中的文本 (可以配合keybind 使用)</td>
	</tr>
	<tr>
		<td>$TM_CURRENT_LINE</td>
		<td>触发代码段时的行数</td>
	</tr>
	<tr>
		<td>$TM_FILEPATH</td>
		<td>当前文件路径</td>
	</tr>
	<tr>
		<td>$TM_FILENAME</td>
		<td>当前文件名</td>
	</tr>
	<tr>
		<td>$TM_FULLNAME</td>
		<td>用户名</td>
	</tr>
	<tr>
		<td>$TM_CURRENT_LINE</td>
		<td>触发代码段时当前的行数</td>
	</tr>
	<tr>
		<td>$TM_TAB_SIZE</td>
		<td>tab包含几个空格</td>
	</tr>
</table>

#### Fields
通过field 可以一直按tab键, 改变特定位置的值

```
Author	  : $1 <br>
Date      : $2 <br>
Copyright : $3 <br>

```

**代码段被触发后, tab键顺序从$1开始, $0结束 ($0 可以没有)**

#### Mirrored Fields

*可以用相同数字的`$`创建 _Mirror fields_ 编辑时会同时编辑*

##### 例如

```
<snippet>
  <content><![CDATA[
<TextInput
    value={this.state.$11}
    onChangeText={($1) => {
        this.setState({$1})
    }}
/>
    ]]>
  </content>
  <tabTrigger>textinput</tabTrigger>
  <scope>source.js,source.jsx</scope>
  <description>react-native TextInput</description>
</snippet>

```
在触发后 <br>

```
<TextInput
    value={this.state.$1}
    onChangeText={($1) => {
        this.setState({$1})
    }}
/>

```
可以同时编辑三个地方的$1 <br>

#### placeholder

可以用

```
Author: ${1: Remi} <br>
Date: ${2:2017} <br>
Copyright: ${3:Remi} <br>
```
来创建占位字符, 也可以在占位符中使用占位符:


```
Test: ${1:Nested ${2:Placeholder}}

```

#### 替换

可以基于_mirror field_使用正则来动态编辑文本 <br>

-  `${var_name/regex/format_string/}` <br>
-  `${var_name/regex/format_string/options}` <br>

`var_name`: 就是环境变量<br>
`regex`: [perl-style 正则](http://www.boost.org/doc/libs/1_56_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html) <br>
`fortmat_string`: 参考 [format_string](http://www.boost.org/doc/libs/1_56_0/libs/regex/doc/html/boost_regex/format/boost_format_syntax.html) <br>


##### 例如

```
class ${1:${TM_FILENAME/(.+)\..+|.*/$1/}} extends Component {
    render() {
        return (

        );
    }
}
export default ${1:${TM_FILENAME/(.+)\..+|.*/$1/}};

```
这里用 $TM_FILENAME 获取文件名, 然后用正则去掉后缀



> 参考文档: [sublime Unofficial document](http://docs.sublimetext.info/en/latest/extensibility/snippets.html) <br>
> 





