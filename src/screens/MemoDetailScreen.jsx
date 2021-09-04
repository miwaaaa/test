import React from 'react';
import { View, ScrollView, Text, StyleSheet,} from 'react-native';
import CircleButton from '../components/CircleButton';
import AppBar from '../components/AppBar';


export default function MemoDetailScreen() {
    return (
        <View style = {styles.container}>
            <AppBar />
            <View style = {styles.memoheader}>
                <Text style = {styles.memoTitle}>買い物リスト</Text>
                <Text style = {styles.memoDate}>2021年09月04日 17:26</Text>
            </View>
            <ScrollView style = {styles.memoBody}>
                <Text style = {styles.memoText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                </Text>
            </ScrollView>
            <CircleButton style= {{top: 160, bottom: 'auto'}} name = "edit-2"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    memoheader: {
        backgroundColor: '#ffc4ca',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        fontHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
    },
});