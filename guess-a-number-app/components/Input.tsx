import React, { ReactNode } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface IProps {
  children?: ReactNode;
  style?: any;
  [key: string]: any;
}

const Input = (props: IProps) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
