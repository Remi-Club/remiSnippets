# remiSnippets

**sublime代码段工具**

### Install:
#### cd /Users/$(yourName)/Library/Application\ Support/Sublime\ Text\ 3/Packages
#### git clone https://github.com/Remi-Club/remiSnippets.git

## Snippets
###文件模板
<table>
	<tr>
        <th>Snippet</th>
        <th>Trigger</th>
    </tr>
    <tr>
        <td>Create react-native Class</td>
        <td>rncc</td>
    </tr>
    <tr>
        <td>Create StyleSheet</td>
        <td>rncs</td>
    </tr>
    <tr>
        <td>创建action模板文件</td>
        <td>createAction</td>
    </tr>
    <tr>
        <td>创建reducer模板文件</td>
        <td>createReducer</td>
    </tr>
</table>

###basic片段
<table>
    <tr>
        <th>Snippet</th>
        <th>Trigger</th>
    </tr>
    <tr>
        <td>componentDidMount()</td>
        <td>cdm</td>
    </tr>
    <tr>
        <td>componentWillMount()</td>
        <td>cwm</td>
    </tr>
        <td>componentWillReceiveProps()</td>
        <td>cwrp</td>
    </tr>
    <tr>
        <td>componentWillUnmount()</td>
        <td>cwum</td>
    </tr>
    <tr>
        <td>componentWillUpdate()</td>
        <td>cwud</td>
    </tr>
    <tr>
        <td>construct(...)</td>
        <td>construct</td>
    </tr>
        <td>this.setState(...)</td>
        <td>setState</td>
    </tr>
    <tr>
        <td>alignItems:'center'</td>
        <td>alignItems</td>
    </tr>
    <tr>
        <td>justifyContent:'center'</td>
        <td>justifyContent</td>
    </tr>
    <tr>
        <td>flexDirection:'row'</td>
        <td>flexDirection</td>
    </tr>
    <tr>
        <td>style={style.styleName} ...</td>
        <td>style</td>
    </tr>
    <tr>
        <td>this.props.actionRequest ...</td>
        <td>tpa</td>
    </tr>
    <tr>
        <td>this.props.navigator.push ...</td>
        <td>tpnp</td>
    </tr>
    <tr>
        <td>在action中创建Request请求</td>
        <td>actionRequest</td>
    </tr>
</table>

### 组件
<table>
    <tr>
        <td>TextInput ...</td>
        <td>TextInput</td>
    </tr>
    <tr>
        <td>Modal ...</td>
        <td>Modal</td>
    </tr>
    <tr>
        <td>Navbar ...</td>
        <td>Navbar</td>
    </tr>
    <tr>
        <td>Image ...</td>
        <td>Image</td>
    </tr>
    <tr>
        <td>TouchableOpacity ...</td>
        <td>TouchableOpacity</td>
    </tr>
    <tr>
        <td>View ...</td>
        <td>View</td>
    </tr>
    <tr>
        <td>Text ...</td>
        <td>Text</td>
    </tr>
</table>


## 编辑:

- 基本函数放在basic文件夹, 组件放在components文件夹
- 注意创建的代码段文件要以.sublime-snippet结尾


## 示例

```
<snippet>
  <content>
<![CDATA[
<TextInput
    style={style.${1:textInput}}
    value={this.state.${2:inputValue}}
    placeholder={'${3:请输入}'}
    clearButtonMode={'while-editing'}
    keyboardType={${4:'default'}}
    underlineColorAndroid={'transparent'}
    onChangeText={($2) => {
        this.setState({$2})
    }} />
]]>
  </content>
  <tabTrigger>TextInput</tabTrigger>
  <scope>source.js,source.jsx</scope>
  <description>rnTextInput</description>
</snippet>

```



