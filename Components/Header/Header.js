import { StyleSheet, Text, View, Dimensions } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Avatar from '../Avatar/Avatar';

// Import Assets

// Medias
import AvatarImg from '../../assets/Medias/Avatar.jpg';

// Icons
import Notification from '../../assets/Medias/Icons/Notification.svg'

const screenWidth = Dimensions.get('window').width;

const Header = () => {

    return (
        <View style={style.Header}>
            <View style={style.HeaderContainer}>
                <View style={style.leftSide}>
                    <Text style={{fontFamily: 'Nunito-Light', color: '#fff', fontSize: 16}}> Bonjour, <Text style={{fontSize: 20}}>👋</Text> </Text>
                    <Text style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 22}}> Théo Chevessier </Text>
                </View>
                <View style={style.rightSide}>
                    <View style={style.Icon}><Notification width={37} height={"100%"} fill={"#fff"}></Notification></View>
                    <View style={style.Avatar}><Avatar style={{alignSelf: 'flex-end'}} src={AvatarImg}></Avatar></View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Header: {
        height: 70,
        position: 'relative',
        top: 45
    },
    HeaderContainer : {
        width: screenWidth - 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    TextHeader : {
        color: '#fff',
    },
    leftSide : {
        flex: 2,
        justifyContent: 'center',
        height: '100%'
    },
    rightSide : {
        height: 70,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    Avatar: {
        width: 54,
        height: 54,
    },
    Icon : {
        width: 54,
        height: 54
    }
})

export default Header