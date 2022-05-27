import { StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Home = () => {
    return (
        <View style={{backgroundColor: '#1A5A73', flex: 1}}>
          <Text> Text </Text>
        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
      position: 'relative',
      top: 0,
    },
    contentContainer : {
      position: 'relative',
      width: screenWidth,
      top: (70 + 0),
      left: 0,
      flexDirection: 'column',
    }
  });

export default Home