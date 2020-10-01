import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

import TitleText from './TitleText';
import Colors from '../constants/colors';

interface IProps {
  childrend?: ReactNode;
  title?: string;
  [key: string]: any;
}

const Header = (props: IProps) => {
  return (
    <View style={styles.header}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
