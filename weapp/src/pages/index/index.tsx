import React, {Component} from 'react'
import {View, Text, Button, BaseEventOrig, Input} from '@tarojs/components'
import './index.css'

export default class Index extends Component {
  state = {
    receive: '',
    send: '啦啦啦',
  };

  onLoad(options) {
    // Do some initialize when page load.
    console.log('Index.onLoad()', options);
    // TODO 此处能接受到app传过来的值
    this.setState({
      receive: options.message
    })
  }

  onError = (e: BaseEventOrig<any>) => {
    console.log('Index.onError()', e.detail.errMsg);
  };

  onLaunchapp = (e) => {
    console.log('Index.onLaunchapp()', e);
  };

  render() {
    return (
      <View className='index'>
        <Button
          openType='launchApp'
          appParameter={this.state.send} // TODO 此处的值为要返回给app的值
          onError={this.onError}
          onLaunchapp={this.onLaunchapp}
        >返回APP</Button>
        <Text>收到APP的值：{this.state.receive}</Text>
        <View style={{
          display: 'flex',
          borderWidth: 1,
          borderColor: '#E5E5E5',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Text>传给APP的值：</Text>
          <Input placeholder="请输入要传输给APP的值" value={this.state.send} onInput={e => {
            this.setState({
              send: e.detail.value
            })
          }}/>
        </View>
      </View>
    )
  }
}
