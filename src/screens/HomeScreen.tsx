/* eslint-disable prettier/prettier */
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {DEFAULT_INFO} from '../constants';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation, route}: Props) => {
  const newData = route.params?.data;

  const data = newData || DEFAULT_INFO;

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/Profile.jpg')}
            />
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.job}>{data.role}</Text>
            <Text style={styles.githubHandle}>{data.githubHandle}</Text>
            <View style={styles.editBtnContainer}>
              <Button
                title="Edit"
                onPress={() => navigation.replace('Edit', {data})}
              />
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Bio */}
        <View style={styles.bioContainer}>
          <Text style={styles.bioText}>{data.bio}</Text>
        </View>

        <View style={styles.divider} />

        {/* Professional Experience */}
        <View style={styles.experienceContainer}>
          <Text style={styles.experienceHeader}>Professional Experience</Text>

          <View style={styles.experienceList}>
            {data.professionalExperience.map((experience, key) => (
              <View key={key}>
                <Text style={styles.experienceListTitle}>
                  {experience.title}
                </Text>
                <Text style={styles.experienceListInfo}>{experience.info}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.divider} />

        {/* Educational Experience */}
        <View style={styles.experienceContainer}>
          <Text style={styles.experienceHeader}>Educational Experience</Text>

          <View style={styles.experienceList}>
            {data.educationalExperience.map((experience, key) => (
              <View key={key}>
                <Text style={styles.experienceListTitle}>
                  {experience.title}
                </Text>
                <Text style={styles.experienceListInfo}>{experience.info}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.divider} />

        {/* Key Skills */}
        <View style={styles.experienceContainer}>
          <Text style={styles.experienceHeader}>Key Skills</Text>

          <View style={styles.skillsList}>
            {data.skills
              .filter(skill => skill.trim())
              .map((skill, key) => (
                <View style={styles.skillLabel} key={key}>
                  <Text style={styles.skillLabelText}>{skill.trim()}</Text>
                </View>
              ))}
          </View>
        </View>

        <View style={styles.divider} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 20,
  },

  divider: {
    height: 2,
    backgroundColor: 'blue',
    marginVertical: 4,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  headerInfo: {gap: 2},

  name: {
    color: 'blue',
    fontSize: 28,
    fontWeight: '200',
  },

  job: {
    fontSize: 16,
  },

  githubHandle: {
    fontSize: 12,
  },

  editBtnContainer: {width: 60, marginTop: 10},

  bioContainer: {},

  bioText: {textAlign: 'center'},

  experienceContainer: {},

  experienceHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: 'blue',
    marginBottom: 8,
  },

  experienceList: {gap: 10},

  experienceListTitle: {fontWeight: '500'},

  experienceListInfo: {marginBottom: 4},

  skillsList: {flexDirection: 'row', gap: 10, flexWrap: 'wrap'},

  skillLabel: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#0000ff22',
    borderRadius: 20,
  },

  skillLabelText: {fontSize: 12, color: 'blue'},
});
