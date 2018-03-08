import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 300,
        textAlign: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        margin: 10
    }
});

export default styles;