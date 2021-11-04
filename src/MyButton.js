import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types'

const MyButton = ({ title, onPress, children, title2 }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('press')}
      onPressIn={() => console.log('in')}
      onPressOut={() => console.log('out')}
      onLongPress={() => console.log('long')}
      // LongPress의 시간을 설정해줄 수 있다.
      delayLongPress={3000}
    >
      <View style={{backgroundColor: 'red', padding: 10, margin: 10}}> 
        <Text style={{ fontSize: 20, color: 'white' }}>
          {children || title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  title: 'default',
  onPress: () => alert('default'),
};

MyButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  // title2: PropTypes.string.isRequired,
}

export default MyButton;
