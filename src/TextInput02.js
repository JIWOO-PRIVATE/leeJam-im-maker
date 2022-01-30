import React, { useState, Component } from "react";

class TextInput02 extends Component {
    render() {
        return (
            <input className="textInput01"
            onChange={this.props.onChange}
            type="text"
            placeholder="두번째 문장을 입력해 주세요"
            placeholderTextColor='#C5C8CE'
            style={{
                backgroundColor: '#FFFFFF',
                borderBottomColor: '#000000',
                borderBottomWidth: 1,
                height: '40px',
                width : '800px',
                alignItems: "center",
                padding: 12,
                fontSize: 30,
                borderRadius: 10,
                marginBottom: 36
            }}/>
        );
    }
};
export default TextInput02;