import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Title, Sub, Card, Bar, Btn, s } from '../ui';
import { c } from '../theme';
import { plans } from '../data';
export default function Workout() {
  const [i, setI] = useState(0);
  const [done, setDone] = useState<Record<string, boolean>>({});
  const plan = plans[i];
  const count = plan.exercises.filter(e => done[e.id]).length;
  return (<View>
    <Title>AI workout plan</Title><Sub>Sample plan built from your goals (demo data).</Sub>
    <Card><Text style={s.h}>{plan.title}</Text><Text style={s.p}>{plan.focus}</Text>
      <Text style={s.p}>{count} of {plan.exercises.length} exercises done</Text><Bar value={count / plan.exercises.length} /></Card>
    {plan.exercises.map(e => (
      <Pressable key={e.id} accessibilityRole="checkbox" accessibilityState={{ checked: !!done[e.id] }} onPress={() => setDone({ ...done, [e.id]: !done[e.id] })}>
        <Card><Text style={[s.h, done[e.id] && { color: c.good }]}>{done[e.id] ? '✓ ' : ''}{e.name}</Text><Text style={s.p}>{e.detail}</Text></Card>
      </Pressable>))}
    <Btn label="Generate a new plan" onPress={() => { setI((i + 1) % plans.length); setDone({}); }} />
  </View>);
}
