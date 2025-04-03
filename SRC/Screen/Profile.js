import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

const Profile = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        setShowPicker(false);
        if (selectedDate) {
            const day = selectedDate.getDate().toString().padStart(2, '0');
            const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
            const year = selectedDate.getFullYear();
            setDob(`${day}/${month}/${year}`);
        }
    };

    const formatDOB = (text) => {
        // Remove non-numeric characters
        let cleaned = text.replace(/\D/g, '');

        // Format as DD/MM/YYYY
        let formatted = '';
        if (cleaned.length >= 2) {
            formatted += cleaned.substring(0, 2) + '/';
        } else {
            formatted += cleaned;
        }
        if (cleaned.length >= 4) {
            formatted += cleaned.substring(2, 4) + '/';
        } else if (cleaned.length > 2) {
            formatted += cleaned.substring(2);
        }
        if (cleaned.length >= 8) {
            formatted += cleaned.substring(4, 8);
        } else if (cleaned.length > 4) {
            formatted += cleaned.substring(4);
        }

        setDob(formatted);
    };

    const handleNext = () => {
        navigation.navigate('Delivery');
    };

    return (
        <View style={{ flex: 1, padding: 20, marginBottom: 100, justifyContent: 'center', backgroundColor: '#f8f8f8' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>Complete Your Profile</Text>
            <Text style={{ textAlign: 'center', marginBottom: 23 }}>Fill in the details below so we can tailor our service just for you!</Text>

            <TextInput
                label="First Name"
                mode="outlined"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
                theme={{ colors: { primary: 'black', outline: 'black' } }} 
            />
            <TextInput
                label="Last Name"
                mode="outlined"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
                theme={{ colors: { primary: 'black', outline: 'black' } }} 
            />
            <TextInput
                label="Email"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                theme={{ colors: { primary: 'black', outline: 'black' } }} 
                right={<TextInput.Icon name="email" />}
            />

            {/* DOB Field with Auto Slash Formatting */}
            <TextInput
                label="DOB"
                mode="outlined"
                value={dob}
                onChangeText={formatDOB}
                keyboardType="numeric"
                placeholder="DD/MM/YYYY"
                style={styles.input}
                theme={{ colors: { primary: 'black', outline: 'black' } }}
                right={
                    <TextInput.Icon 
                        name="calendar" 
                        onPress={() => setShowPicker(true)} 
                        color="black" // Ensures visibility
                    />
                }
            />

            {showPicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                />
            )}

            <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={{ color: '#064e3b', fontWeight: 'bold', fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    input: {
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#9dd694',
        borderColor: '#064e3b',
        borderRadius: 10,
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    }
};

export default Profile;
