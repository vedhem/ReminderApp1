import * as React from "react";
import DateTimePicker from '@react-native-community/datetimepicker'

import CalendarScreen from "./screens/CalendarScreen";
import ComingScreen from "./screens/ComingScreen";
import EventScreen from "./screens/EventScreen";
import FinanceScreen from "./screens/FinanceScreen";
import HealthScreen from "./screens/HealthScreen";
import HomeScreen from "./screens/HomeScreen";
import MeetScreen from "./screens/MeetScreen";
import OtherScreen from "./screens/OtherScreen";
import SpecificEventScreen from "./screens/SpecificEventScreen";
import WorkScreen from "./screens/WorkScreen";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

const AppSwitchNavigator = createSwitchNavigator({
  CalendarScreen: CalendarScreen,
  ComingScreen: ComingScreen,
  EventScreen: EventScreen,
  FinanceScreen: FinanceScreen,
  HealthScreen: HealthScreen,
  HomeScreen: HomeScreen,
  MeetScreen: MeetScreen,
  OtherScreen: OtherScreen,
  SpecificEventScreen: SpecificEventScreen,
  WorkScreen: WorkScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
