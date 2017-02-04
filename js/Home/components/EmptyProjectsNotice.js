import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  withNavigation,
} from '@exponent/ex-navigation';

import Colors from '../constants/Colors';
import PrimaryButton from './PrimaryButton';

@withNavigation
export default class EmptyProjectsNotice extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.titleText}>
          Nothing to see here, yet
        </Text>

        <Text style={styles.descriptionText}>
          This screen is where you’ll be able to open any project you have
          running in your Exponent XDE. You’ll also find your recently opened
          projects here.
        </Text>

        <PrimaryButton
          onPress={this._handleExplorePress}
          fallback={TouchableOpacity}>
          Explore Exponent projects
        </PrimaryButton>
      </ScrollView>
    );
  }

  _handleExplorePress = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('main').jumpToTab('explore');
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyBackground,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  titleText: {
    color: '#232b3a',
    marginBottom: 15,
    fontWeight: '400',
    ...Platform.select({
      ios: {
        fontSize: 22,
      },
      android: {
        fontSize: 23,
      },
    }),
  },
  descriptionText: {
    color: 'rgba(36, 44, 58, 0.7)',
    textAlign: 'center',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        fontSize: 15,
        lineHeight: 20,
        marginHorizontal: 10,
      },
      android: {
        fontSize: 16,
        lineHeight: 24,
        marginHorizontal: 15,
      },
    }),
  },
});
