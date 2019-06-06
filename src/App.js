import React from 'react';
import { TweenMax, Power2 } from 'gsap/TweenMax';
import './App.css';
import pupper from './pupper.jpg';

class App extends React.Component {
  componentDidMount() {
    console.log('go');
    TweenMax.set('.clipPath', {
      scale: 3.6,
      xPercent: 150,
      yPercent: 150,
      // gsap transform origin better than css
      transformOrigin: '50% 50%',
    });
  }
  handleEnterSeven() {
    TweenMax.to('.clipPath', 0.35, {
      scale: 3.1,
      transformOrigin: '50% 50%',
      // can rotate if you want:
      // rotation: 90,
      ease: Power2.easeOut,
      // note: can also directly transform svg attributes
      // attr: {
      //   r: 300,
      // },
    });
    TweenMax.to('.maskedImage', 0.35, {
      scale: 1.075,
      transformOrigin: '50% 50%',
      ease: Power2.easeOut,
    });
  }
  handleExitSeven() {
    TweenMax.to('.clipPath', 0.4, {
      scale: 3.6,
      transformOrigin: '50% 50%',
      rotation: 0,
      ease: Power2.easeOut,
    });
    TweenMax.to('.maskedImage', 0.4, {
      scale: 1,
      transformOrigin: '50% 50%',
      ease: Power2.easeOut,
    });
  }
  render() {
    return (
      <div className="app">
        <h1>SVG/Image Mask Tests</h1>
        <p>Note, should check these out in various browsers...</p>
        <div className="container">
          <h2>Test 1: Image with PNG mask-image on Img</h2>
          <p>
            When mask is on img, scale effects mask as well.{' '}
            <strong>Some flicker</strong>
          </p>
          <div className="test test1">
            <img src={pupper} alt="" />
          </div>
        </div>
        <div className="container">
          <h2>Test 2: Image with PNG mask-image on Conatiner, scale image</h2>
          <p>Hover for subtle scale.</p>
          <div className="test test2">
            <img src={pupper} alt="" />
          </div>
        </div>
        <div className="container">
          <h2>Test 3: Image with PNG mask-image on Conatiner, reverse scale</h2>
          <p>
            Hover for subtle scale. <strong>Some flicker</strong>
          </p>
          <div className="test test3">
            <img src={pupper} alt="" />
          </div>
        </div>
        <div className="container">
          <h2>Test 4: Mask size zoom out</h2>
          <p>Hover for subtle scale.</p>
          <div className="test test4">
            <img src={pupper} alt="" />
          </div>
        </div>
        <div className="container">
          <h2>Test 5: Mask size zoom in</h2>
          <p>Hover for subtle scale.</p>
          <div className="test test5">
            <img src={pupper} alt="" />
          </div>
        </div>
        <div className="container">
          <h2>Test 6: Nested Masks</h2>
          <p>Hover for subtle scale.</p>
          <div className="test test6">
            <div className="test innerMask">
              <img src={pupper} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Test 7: SVG clip path + GSAP</h2>
          <p>
            <a href="https://tympanus.net/codrops/2015/06/18/card-expansion-effect-svg-clippath/">
              https://tympanus.net/codrops/2015/06/18/card-expansion-effect-svg-clippath/
            </a>
          </p>
          <p>Hover for subtle scale.</p>
          <div
            className="test test7"
            onMouseEnter={this.handleEnterSeven}
            onMouseLeave={this.handleExitSeven}
          >
            <svg viewBox="0 0 682 625" role="img">
              <title>Img alt text</title>
              <image
                className="maskedImage"
                clipPath="url(#clipPath1)"
                width="682"
                height="625"
                href={pupper}
              />
            </svg>
            <svg viewBox="0 0 682 625">
              <defs>
                <clipPath id="clipPath1">
                  <path
                    class="clipPath"
                    d="M170.43,156,162.5,11.46C139.81,4.18,113.41,0,85.22,0S30.62,4.18,7.94,11.46L0,156Z"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="container">
          <h2>Test 8: Canvas</h2>
          <p>Can get into these funky canvas methods if we need to:</p>
          <p>
            <a href="https://codepen.io/shshaw/pen/PPEMYX">
              https://codepen.io/shshaw/pen/PPEMYX
            </a>
          </p>
          <p>
            <a href="https://codepen.io/njmcode/pen/XbdjQz">
              https://codepen.io/njmcode/pen/XbdjQz
            </a>
          </p>
        </div>
      </div>
    );
  }
}
// <clipPath id="clipPath1">
//   <path
//     class="clipPath"
//     transform="translate(100 100) scale(4)"
//     d="M170.43,156,162.5,11.46C139.81,4.18,113.41,0,85.22,0S30.62,4.18,7.94,11.46L0,156Z"
//   />
// </clipPath>
// <circle className="clip" cx="150" cy="150" r="300" />

export default App;
