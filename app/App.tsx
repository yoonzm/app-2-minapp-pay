/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text, NativeAppEventEmitter, TextInput, View} from 'react-native';
import * as WeChat from 'react-native-wechat-lib';

// 收到

const App = () => {
    const [send, setSend] = React.useState('哈哈哈');
    const [receive, setReceive] = React.useState('');

    const minAppPay = async () => {
        try {
            await WeChat.launchMiniProgram({
                userName: 'gh_ef9b9c8302fa',
                miniProgramType: 2, // 0-正式版； 1-测试版； 2-体验版。 默认值为0
                path: `pages/index/index?message=${send}` // TODO 此处为要跳转的小程序页面和要传输的数据
            });
        } catch (error) {
            console.error('捕获错误', error);
        }
    };

    React.useEffect(() => {
        WeChat.registerApp('wx2a7cbd8f251e5c77', '').then(() => {
            console.log('registerApp success');
        });
        const emitter = NativeAppEventEmitter.addListener('WeChat_Resp', (data: {
            extMsg: string
        }) => {
            // TODO 此处为小程序传输回来的数据
            console.log('WeChat_Resp', JSON.stringify(data));
            setReceive(data.extMsg);
        });
        return () => {
            emitter.remove();
        }
    });

    function onChangeText(value: string) {
        setSend(value);
    }

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <Button title="跳转至小程序支付" onPress={minAppPay}/>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#E5E5E5',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text>传给小程序的值：</Text>
                    <TextInput
                        placeholder='请输入要传输给小程序的值'
                        onChangeText={onChangeText}
                        defaultValue={send}
                        value={send}
                    />
                </View>
                <View>
                    <Text>收到小程序的值：{receive}</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
