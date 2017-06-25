import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

export default class Webcam extends Component {
  static defaultProps = {
    audio: true,
    className: '',
    height: 480,
    muted: false,
    onUserMedia: () => { },
    screenshotFormat: 'image/webp',
    width: 640,
  };

  static propTypes = {
    audio: PropTypes.bool,
    muted: PropTypes.bool,
    onUserMedia: PropTypes.func,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    screenshotFormat: PropTypes.oneOf([
      'image/webp',
      'image/png',
      'image/jpeg',
    ]),
    style: PropTypes.object,
    className: PropTypes.string,
    audioSource: PropTypes.string,
    videoSource: PropTypes.string,
  };

  static mountedInstances = [];

  static userMediaRequested = false;

  constructor() {
    super();
    this.state = {
      hasUserMedia: false,
    };
  }

  componentDidMount() {
    if (!hasGetUserMedia()) return;

    Webcam.mountedInstances.push(this);

    if (!this.state.hasUserMedia && !Webcam.userMediaRequested) {
      this.requestUserMedia();
    }
  }

  componentWillUnmount() {
    const index = Webcam.mountedInstances.indexOf(this);
    Webcam.mountedInstances.splice(index, 1);

    if (Webcam.mountedInstances.length === 0 && this.state.hasUserMedia) {
      if (this.stream.stop) {
        this.stream.stop();
      } else {
        if (this.stream.getVideoTracks) {
          this.stream.getVideoTracks().map(track => track.stop());
        }
        if (this.stream.getAudioTracks) {
          this.stream.getAudioTracks().map(track => track.stop());
        }
      }
      Webcam.userMediaRequested = false;
      window.URL.revokeObjectURL(this.state.src);
    }
  }

  getScreenshot() {
    if (!this.state.hasUserMedia) return null;

    const canvas = this.getCanvas();
    return canvas.toDataURL(this.props.screenshotFormat);
  }

  getCanvas() {
    if (!this.state.hasUserMedia) return null;

    const video = findDOMNode(this);
    if (!this.ctx) {
      const canvas = document.createElement('canvas');
      const aspectRatio = video.videoWidth / video.videoHeight;

      canvas.width = video.clientWidth;
      canvas.height = video.clientWidth / aspectRatio;

      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
    }

    const { ctx, canvas } = this;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    return canvas;
  }

  requestUserMedia() {
    navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    const sourceSelected = (audioSource, videoSource) => {
      // Prefer camera resolution nearest to 1280x720.
      var constraints = { audio: false, video: { width: 350, height: 350, facingMode: "environment"}};

      navigator.mediaDevices.getUserMedia(constraints)
        .then(function (mediaStream) {
          Webcam.mountedInstances.forEach(instance => instance.handleUserMedia(null, mediaStream))
          // var video = document.querySelector('video');
          // video.srcObject = mediaStream;
          // video.onloadedmetadata = function (e) {
          //   video.play();
          // };
        })
        .catch(function (err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
      // alert(videoSource)
      // const constraints = {
      //   video: {
      //     facingMode: { exact: "environment" }
      //     //optional: [{ sourceId: videoSource }],
      //   },
      // };

      // if (this.props.audio) {
      //   constraints.audio = {
      //     optional: [{ sourceId: audioSource }],
      //   };
      // }

      // navigator.mediaDevices.getUserMedia(constraints, (stream) => {
      //   // alert(stream)
      //   Webcam.mountedInstances.forEach(instance => instance.handleUserMedia(null, stream));
      // }, (e) => {
      //   Webcam.mountedInstances.forEach(instance => instance.handleUserMedia(e));
      // });
    };

    if (this.props.audioSource && this.props.videoSource) {
      sourceSelected(this.props.audioSource, this.props.videoSource);
    } else if ('mediaDevices' in navigator) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        let audioSource = null;
        let videoSource = null;

        devices.forEach((device) => {
          if (device.kind === 'audioinput') {
            audioSource = device.deviceId;
          } else if (device.kind === 'videoinput') {
            videoSource = device.deviceId;
          }
        });

        sourceSelected(audioSource, videoSource);
      })
      .catch((error) => {
        console.log(`${error.name}: ${error.message}`); // eslint-disable-line no-console
      });
    } else {
      MediaStreamTrack.getSources((sources) => {
        let audioSource = null;
        let videoSource = null;

        sources.forEach((source) => {
          if (source.kind === 'audioinput') {
            audioSource = source.id;
          } else if (source.kind === 'videoinput') {
            videoSource = source.id;
          }
        });

        sourceSelected(audioSource, videoSource);
      });
    }

    Webcam.userMediaRequested = true;
  }

  handleUserMedia(error, stream) {
    if (error) {
      this.setState({
        hasUserMedia: false,
      });

      return;
    }

    const src = window.URL.createObjectURL(stream);

    this.stream = stream;
    this.setState({
      hasUserMedia: true,
      src,
    });

    this.props.onUserMedia();
  }

  render() {
    return (
      <video
        autoPlay
        width={this.props.width}
        height={this.props.height}
        src={this.state.src}
        muted={this.props.muted}
        className={this.props.className}
        style={this.props.style}
      />
    );
  }
}