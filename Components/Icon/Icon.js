import { StyleSheet, View, Image } from 'react-native';

import { SvgUri } from 'react-native-svg';

const Icon = (props) => {
    return (
        <SvgUri
            width="100%"
            height="100%"
            uri={props.iconUrl}
        />
    ) 
}

const style = StyleSheet.create({
    AvatarImg: {
        width: '100%',
        height: "100%",
    }
})

export default Icon