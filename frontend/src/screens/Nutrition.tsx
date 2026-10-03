import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Title, Sub, Card, Bar, Btn, s } from '../ui';
import { meals as seed, calorieGoal, Meal } from '../data';
export default function Nutrition() {
  const [meals, setMeals] = useState<Meal[]>(seed);
  const total = meals.reduce((t, m) => t + m.kcal, 0);
  return (<View>
    <Title>Nutrition</Title><Sub>Log what you eat today.</Sub>
    <Card><Text style={s.h}>{total} / {calorieGoal} kcal</Text>
      <Text style={s.p}>{Math.max(0, calorieGoal - total)} kcal left today</Text><Bar value={total / calorieGoal} /></Card>
    {meals.map(m => <Card key={m.id}><Text style={s.h}>{m.name}</Text><Text style={s.p}>{m.kcal} kcal</Text></Card>)}
    <Btn label="Add a snack (150 kcal)" onPress={() => setMeals([...meals, { id: 'x' + meals.length, name: 'Snack', kcal: 150 }])} />
  </View>);
}
