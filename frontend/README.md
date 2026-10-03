# FitFlow – React Native frontend (Expo, TypeScript)

Demo client with mock data: Home, AI workout plan, Community feed, Nutrition tracker.
Backend, Auth0 and the AI service are not connected yet.

## Setup (once)
1. `npx create-expo-app@latest fitflow-app --template blank-typescript`
2. Copy `App.tsx` and the `src/` folder from this repo over the generated project.
3. In `app.json` set: `"name": "FitFlow"`, `"version": "1.1.0"`, `"android": { "package": "com.fitflow.app", "versionCode": 2 }`, `"ios": { "bundleIdentifier": "com.fitflow.app", "buildNumber": "2" }`.

## Run
`npx expo start` then press `a` (Android emulator) or scan the QR with Expo Go.

## Release build (Lab 06)
`npx expo prebuild --platform android` then `cd android && ./gradlew bundleRelease`
(add the signing config from the Lab 06 report to `android/app/build.gradle`).
