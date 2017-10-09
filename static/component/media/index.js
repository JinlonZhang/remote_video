import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import kurentoUtils from './lib/kurento-utils/js/kurento-utils';

export default class Index extends Component{
  constructor(props) {
    super();
    this.state = {
      remoteList: [],
      participants: [],
      users:[],
      userId: props.userId || '111',
      userName: props.userName || 'test',
      roomId: props.roomId || '123456',
      roomName:props.roomName || 'testRoom',
      messages : [],
      isChatVisible:true,
      isSettingVisible:false,
      role: props.role || 'test',
    };
  }

  componentDidMount() {
    const mainWidth = ReactDOM.findDOMNode(this).offsetWidth;
    const mainHeight = ReactDOM.findDOMNode(this).offsetHeight;
    console.log('this==', this);
    console.log('mainWidth==', mainWidth);
    console.log('mainHeight==', mainHeight);
    const ws = new WebSocket('wss://cloudrtmp.com:3000');
    ws.onopen = () => {
      console.log("wss connect success...");
    }
    ws.onmessage = (e) => {
      const parsedMessage = JSON.parse(e.data);
      console.log('parsedMessage====', parsedMessage);
    }
    ws.onerror = (e) => {
      console.log('服务端返回消息onerror::' + e.data);
    }
    ws.onclose = (e) => {
      console.log('服务端返回消息onclose::' + e.data);
    }
  }

  componentWillUnmount() {

  }

  /**
   * 注册并登录房间
   */
  register() {
    const sessionId = this.getRandomUserId();
    const userId = this.state.userId;
    const userName = this.state.userName;
    const roomId = this.state.roomId;
    const roomName = this.state.roomName;
    const role = this.state.role;

    const message = {
      type: 'joinRoom',
      sessionId: sessionId,
      userId: userId,
      userName: userName,
      roomId: roomId,
      roomName:'demo',
      role: role,
      // bandwidth: ba,
    }

    this.sendMessage(message);
  }

  sendMessage(message) {
    console.log('Senging message: ' + message.type);
    if(ws){
        ws.send(JSON.stringify(message));
    }
  }

  // 获取6位随机id
  getRandomUserId() {
    let num = '';
    for (let i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
  }

  render() {
    return (
      <div>
        <h1>media</h1>
        <div>
          <video
            autoPlay="true" />
        </div>
      </div>
    );
  }
}
