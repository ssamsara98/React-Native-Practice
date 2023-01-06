import React from 'react';
import { Text, StyleSheet, StyleProp } from 'react-native';

import Colors from '../../constants/colors';

type InstructionTextProps = {
  children?: React.ReactNode;
  style?: StyleProp<any>;
};

function InstructionText({ children, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
