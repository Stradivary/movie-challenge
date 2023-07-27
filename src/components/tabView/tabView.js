import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./tabView.styles.js";
import { Button, Div } from "react-native-magnus";

export default function tabView({
  data=[],
  title,
  tabSelected,
  titleRight = "See All",
  withTitle=true,
  horizontal=true,
  staticDimension=200,
  scrollEnabled=true,
  gridProps,
  horizontalItemsView=false,
  itemDimension=130,
  handleSeeAll=()=>{},
  handleTabSelected=()=>{},
  children,
  ...tabProps
}) {

  const [selectedTab, setSelectedTab] = useState(tabSelected);
  
  return (
    <View style={styles.root}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Div style={{...tabProps}} row pl={0} pr={12}  justifyContent="flex-start"  w={"100%"} alignItems="flex-start">
        {data && data.map((tab, i)=>{
          const activeTab = selectedTab ===tab?.value;
          return(
            <Button key={i} bg="transparent" 
              onPress={()=>{
                handleTabSelected(tab?.value);
                setSelectedTab(tab?.value);
              }}
              style={activeTab? styles.tabActive : styles.tab}
            >
              {tab?.name}
            </Button>
          );
        })}
      </Div>
      {children}
    </View>
  );
}
