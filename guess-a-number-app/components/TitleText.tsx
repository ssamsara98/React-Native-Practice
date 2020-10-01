import React, { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
  children?: ReactNode;
  style?: any;
  [key: string]: any;
}

const TitleText = (props: IProps) => <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});

export default TitleText;
