import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Title, Sub, Card, s } from '../ui';
import { c } from '../theme';
import { posts } from '../data';
export default function Feed() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  return (<View>
    <Title>Community</Title><Sub>See what your friends are doing.</Sub>
    {posts.map(p => (<Card key={p.id}>
      <Text style={s.h}>{p.user}</Text><Text style={[s.p, { color: c.ink }]}>{p.text}</Text>
      <Pressable accessibilityRole="button" onPress={() => setLiked({ ...liked, [p.id]: !liked[p.id] })} style={{ marginTop: 10 }}>
        <Text style={{ color: liked[p.id] ? c.accent : c.mute, fontWeight: '700' }}>{liked[p.id] ? 'Liked' : 'Like'} · {p.likes + (liked[p.id] ? 1 : 0)}</Text>
      </Pressable></Card>))}
  </View>);
}
