import React, { useState, Component } from "react";

class TextInput01 extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    render() {
        return (
            <input className="textInput01"
            onChange={this.props.onChange}
            type="text"
            placeholder="첫번째 문장을 입력해 주세요"
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
export default TextInput01;