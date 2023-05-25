import React from 'react';
import {ImageBackground, StyleSheet, Image, View, Text} from 'react-native';
import backgroundImage from '../assets/images/startscreen_bg.png';
import startScreenImage from '../assets/images/startscreen_ny.png';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const StartScreen = () => {
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
            <View style={styles.container}>
                <Text style={{color: 'black', fontSize: 32, fontFamily: 'Maiandra GD Regular', letterSpacing: 8, marginTop: 100}}>FACE</Text>
                <Text style={{color: 'black', fontSize: 14, fontFamily: 'Maiandra GD Regular', letterSpacing: 2, marginTop: 8}}>Find Your Perfect Ace</Text>
                <Image source={startScreenImage} style={styles.image} resizeMode='contain'/>
                <Text style={{color: 'black', fontSize: 16,  fontFamily: 'Nunito-Bold', marginTop: 8}}>Touch Anywhere to Start</Text>
            </View>           
        </ImageBackground>         
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: wp('100%'),
        height: wp('150%'),
        marginTop: -100,
        marginRight: 4,
    },
});

export default StartScreen;