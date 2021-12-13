import React from 'react';
import { View } from 'react-native';
import { shows } from './Shows';
import ImageButton from './ImageButton';

const EventList = ({navigation}) => { 
    return (
        <View>
            {
                shows.map((show_id, i) => {
                return (
                    <ImageButton
                        show_img={shows[i].show_img}
                        show_id={shows[i].show_id}
                        title={shows[i].show_name}
                        customClick={() => navigation.navigate('LandingScreen')} />                     
                );
            })
            }
        </View>
    )
}
export default EventList;