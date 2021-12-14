

import React from 'react'
import { View, Text,StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import { Searchbar } from "react-native-paper";

export default function Search({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
    return (
      <View style={{marginTop:0,}}>
         <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        onFocus={() => console.log("focus")}
        onBlur={()=>console.log('blurr')}
        value={searchQuery}
      />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={{fontSize:30}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
}
