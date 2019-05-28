import React, { Component } from 'react';
import './index.scss';

export default class About extends Component {
  componentDidMount(){
    
    // const ele = document.getElementsByTagName('p')[0].innerHTML = '<div>哈哈哈哈</div>'
  }
  render() {
    return (
			<div id="wrap" onDrop={this.drop} onDragOver={this.allowDrop}>
        <input name="myInput" type="text" size="20" />
        <p>请把 W3School 的图片拖放到矩形中：</p>
        哈哈哈啊哈哈哈
        <div 
          id="div1" 
          onDrop={this.drop} 
          onDragOver={this.allowDrop}
        ></div>
        <br />
        <div
          id="drag1"
          draggable="true" 
          onDragStart={this.drag} 
        >
          <img id="drag1" src="http://www.w3school.com.cn/i/eg_dragdrop_w3school.gif" />
        </div>

        <div 
          id="div2" 
          onDrop={this.drop} 
          onDragOver={this.allowDrop}
        >123</div>
      </div>
    );
  }

  // 开始拖动
  drag(e){
    console.log(document.getElementById('wrap').style.color = "#333")
    e.dataTransfer.setData("elementId",e.target.id);
  }

  // 在可放置的区域拖动
  allowDrop(e){
    e.preventDefault();
  }

  // 放置完成
  drop(e){
    e.preventDefault();
    var data=e.dataTransfer.getData("elementId");
    try {
      e.target.appendChild(document.getElementById(data));
    } catch (error) {
      console.log(error)
    }
  }


}