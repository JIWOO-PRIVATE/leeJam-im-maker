import React from 'react';
import DownsideImage from "./img/Down.jpg"

import TextInput01 from'./TextInput01';
import TextInput02 from'./TextInput02';
import TextInput03 from'./TextInput03';
import FrontImage from './img/Front.jpg'

import styles from './App.css';
import DownloadImage from './DownloadImage';

import Select from 'react-select'


import img001 from './img/economy/economy (1).png'
import img002 from './img/economy/economy (2).png'
import img003 from './img/economy/economy (3).jpg'
import img004 from './img/economy/economy (4).png'

import img101 from './img/justice/justice (1).png'
import img102 from './img/justice/justice (2).png'
import img103 from './img/justice/justice (3).png'
import img104 from './img/justice/justice (4).png'
import img105 from './img/justice/justice (5).png'
import img106 from './img/justice/justice (6).png'
import img107 from './img/justice/justice (7).png'
import img108 from './img/justice/justice (8).png'
import img109 from './img/justice/justice (9).png'
import img110 from './img/justice/justice (10).png'
import img111 from './img/justice/justice (11).jpg'
import img112 from './img/justice/justice (12).png'

import img201 from './img/life/life (1).png'
import img202 from './img/life/life (2).png'
import img203 from './img/life/life (3).png'
import img204 from './img/life/life (4).png'
import img205 from './img/life/life (5).png'
import img206 from './img/life/life (6).png'
import img207 from './img/life/life (7).png'
import img208 from './img/life/life (8).png'

import img301 from './img/medical/medical (1).png'
import img302 from './img/medical/medical (2).png'
import img303 from './img/medical/medical (3).png'
import img304 from './img/medical/medical (4).png'
import img305 from './img/medical/medical (5).png'
import img306 from './img/medical/medical (6).png'
import img307 from './img/medical/medical (7).png'
import img308 from './img/medical/medical (8).png'
import img309 from './img/medical/medical (9).png'

import img401 from './img/mil/mil (1).png'
import img402 from './img/mil/mil (2).png'
import img403 from './img/mil/mil (3).png'
import img404 from './img/mil/mil (4).png'

import img501 from './img/property/property (1).png'
import img502 from './img/property/property (2).png'
import img503 from './img/property/property (3).png'
import img504 from './img/property/property (4).png'
import img505 from './img/property/property (5).png'
import img506 from './img/property/property (6).png'

import img601 from './img/safety/safety (1).png'
import img602 from './img/safety/safety (2).png'
import img603 from './img/safety/safety (3).png'
import img604 from './img/safety/safety (4).png'
import img605 from './img/safety/safety (5).png'

import img701 from './img/well/well (1).png'
import img702 from './img/well/well (2).png'
import img703 from './img/well/well (3).png'
import img704 from './img/well/well (4).png'

import img801 from './img/work/work (1).png'
import img802 from './img/work/work (2).png'
import img803 from './img/work/work (3).png'
import img804 from './img/work/work (4).png'
import img805 from './img/work/work (5).png'
import img806 from './img/work/work (6).png'

import img901 from './img/eco/eco (1).png'
import img902 from './img/eco/eco (2).png'
import img903 from './img/eco/eco (3).png'

const options = [
  { value: img001, label: '[경제 1] 가상자산 1년 비과세' },
  { value: img002, label: '[경제 2] 주가조작 근절' },
  { value: img003, label: '[경제 3] 가상자산 1년 비과세' },
  { value: img004, label: '[경제 4] 주식시장 불공정 해소' },
  { value: img101, label: '[정의 1]  아프면 상병수당' },
  { value: img102, label: '[정의 2]  확률형 아이템 확률 공개' },
  { value: img103, label: '[정의 3]  나의 아저씨 법' },
  { value: img104, label: '[정의 4]  아동학대, 살해 처벌' },
  { value: img105, label: '[정의 5]  플랫폼 수수료 공개' },
  { value: img106, label: '[정의 6]  신종 펫샵 근절' },
  { value: img107, label: '[정의 7]  전세사기 근절' },
  { value: img108, label: '[정의 8]  보이스 피싱 처벌' },
  { value: img109, label: '[정의 9]  일하는 어르신도 국민연금' },
  { value: img110, label: '[정의 10] 대중골프장 운영 정상화' },
  { value: img111, label: '[정의 11] 이태원 클라쓰법' },
  { value: img112, label: '[정의 12] 플랫폼 먹튀방지 ' },
  { value: img201, label: '[생활 1] 타투 합법화 ' },
  { value: img202, label: '[생활 2] 상무 e-스포츠 창단 ' },
  { value: img203, label: '[생활 3] 반려동물 진료비 합리화 ' },
  { value: img204, label: '[생활 4] 오토바이 소음 규제 ' },
  { value: img205, label: '[생활 5] 초등학교 3시 동시하교제 ' },
  { value: img206, label: '[생활 6] KTX-SRT 통합 ' },
  { value: img207, label: '[생활 7] 천원 여객선 ' },
  { value: img208, label: '[생활 8] 안심데이터 무료 ' },
  { value: img301, label: '[의료 1] 공공산후조리원 확대 ' },
  { value: img302, label: '[의료 2] 난임 의료지원 확대 ' },
  { value: img303, label: '[의료 3] 미세먼지 해결 ' },
  { value: img304, label: '[의료 4] 불법 의료기관 근절 ' },
  { value: img305, label: '[의료 5] HPV 백신 확대 ' },
  { value: img306, label: '[의료 6] 탈모 건강보험 ' },
  { value: img307, label: '[의료 7] 산부인과 개편 ' },
  { value: img308, label: '[의료 8] 어르신 임플란트 지원 ' },
  { value: img309, label: '[의료 9] 피임 건강보험 ' },
  { value: img401, label: '[군대 1] 예비군 보상 강화 ' },
  { value: img402, label: '[군대 2] 보훈병원 확장 ' },
  { value: img403, label: '[군대 3] 병사 통신요금 반값 ' },
  { value: img404, label: '[군대 4] 종합 군 정책 ' },
  { value: img501, label: '[부동산 1] 공시제도 검토 ' },
  { value: img502, label: '[부동산 2] 종부세 개편 ' },
  { value: img503, label: '[부동산 3] 취득세 완화 ' },
  { value: img504, label: '[부동산 4] 월세공제 확대 ' },
  { value: img505, label: '[부동산 5] 주거 사다리 정책' },
  { value: img506, label: '[부동산 6] 재개발 재건축 확대' },
  { value: img601, label: '[안전 1] 불법 촬영 근절' },
  { value: img602, label: '[안전 2] 후쿠시마 수산물 근절' },
  { value: img603, label: '[안전 3] 딥페이크 근절' },
  { value: img604, label: '[안전 4] GMO 표시제' },
  { value: img605, label: '[안전 5] 등하굣길 안전 강화' },  
  { value: img701, label: '[복지 1] 유니버셜 디자인' },
  { value: img702, label: '[복지 2] 아동급식 개편' },
  { value: img703, label: '[복지 3] 에너지 복지' },
  { value: img704, label: '[복지 4] 영유아 발달지원' },
  { value: img801, label: '[취창업 1] 학자금 대출 개편  ' },
  { value: img802, label: '[취창업 2] 온라인 경력증명  ' },
  { value: img803, label: '[취창업 3] 스타트업 특허심사 단축' },
  { value: img804, label: '[취창업 4] 공공구매 확대 ' },
  { value: img805, label: '[취창업 5] 면접준비' },
  { value: img806, label: '[취창업 6] 워케이션 센터' },  
  { value: img901, label: '[환경 1] 전기차 보조금 확대 ' },
  { value: img902, label: '[환경 2] 플라스틱 제로 ' },
  { value: img903, label: '[환경 3] 생활용품 수리확대 ' },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text01: "첫번째 문장을 입력해 주세요",
      text02: "두번째 문장을 입력해 주세요",
      text03: " 세번째 문장을 입력해 주세요 ",
      href: "/",
      width: "400",
      height: "400",
      fontFamily01: 'Hi Melody',
      fontFamily02: 'Nanum Pen Script',
      fontColor: "Black",
      fontSize: 70,
      selectedOption : img001
    };
    this.canvasRef = React.createRef();
  }
  handleCanvasHref = href => {
    this.setState({ href });
  };
  handleTextChange01 = e => {
    this.setState({ text01: e.target.value });
  };
  handleTextChange02 = e => {
    this.setState({ text02: e.target.value });
  };
  handleTextChange03 = e => {
    this.setState({ text03: e.target.value });
  };
  handleCanvasSize = e => {
    if (e.target.name === "width")
      this.setState({ width: e.target.value })
    else if (e.target.name === "height")
      this.setState({ height: e.target.value })
  };
  createCanvas() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { text01,text02, text03,fontFamily01,fontFamily02,selectedOption} = this.state;
    // const { width, height} = state;
    const im01 = new Image();
    const im02 = new Image();
    im01.src = selectedOption;
    im02.src = DownsideImage;
    im01.onload = () => {
      canvas.width = im01.width;
      canvas.height = im01.height*1.1;
      ctx.drawImage(im01, 0,im01.height*0.2,im01.width,im01.height*0.6, 0,0,canvas.width,im01.height*0.6);
      ctx.drawImage(im02, 0,0,im02.width,im02.height,0, im01.height*0.6, canvas.width, canvas.width/2);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      this.setFont(canvas, text01,3,60,fontFamily01,'center',canvas.width / 2);
      this.setFont(canvas, text02,1.8,60,fontFamily01,'center',canvas.width / 2);
      this.setFont(canvas, text03,1.2,30,fontFamily02,'center',canvas.width *0.8);

    }
  }
  setFont(canvas, text, location,fontSize,font,textAlign,mid) {
    const ctx = canvas.getContext("2d");
    const { textBorder } = 'black';

    ctx.fillStyle = 'black';
    ctx.textAlign = textAlign;
    ctx.textBaseLine = 'middle';
    const line01 = text.split('\n');
    ctx.font = `normal ${fontSize}px ${font}`;
    ctx.lineWidth = fontSize/ 6;
    ctx.strokeStyle = `${textBorder}`;
    ctx.fillStyle = fontSize;
    
    ctx.fillText(
      line01,
      mid,
      canvas.height - fontSize * (line01.length) * location,
    );

  };
  componentDidMount() {
    this.createCanvas();

  }
  componentDidUpdate() {
    this.createCanvas();
  }
  
  customStyles = {
    option: (provided, state) => ({
      ...provided,
      border: '1px dotted black',
      color: state.isSelected ? 'blue' : 'black',
      padding: 5,
      fontSize : 25,
      width: 1000,
      textAlign: 'center',
      justifyContent:'center',
      alignItems:'center',
      textalignlast: 'center',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 1000,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      
      return { ...provided, opacity, transition };
    }
  }

  onSelectChange = (e) => { 
    this.setState({ selectedOption: e.value });
    this.componentDidUpdate();
    this.componentDidUpdate();
  }

  render() {
    return (
      <div>
        <img src = {FrontImage} style={{
        display:'inline-block',
        width:'900px',
        alignItems:'center',
        fontSize : 30}}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{
        display:'inline-block',
        width:'1000px',
        height:'100px',
        fontSize : 40,
        justifyContent: 'center',
        alignItems: 'center',
        //border: '2px solid black',
        }}>
        <Select value={this.selectedOption} options={options} styles={this.customStyles} placeholder={"공약선택"} onChange={this.onSelectChange}/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="canvasTab" style={{
                borderBottom: '1px pink',
                borderBottomColor: '#000000',
                borderBottomWidth: 3,}}
        >
          <canvas ref={this.canvasRef} className="previewCanvas"  style={{border: '2px solid black'}}/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <TextInput01 onChange={this.handleTextChange01} />
        <br></br>
        <TextInput02 onChange={this.handleTextChange02} />
        <br></br>
        <TextInput03 onChange={this.handleTextChange03} />
        <br></br>
        <DownloadImage href={this.state.href}
          canvas={this.canvasRef}
          handleCanvasHref={this.handleCanvasHref} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}
export default App;