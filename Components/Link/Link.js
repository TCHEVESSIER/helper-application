import React from 'react-native'
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

const Link = (props) => {
    return (
        <View>
            <Text style={style.linkButton} onPress={() => Linking.openURL('http://google.com')}>
                {props.Text}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    linkButton : {
        padding: 9,
        color: "#fff",
        backgroundColor: "#24A4A5",
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '400'
    }
})

export default Link