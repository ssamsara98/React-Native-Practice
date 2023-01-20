import { GestureResponderEvent, OpaqueColorValue, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
  icon?: string
  color?: string | OpaqueColorValue
  size?: number
  onPress?: ((event: GestureResponderEvent) => void) | null
}

function IconButton({ icon, color, size, onPress }: IconButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon as any} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
