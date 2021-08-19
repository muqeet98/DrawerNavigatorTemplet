import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from './theme';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.colors.surface },
      mode === 'contained' && { backgroundColor: theme.colors.primary },

      style,
    ]}
    labelStyle={[styles.text,
      mode === 'contained' && { color: theme.colors.surface },

    ]}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    fontFamily:"Montserrat-Regular",

    marginVertical: 2,
  },
  text: {
    color:theme.colors.primary,
    fontWeight: 'bold',
    fontSize: RFValue(18),
    fontFamily:"Montserrat-Regular",
    lineHeight: 26,
  },
});

export default memo(Button);