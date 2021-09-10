import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Button from '../components/Button';
import firebase from 'firebase';
import { translateErrors } from '../utils';

export default function SignUpScreen(props) {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handlePress() {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( (userCredential) => {
                const { user } = userCredential;
                console.log(user.uid);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'MemoList'}],
                });
            })
            .catch((error) => {
                console.log(error.code,error.message);
                const errorMsg = translateErrors(error.code);
                Alert.alert(errorMsg.title,errorMsg.description);
            });

    }

    return (
        <View style = {styles.container}>

            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => { setEmail(text); }}
                    autoCapitalize="none"
                    keybordType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                />
                <TextInput
                    value={password}
                    style={styles.input}
                    onChangeText={(text) => { setPassword(text); }}
                    autoCapitalize="none"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"

                />
            </View>

            <Button
                label="Submit"
                onPress={ handlePress }
            />
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already registered?</Text>
                <TouchableOpacity
                    onPress= { () => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'LogIn'}],
                        });
                    }}
                >
                    <Text style={styles.footerLink}>Log In.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f0f4f8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },

    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#e57782',
    },
    footer: {
        flexDirection: 'row',
    },

});
