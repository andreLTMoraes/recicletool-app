import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { COLORS } from '../../utils/AppStyles'
import appStyles from '../../utils/AppStyles';

export default function Rules() {
  return (
    <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[appStyles.mainContainer, { backgroundColor: COLORS.primaryLight }]}>
        <Text style={[appStyles.text, { color: COLORS.primaryDark, fontWeight: '700' }]}>Regras</Text>
        <View style={styles.textContainer}>
          <Text style={[appStyles.text, { textAlign: 'left' }]}>
            {loremIpsum}
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40,
    paddingLeft: 30,
    paddingRight: 25,
    paddingVertical: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  }

});

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed adipiscing eu ultrices egestas. Gravida sed nulla tellus vitae at morbi id non vel. Eu a magnis lacus dictumst ipsum ac. Fermentum ac risus tempus tempor dignissim morbi sed ultricies at. Vitae faucibus id pellentesque ut feugiat sagittis pharetra porta. Urna in montes, sem enim. Sed sed nunc fringilla porta in nunc maecenas. Non, ridiculus donec urna feugiat at consectetur. Enim dui at imperdiet enim. Adipiscing sit donec neque, eget in. Commodo quis odio sociis erat pellentesque. Risus et sit amet arcu ultricies cras urna pretium. Rhoncus commodo consectetur rhoncus feugiat cursus integer enim dictum. Adipiscing consequat elementum nibh eu libero. Cras mauris feugiat et, blandit morbi malesuada. Nec arcu ac sed amet, elementum. Magna pellentesque amet at massa elit eu. Diam interdum at eu sapien aliquam enim. Nunc nunc facilisis proin justo, vel ultricies massa aliquam. Cursus tempor, vulputate tristique facilisis auctor. Ultrices odio nunc tincidunt sodales aliquam integer eget. Sed viverra cras magna arcu molestie. Amet tincidunt a amet eget volutpat nec ultrices. Et ultrices luctus mattis suspendisse eget adipiscing tellus, diam at. Purus, ullamcorper sodales mattis tellus facilisis diam orci. Convallis auctor sagittis cras eget leo, ornare ultricies tellus suspendisse. Dui diam vitae sed nullam accumsan pharetra eleifend. Nisl, semper quisque magna ut platea. Mi eget urna, facilisis enim augue diam semper. Et massa turpis eros, faucibus odio in pellentesque. In sit sagittis egestas diam sed rhoncus nisi commodo. Cursus feugiat et fermentum sapien. Eu quis ac vulputate mattis dui malesuada in velit aenean. Id urna nisl hac consequat eu, netus ac tempor iaculis. Cursus tincidunt fringilla consequat ac vitae, quam tincidunt. Mi risus vitae pellentesque id vitae et, nunc, enim elementum."