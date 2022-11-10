import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from '@react-native-community/datetimepicker'

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Button } from "react-native-paper";

export default class CalendarScreen extends Component {
    render() {
        return (
            <Text>
                Calendar Screen
            </Text>
        )
    }
}