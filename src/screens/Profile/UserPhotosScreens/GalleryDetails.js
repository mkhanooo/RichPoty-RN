import { Video } from "expo-av";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, useWindowDimensions } from "react-native";

export default function GalleryDetails(props) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const video = React.useRef(null);
  useEffect(() => {
    console.log(props.route.params.url);
  }, []);
  return (
    <View>
      {props.route.params.type == "photo" && (
        <ImageBackground
          source={{ uri: props.route.params.url }}
          style={{ height: windowHeight, width: windowWidth }}
        />
      )}
      {props.route.params.type == "video" && (
        <Video
          ref={video}
          style={{ height: windowHeight, width: windowWidth }}
          resizeMode="contain"
          source={{
            uri: props.route.params.url,
          }}
          useNativeControls={true}
          isLooping
        />
      )}
    </View>
  );
}
