import { Image, ScrollView, Text, View } from 'react-native';
import {styles} from './onBoarding.styles.js';
import GradientButton from '../../components/gradientButton/index.js';
export default function OnBoardingScreen({navigation}) {

  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/onboarding-image.png')} />
        <Text style={styles.title}>Watch Movie</Text>
        <Text style={styles.subTitle}>anyware. enytime.</Text>
        <Text style={styles.desc}>Lorem iipsum dolor sit amet,</Text>
        <Text style={styles.subDesc}>consetetur sadipscing elitr, sed diam.</Text>
        <GradientButton
          onPress={()=>navigation.navigate("HomeMenu")}
        />
      </View>
    </ScrollView>
  );
}
