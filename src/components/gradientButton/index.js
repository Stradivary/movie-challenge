import React, { useState, useEffect } from 'react';

import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './gradientButton.styles.js';
import { Div } from 'react-native-magnus';

const GradientButton = ({onPress, title='Get Started', style,leftSection, rightSection, customStyle={}, ...props}) => {
  return (
    <TouchableOpacity style={style} onPress={()=>onPress()}>
      <LinearGradient 
        colors={['rgba(150,59,224,1)','rgba(104,6,247,1)']}
        start={{x:0, y:0.1}}
        end={{x:0.01, y:1}}
        style={{...styles.button, ...customStyle}}
        {...props}
      >
        <Div row>
          {leftSection}
          <Text style={styles.textButton}>{title}</Text>
          {rightSection}
        </Div>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
