  import React from 'react';
import { View} from 'react-native';
import { styles } from './header.styles';
import { Button, Icon } from 'react-native-magnus';

const HeaderOption = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Button onPress={()=>navigation.goBack()} w={40} h={30} bg='gray400' p={2} m={0} >
        <Icon name="arrow-left" fontFamily='Feather' fontSize={"xl"} color='white' p={0} />
      </Button>
      <Button bg='gray400' w={41} h={30} p= {2} m={0}>
        <Icon name="share-2" fontFamily='Feather' fontSize={16} color='white' p={0} m={0} />
      </Button>
    </View>
  );
};

export default HeaderOption;
