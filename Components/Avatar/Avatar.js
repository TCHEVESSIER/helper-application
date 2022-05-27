import { StyleSheet, View, Image } from 'react-native';

const Avatar = (props) => {
    return (
        <Image style={style.AvatarImg} source={props.src}></Image>
    ) 
}

const style = StyleSheet.create({
    AvatarImg: {
        width: "100%",
        height: "100%",
        backgroundColor: 'red',
        borderRadius: 50,
        overflow: 'hidden'
    }
})

export default Avatar