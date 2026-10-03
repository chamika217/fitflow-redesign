import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { c } from './theme';
export const Title = ({ children }: { children: string }) => <Text style={s.title}>{children}</Text>;
export const Sub = ({ children }: { children: string }) => <Text style={s.sub}>{children}</Text>;
export const Card = ({ children }: { children: React.ReactNode }) => <View style={s.card}>{children}</View>;
export const Bar = ({ value }: { value: number }) => (
  <View style={s.track}><View style={[s.fill, { width: `${Math.min(100, Math.round(value * 100))}%` }]} /></View>
);
export const Btn = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [s.btn, pressed && { opacity: 0.8 }]}>
    <Text style={s.btnText}>{label}</Text>
  </Pressable>
);
export const s = StyleSheet.create({
  title: { fontSize: 28, fontWeight: '800', color: c.ink, letterSpacing: -0.5 },
  sub: { fontSize: 15, color: c.mute, marginTop: 2, marginBottom: 14 },
  card: { backgroundColor: c.card, borderRadius: 14, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: c.line },
  track: { height: 10, borderRadius: 5, backgroundColor: c.track, overflow: 'hidden', marginTop: 8 },
  fill: { height: 10, backgroundColor: c.accent },
  btn: { backgroundColor: c.accent, borderRadius: 10, paddingVertical: 13, alignItems: 'center', marginTop: 6 },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  h: { fontSize: 17, fontWeight: '700', color: c.ink },
  p: { fontSize: 15, color: c.mute, marginTop: 4 },
});
