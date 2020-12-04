import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// import Video from 'react-native-video';

function GalleryHeader({ items }) {
  return (
    <View style={styles.root}>
      {items.map((item) => {
        {
          /* if (item.type === 'video') {
          return (
            <Video
              resizeMode={'contain'}
              source={{ uri: item.source }}
              style={styles.itemStyle}
              controls={true}
              paused={true}
            />
          );
        } */
        }

        if (item.type === 'image') {
          return (
            <Image
              source={{ uri: item.source }}
              style={styles.itemStyle}
              controls={true}
              paused={true}
            />
          );
        }
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  itemStyle: {
    flex: 1,
  },
});
GalleryHeader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
    }),
  ),
};

export default GalleryHeader;
