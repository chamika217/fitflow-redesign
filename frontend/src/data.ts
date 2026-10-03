export type Exercise = { id: string; name: string; detail: string };
export const plans: { title: string; focus: string; exercises: Exercise[] }[] = [
  { title: 'Upper body strength', focus: 'Chest, back, shoulders · 45 min', exercises: [
    { id: 'a1', name: 'Push-ups', detail: '3 sets × 12' }, { id: 'a2', name: 'Dumbbell rows', detail: '3 sets × 10' },
    { id: 'a3', name: 'Shoulder press', detail: '3 sets × 10' }, { id: 'a4', name: 'Plank', detail: '3 × 45 sec' } ] },
  { title: 'Lower body and core', focus: 'Legs, glutes, abs · 40 min', exercises: [
    { id: 'b1', name: 'Goblet squats', detail: '4 sets × 12' }, { id: 'b2', name: 'Walking lunges', detail: '3 sets × 10 each leg' },
    { id: 'b3', name: 'Glute bridges', detail: '3 sets × 15' }, { id: 'b4', name: 'Bicycle crunches', detail: '3 sets × 20' } ] },
  { title: 'Cardio intervals', focus: 'Full body · 30 min', exercises: [
    { id: 'c1', name: 'Jog warm-up', detail: '5 min' }, { id: 'c2', name: 'Sprint intervals', detail: '8 × 30 sec on / 60 sec off' },
    { id: 'c3', name: 'Jump rope', detail: '3 × 2 min' }, { id: 'c4', name: 'Cool-down walk', detail: '5 min' } ] },
];
export type Post = { id: string; user: string; text: string; likes: number };
export const posts: Post[] = [
  { id: 'p1', user: 'Nimali', text: 'Finished a 5 km run this morning. New personal best.', likes: 12 },
  { id: 'p2', user: 'Kasun', text: 'Week 3 of the upper body plan done. Rows are getting easier.', likes: 7 },
  { id: 'p3', user: 'Dilini', text: 'Meal prepped lunches for the whole week.', likes: 19 },
];
export type Meal = { id: string; name: string; kcal: number };
export const meals: Meal[] = [
  { id: 'm1', name: 'Oats with banana', kcal: 380 }, { id: 'm2', name: 'Rice and dhal with vegetables', kcal: 620 },
];
export const calorieGoal = 2100;
