/* eslint-disable prettier/prettier */
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Edit'>;

const EditScreen = ({navigation, route}: Props) => {
  const {data} = route.params;

  const [formData, setFormData] = useState(data);

  const [professionalExperienceCount] = useState(
    formData.professionalExperience.length + 1,
  );
  const [educationalExperienceCount] = useState(
    formData.educationalExperience.length + 1,
  );

  function handleChange(fieldName: string, value: string | string[]) {
    setFormData(prevValues => ({...prevValues, [fieldName]: value}));
  }

  function handleExperienceChange(
    index: number,
    fieldName: 'professionalExperience' | 'educationalExperience',
    subFieldName: 'title' | 'info',
    value: string,
  ) {
    const objToUpdate = formData[fieldName].find((_, key) => index === key) || {
      title: '',
      info: '',
    };
    objToUpdate[subFieldName] = value;

    setFormData(prevValues => ({
      ...prevValues,
      [fieldName]: [
        ...prevValues[fieldName].slice(0, index),
        objToUpdate,
        ...prevValues[fieldName].slice(index + 1),
      ],
    }));
  }

  function handleSubmit() {
    navigation.navigate('Home', {data: formData});
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.name}
            onChangeText={value => handleChange('name', value)}
          />
        </View>

        <View>
          <Text>Job Role</Text>
          <TextInput
            style={styles.input}
            placeholder="Job Role"
            value={formData.role}
            onChangeText={value => handleChange('role', value)}
          />
        </View>

        <View>
          <Text>GitHub Handle</Text>
          <TextInput
            style={styles.input}
            placeholder="GitHub Handle"
            value={formData.githubHandle}
            onChangeText={value => handleChange('githubHandle', value)}
          />
        </View>

        <View>
          <Text>Bio</Text>
          <TextInput
            style={styles.input}
            placeholder="Bio"
            value={formData.bio}
            onChangeText={value => handleChange('bio', value)}
            multiline={true}
          />
        </View>

        <View>
          <Text>Key Skills</Text>
          <TextInput
            style={styles.input}
            placeholder="Key Skills"
            value={formData.skills.join(',')}
            onChangeText={value =>
              handleChange('skills', value.replace(', ', ',').split(','))
            }
            multiline={true}
          />
          <Text>Separate each skill with a comma</Text>
        </View>

        <View>
          <Text>Professional Experience</Text>

          {Array(professionalExperienceCount)
            .fill(1)
            .map((_, key) => (
              <View key={key} style={styles.experienceContainer}>
                <View style={styles.span}>
                  <Text>Title {key + 1}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={formData.professionalExperience[key]?.title}
                    onChangeText={value =>
                      handleExperienceChange(
                        key,
                        'professionalExperience',
                        'title',
                        value,
                      )
                    }
                    multiline={true}
                  />
                </View>
                <View style={styles.span}>
                  <Text>Description {key + 1}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={formData.professionalExperience[key]?.info}
                    onChangeText={value =>
                      handleExperienceChange(
                        key,
                        'professionalExperience',
                        'info',
                        value,
                      )
                    }
                    multiline={true}
                  />
                </View>
              </View>
            ))}
        </View>

        <View>
          <Text>Educational Experience</Text>

          {Array(educationalExperienceCount)
            .fill(1)
            .map((_, key) => (
              <View key={key} style={styles.experienceContainer}>
                <View style={styles.span}>
                  <Text>Title {key + 1}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={formData.educationalExperience[key]?.title}
                    onChangeText={value =>
                      handleExperienceChange(
                        key,
                        'educationalExperience',
                        'title',
                        value,
                      )
                    }
                    multiline={true}
                  />
                </View>
                <View style={styles.span}>
                  <Text>Description {key + 1}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={formData.educationalExperience[key]?.info}
                    onChangeText={value =>
                      handleExperienceChange(
                        key,
                        'educationalExperience',
                        'info',
                        value,
                      )
                    }
                    multiline={true}
                  />
                </View>
              </View>
            ))}
        </View>

        <Button title="Save" onPress={() => handleSubmit()} />
      </View>
    </ScrollView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, gap: 20},
  input: {borderWidth: 1},
  span: {flex: 1},
  experienceContainer: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
});
