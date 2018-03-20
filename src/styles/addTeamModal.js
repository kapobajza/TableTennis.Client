import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    newTeamContainer: {
        justifyContent: 'center',
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#00acac'
    },
    newTeamButton: {
        margin: 10
    },
    newTeamText: {
        margin: 10,
        textAlign: 'center'
    },
    buttonContainer: { 
        flexDirection: 'row', 
        justifyContent: 'center' 
    },
    bgView: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: null,
        height: null,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: 'white',
        margin: 50,
        padding: 30
    }
});

export default styles;