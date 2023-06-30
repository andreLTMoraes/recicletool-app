import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { COLORS } from '../../utils/AppStyles'
import appStyles from '../../utils/AppStyles';

export default function About() {
  return (
    <ScrollView style={{ paddingTop: 0 }} contentContainerStyle={{ flexGrow: 1 }} stickyHeaderIndices={[0]} overScrollMode="never" bounces={false}>
        <View style={styles.titleContainer}>
          <Text style={[appStyles.text, { color: COLORS.offWhite, fontWeight: '700' }]}>SOBRE O PROJETO</Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center', marginVertical: 50 }}>
          <Image source={require('../../assets/heineken_logo.png')} resizeMode='contain' style={{ height: 50 }} />
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={[appStyles.text, { textAlign: 'justify' }]}>{loremIpsum}</Text>
        </View>
        <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: COLORS.primaryDark,
    width: '100%',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 60,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  }
});

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed adipiscing eu ultrices egestas. Gravida sed nulla tellus vitae at morbi id non vel. Eu a magnis lacus dictumst ipsum ac. Fermentum ac risus tempus tempor dignissim morbi sed ultricies at. Vitae faucibus id pellentesque ut feugiat sagittis pharetra porta. Urna in montes, sem enim. Sed sed nunc fringilla porta in nunc maecenas. Non, ridiculus donec urna feugiat at consectetur. Enim dui at imperdiet enim. Adipiscing sit donec neque, eget in. Commodo quis odio sociis erat pellentesque. Risus et sit amet arcu ultricies cras urna pretium. Rhoncus commodo consectetur rhoncus feugiat cursus integer enim dictum. Adipiscing consequat elementum nibh eu libero. Cras mauris feugiat et, blandit morbi malesuada. Nec arcu ac sed amet, elementum. Magna pellentesque amet at massa elit eu. Diam interdum at eu sapien aliquam enim. Nunc nunc facilisis proin justo, vel ultricies massa aliquam. Cursus tempor, vulputate tristique facilisis auctor. Ultrices odio nunc tincidunt sodales aliquam integer eget. Sed viverra cras magna arcu molestie. Amet tincidunt a amet eget volutpat nec ultrices. Et ultrices luctus mattis suspendisse eget adipiscing tellus, diam at. Purus, ullamcorper sodales mattis tellus facilisis diam orci. Convallis auctor sagittis cras eget leo, ornare ultricies tellus suspendisse. Dui diam vitae sed nullam accumsan pharetra eleifend. Nisl, semper quisque magna ut platea. Mi eget urna, facilisis enim augue diam semper. Et massa turpis eros, faucibus odio in pellentesque. In sit sagittis egestas diam sed rhoncus nisi commodo. Cursus feugiat et fermentum sapien. Eu quis ac vulputate mattis dui malesuada in velit aenean. Id urna nisl hac consequat eu, netus ac tempor iaculis. Cursus tincidunt fringilla consequat ac vitae, quam tincidunt. Mi risus vitae pellentesque id vitae et, nunc, enim elementum."