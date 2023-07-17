import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Div, Icon, Text } from "react-native-magnus";

const TabBarBottom = ({ state, descriptors, navigation }) => {

  return (
    <View>
      <Div
        shadow={"xl"}
        borderWidth={1}
        row
        justifyContent="space-around"
        bg="primary500"
        alignItems="center"
        h={75}
        w={"100%"}
        p={20}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title: route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: false });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={`index`+index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            > 
            <Div alignItems="center" justifyContent="center">
              <Icon name={options?.icon} fontFamily={options?.fontFamily} color={isFocused ? "white" :'#7a7a7a'} fontSize={20} />
              <Text fontSize={'xs'} color={isFocused ? "white" :'#7a7a7a'}>{label}</Text>
            </Div>
            </TouchableOpacity>
          );
        })}
      </Div>
    </View>
  );
};

export default TabBarBottom;
