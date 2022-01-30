import React, { Component } from "react";
class DownloadImage extends Component {
    inputDownloadBtn = (e) => {
        const { href, handleCanvasHref } = this.props;
        const canvasRef = this.props.canvas;
        const canvas = canvasRef.current;
        const url = canvas.toDataURL();
        href !== url && handleCanvasHref(url);
    };
    render() {
        return (
            <a
                onClick={this.inputDownloadBtn}
                href={this.props.href}
                placeholder="첫 문장을 입력해 주세요"
                style = {{
                    backgroundColor: '#FFFFFF',
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                    height: 40,
                    width : 800,
                    alignItems: "center",
                    padding: 12,
                    fontSize: 50,
                    borderRadius: 10,
                    marginBottom: 36
                }}
                className="download-button"
                download="Mypromise.png">
                Download
            </a>
        );
    }
};
export default DownloadImage;