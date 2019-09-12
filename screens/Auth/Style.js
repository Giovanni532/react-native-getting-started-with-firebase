import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    login:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        height: 40,
        width: 300,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 25,
        margin: 6,
        paddingLeft: 5
    },
    divButton: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 25,
        padding:10,
        margin: 5
    },
    text: {
        textAlign: "center",
        padding:20
    }
})

