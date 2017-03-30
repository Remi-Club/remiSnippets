# remiSnippets

**sublime代码段工具**

### Install:
#### cd /Users/$(yourName)/Library/Application\ Support/Sublime\ Text\ 3/Packages
#### git clone https://github.com/Remi-Club/remiSnippets.git

## Snippets

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
    <tr>
        <td>style={style.styleName} ...</td>
        <td>style</td>
    </tr>
    <tr>
        <td>createAction ...</td>
        <td>createAction</td>
    </tr>
    <tr>
        <td>action request ...</td>
        <td>actionRequest</td>
    </tr>
    <tr>
        <td>this.props.actionRequest ...</td>
        <td>tpa</td>
    </tr>
    <tr>
        <td>this.props.navigator.push ...</td>
        <td>tpnp</td>
    </tr>
</table>


### 编辑:

- 基本函数放在basic文件夹, 组件放在components文件夹
- 注意创建的代码段文件要以.sublime-snippet结尾


#### 示例

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
  <description>Remi TextInput</description>
</snippet>

```



