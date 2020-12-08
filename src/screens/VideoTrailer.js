import { useNavigation } from '@react-navigation/native';
import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-svg';
import Video from 'react-native-video';

export default function VideoTrailer(props) {
  const navigation = useNavigation();
  const { uri } = props.route.params;
  return (
    <View style={styles.root}>
      <Text>Testing..</Text>
      <Video
        source={{ uri }}
        resizeMode={'contain'}
        controls={true}
        onEnd={() => navigation.goBack()}
        style={styles.videoPlayer}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  videoPlayer: {
    position: 'relative',
    flex: 1,
  },
});
