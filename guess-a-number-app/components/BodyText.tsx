import React, { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
  children?: ReactNode;
  style?: any;
  [key: string]: any;
}

const BodyText = (props: IProps) => <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
  },
});

export default BodyText;
