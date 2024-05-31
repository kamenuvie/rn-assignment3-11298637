import React from 'react';

import { View, Text, StyleSheet, ScrollView ,Image, TextInput, TouchableHighligh} from 'react-native';
const TouchableHighlight = ()=>{
  const [count ,setCount] = useState(0)
  const onPress = () =>setCount(count + 1)
  
};
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello , Devs</Text>
      <Text style={styles.alert}>15 tasks today</Text>
      <View style={styles.section}> 

      <TextInput style={styles.Input}
      placeholder=' Search here...'
      underlineColorAndroid="transparent"
      
      />  
      </View>

      <View style={styles.section}>
        
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Categories</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryItem1}>Exercise  :
          <Text style={styles.categoryItem}> Task 8
          <Image source ={require('./assets/favicon.png')}/>
          </Text>
            
          </Text>
          
          <Text style={styles.categoryItem2}>Study  :
          <Text style={styles.categoryItem}> Task 7</Text>
          </Text>
          <Text style={styles.categoryItem1}>Code  :
          <Text style={styles.categoryItem}> Task 6</Text>
          </Text>
          <Text style={styles.categoryItem2}>cook :
          <Text style={styles.categoryItem}> Task 5</Text>
          </Text>
          <Text style={styles.categoryItem1}>Hacking  :
          <Text style={styles.categoryItem}> Task 4</Text>
          </Text>
          <Text style={styles.categoryItem2}>Teaching  :
          <Text style={styles.categoryItem}> Task 3</Text>
          </Text>
          <Text style={styles.categoryItem1}>Playing  :
          <Text style={styles.categoryItem}> Task 2</Text>
          </Text>
          <Text style={styles.categoryItem2}>Dancing  :
          <Text style={styles.categoryItem}> Task 1</Text>
          </Text>
          <Text style={styles.heading}>Ongoing Tasks</Text>
        </View>
        <Text style={styles.categoryItem3}>Mobile App Development</Text>
        <Text style={styles.categoryItem3}>Web Development</Text>
        <Text style={styles.categoryItem3}>UX/UI Designing</Text>
        <Text style={styles.categoryItem3}>Programming Fundamentals</Text>
        <Text style={styles.categoryItem3}>Microsoft 365 Training</Text>
        <Text style={styles.categoryItem3}>Database Fundamentals</Text>
        <Text style={styles.categoryItem3}>Tutorials session</Text>
        <Text style={styles.categoryItem3}>ABC Conference</Text>
        <Text style={styles.categoryItem3}>Machine Learning</Text>
        <Text style={styles.categoryItem3}>Report Writing</Text>
        <Text style={styles.categoryItem3}>Manual Registration</Text>
        <Text style={styles.categoryItem3}>VoterID Registration</Text>
        <Text style={styles.categoryItem3}>Presentation</Text>
        <Text style={styles.categoryItem3}>CTF challenge</Text>
        <Text style={styles.categoryItem3}>Manifesto</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9D1CC',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingTop : 30,

  },
  section: {
    marginBottom: 20,
  },
  alert: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingBottom: 10,
  },
  heading: {
fontSize : 22,
paddingBottom: 20,
  },
  content: {
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryItem1: {
    backgroundColor: '#FFFBF6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
    marginRight: 10,
    marginBottom: 10,
    width: 162,
    height: 190,fontSize: 16,
    fontWeight : 'bold'
    
    
  },
categoryItem2: {
  backgroundColor: '#FFFBF6',
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 7,
  marginRight: 10,
  marginBottom: 20,
  width: 162,
  height: 190,fontSize : 16, 
  fontWeight: 'bold', 
},
categoryItem3: {
  backgroundColor: '#FFFBF6',
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 7,
  marginRight: 10,
  marginBottom: 20,
  width: 330,
  height: 120,
  fontSize: 20,
  textAlign: 'center',
  paddingTop: 25,
  fontWeight : 'bold'
},
subsection : {
  fontSize: 16,
},
Input: {
  width: 250,
  height: 40,
  borderColor: "black",
  backgroundColor: '#f2f2f2',
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 7,
  fontWeight: 'bold',
  fontcolor: 'black',
}
  
  
});

export default App;
