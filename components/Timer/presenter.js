import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import Button from '../Button';

const _timeFormmat = time => {
    let minutes = Math.floor(time / 60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    const timeFormmat = `${minutes < 10 ? `0${minutes}`:`${minutes}`}:${seconds < 10 ? `0${seconds}`:`${seconds}`}`;
    return timeFormmat;
};

class Timer extends Component {

    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying) {
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({ timerInterval });
        } else if(currentProps.isPlaying && !nextProps.isPlaying) {
            clearInterval(this.state.timerInterval);
        }
    }

    render() {
        const { 
            isPlaying, 
            elapcedTime, 
            timerDuration,
            startTimer,
            restartTimer,
            addSecond
        } = this.props;

        return (
            <View style={styles.container}>
                <StatusBar barStyle={"dark-content"} />
                <View style={styles.upper}>
                    <Text style={styles.time}>{ _timeFormmat(timerDuration - elapcedTime) }</Text>
                </View>
                <View style={styles.lower}>
                    { isPlaying ? 
                        <Button iconName="stop-circle" onPressOut={restartTimer} />
                    :
                        <Button iconName="play-circle" onPressOut={startTimer} />
                    }   
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#619355"
  },
  upper: {
    flex: 2,
    justifyContent: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center"
  },
  time: {
    fontSize: 120,
    fontWeight: "100",
    color: "#603c15"
  }
});

export default Timer;