import React, { PureComponent, Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import {H3} from 'native-base'
import RNCamera from 'react-native-camera'
import CustomRating from './CustomRating'

export default class RecipeCard extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.avatarContainer}>
                        <Image style={styles.avatar} source={require('../assets/image1.jpg')}/>


                    

                    </View>

                    <View style={styles.informationContainer}>
                        <View style={styles.description}>
                            <H3 style={{fontFamily: 'IowanOldStyle-Bold'}}>Trout</H3>



                        </View>

                        <View style={styles.rating}>
                            <Text>Rating</Text>
                            <Text>100</Text>



                        </View>

                        <View style={styles.recipeInfo} >
                            <Text ellipsizeMode='tail'
                            numberOfLines={5}>
                                Cajun catfish served up with just 
                                the right touch of spices and flavor. 
                                This entree is perfect for a quick, 
                                excellent way to taste the unique flavor 
                                of catfish mixed with the traditional 
                                method of down south cooking, just without 
                                all the fat. Serve on top of white rice.</Text>



                        </View>







                    </View>








                </View>
            </View>


        );



    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        alignItems: "center",
        justifyContent: "flex-start"



    },


    main: {
        display: 'flex',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#000000',
        width: 400,
        height: 200,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 25

        

    },

    avatarContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        




    },

    avatar: {
        borderRadius: 35,
        width: '80%',
        height: '40%',
        marginTop: 6




    },

    informationContainer: {
        flex: 3,
        flexDirection: "column",
        marginTop: 4,
        marginLeft: 4,





    },

    description: {
        flex: 1,
        justifyContent: "center",
       


    },

    recipeInfo: {
        flex: 4,
        justifyContent: "center",
        marginRight: 4



    },

    rating: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flex: 1,
        marginLeft: 2
        




    }



});




