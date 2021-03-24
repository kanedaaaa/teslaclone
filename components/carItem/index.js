import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from './style';
import StyledButton from '../styledButton/index.js';

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.backgroundImage}
        />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}&nbsp;
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton type="primary" content={"custom order"}
          onPress={() => {
            console.warn("custom orderd pressed")
          }}
          />

        <StyledButton type="secondary" content={"existing inventory"}
            onPress={() => {
              console.warn("existing inventory pressed")
            }}
            />
        </View>

    </View>
  )
}

export default CarItem;
