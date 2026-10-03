import React from 'react';
import { View, Text } from 'react-native';
import { Title, Sub, Card, Bar, s } from '../ui';
import { c } from '../theme';
import { plans, meals, calorieGoal } from '../data';
export default function Dashboard() {
  const eaten = meals.reduce((t, m) => t + m.kcal, 0);
  return (<View>
    <Title>Good morning, Chamika</Title><Sub>Here is your day at a glance.</Sub>
    <Card><Text style={s.h}>Today's workout</Text><Text style={s.p}>{plans[0].title} · {plans[0].focus}</Text></Card>
    <Card><Text style={s.h}>Calories</Text>
      <Text style={s.p}>{eaten} of {calorieGoal} kcal eaten</Text><Bar value={eaten / calorieGoal} /></Card>
    <Card><Text style={s.h}>This week</Text><Text style={[s.p, { color: c.good }]}>3 of 5 workouts completed</Text><Bar value={0.6} /></Card>
  </View>);
}
