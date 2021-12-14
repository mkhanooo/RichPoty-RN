import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

import axios from "axios";
import { Video, AVPlaybackStatus } from "expo-av";
export default function UserGallery({ navigation }) {
  // const [photos, setPhotos] = useState([]);
  // const [videos, setVideos] = useState([]);
  // const [status, setStatus] = useState({});
  const video = React.useRef(null);

  const imagesData = [
    {
      url: "https://i.ibb.co/FscZpR8/pexels-ekaterina-nt-9027062.jpg",
    },
    {
      url: "https://images.pexels.com/photos/9824669/pexels-photo-9824669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url: "https://images.pexels.com/photos/5270341/pexels-photo-5270341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url: "https://images.pexels.com/photos/10166802/pexels-photo-10166802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url: "https://images.pexels.com/photos/10069463/pexels-photo-10069463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url: "https://images.pexels.com/photos/10153595/pexels-photo-10153595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  const videoData = [
    {
      url: "https://player.vimeo.com/external/305250673.sd.mp4?s=cf9c5c628f24fc2cf33d652d62715bcdf8974701&profile_id=164&oauth2_token_id=57447761",
    },
    {
      url: "https://player.vimeo.com/external/297927791.sd.mp4?s=5ceeec8c83fcb634312c157cc101b8bd19969b61&profile_id=164&oauth2_token_id=57447761",
    },
    {
      url: "https://player.vimeo.com/external/370467553.sd.mp4?s=96de8b923370fb7fa8616d4e0b74eaf3fac9e576&profile_id=164&oauth2_token_id=57447761",
    },
    {
      url: "https://player.vimeo.com/external/295482071.sd.mp4?s=238ca35e1e9ae91fd08ce5e290c1f168c7f1fe1b&profile_id=164&oauth2_token_id=57447761",
    },
    {
      url: "https://player.vimeo.com/external/214503838.sd.mp4?s=0aac7d3caa1d5eedbd97234814b1ca37904b71b2&profile_id=164&oauth2_token_id=57447761",
    },
  ];
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  // useEffect(() => {
  //   axios
  //     .get("https://api.pexels.com/v1/curated", {
  //       headers: {
  //         Authorization:
  //           "563492ad6f9170000100000184bcc5d6c148435abf9f98e21c5e7e19",
  //       },
  //     })
  //     .then((res) => {
  //       const arr = [];
  //       const photoArray = [];
  //       arr.push(res.data);
  //       arr.map((item) => {
  //         item.photos.map((photoItem) => {
  //           photoArray.push(photoItem.src.large);
  //         });
  //       });
  //       setPhotos(photoArray);
  //     });
  // }, []);
  // const paxelVideo = () => {
  //   axios
  //     .get("https://api.pexels.com/videos/popular", {
  //       headers: {
  //         Authorization:
  //           "563492ad6f9170000100000184bcc5d6c148435abf9f98e21c5e7e19",
  //       },
  //     })
  //     .then((res) => {
  //       // console.log(res.data.videos)
  //       res.data.videos.map((item) => {
  //         // console.log(item.video_files)
  //         const vid = [];
  //         const newVideoArr = item.video_files.filter(
  //           (videoItem) => videoItem.width == 640
  //         );
  //         newVideoArr.map((vido) => {
  //           // vid.push(vido.link);
  //           console.log("vid-=-=", vido);
  //         });
  //         // setVideos(vid);
  //       });
  //       // const arr = [];
  //       // const photoArray = [];
  //       // arr.push(res.data);

  //       // arr.map((item, ind) => {
  //       //   item.photos.map((photoItem) => {
  //       //     photoArray.push(photoItem.src.original);
  //       //     console.log(photoItem.src.original);
  //       //   });
  //       // });
  //       // setPhotos(photoArray);
  //     });
  // };
  return (
    <ScrollView>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {imagesData.map((item, i) => {
          return (
          
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("GalleryDetails", {
                    url: item.url,
                    type: "photo",
                  })
                }
                key={i}
              >
                <Image
                  style={{
                    height: windowHeight / 3,
                    width: windowWidth / 3 - 6,
                    borderRadius: 5,
                    marginLeft: 2,
                    marginTop: 2,
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
              </TouchableWithoutFeedback>
            
          );
        })}
      </View>
      <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {videoData.map((vid, k) => {
          return (
          
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("GalleryDetails", {
                    url: vid.url,
                    type: "video",
                  })
                }
                key={k}
              >
                <Video
                  ref={video}
                  style={{
                    height: windowHeight / 3,
                    width: windowWidth / 3 - 6,
                    borderRadius: 5,
                    marginLeft: 2,
                    marginTop: 2,
                  }}
                  resizeMode="cover"
                  source={{
                    uri: vid.url,
                  }}
                  useNativeControls={true}
                  isLooping
                  // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                >
                </Video>
              </TouchableWithoutFeedback>
            
          );
        })}
        {/* <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        /> */}
      </View>
    </ScrollView>
  );
}
