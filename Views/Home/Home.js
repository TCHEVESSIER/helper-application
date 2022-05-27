import { StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';


// Import Components

import Header from './../../Components/Header/Header';
import Link from '../../Components/Link/Link';


const screenWidth = Dimensions.get('window').width;

const Home = () => {
    return (
        <View style={{backgroundColor: '#1A5A73', flex: 1}}>
          <View style={styles.container}>
            <Header></Header>
            <View style={styles.contentContainer}>
              <Text style={{fontFamily: 'Nunito-Bold', fontSize: 24, color: "#fff", marginBottom: 15, marginHorizontal: 0, paddingLeft: 10, textAlign: 'left'}}> Que souhaitez-vous faire ? </Text>
              <View> 
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection: 'row', flex: 1}}>
                    <View style={{flex: 2, flexDirection: 'row', paddingLeft: 20}}>
                      <Link Text="En savoir plus sur une maladie"></Link> 
                    </View>
                    <View style={{flex: 2, flexDirection: 'row', paddingLeft: 20}}>
                      <Link Text="Consulter mon agenda"></Link> 
                    </View>
                    <View style={{flex: 2, flexDirection: 'row', paddingLeft: 20}}>
                      <Link Text="Parler avec la communauté"></Link> 
                    </View>
                    <View style={{flex: 2, flexDirection: 'row', paddingLeft: 20, paddingEnd: 20}}>
                      <Link Text="Accéder à mon profil"></Link> 
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
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