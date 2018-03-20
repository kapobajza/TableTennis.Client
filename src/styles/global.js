import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#38085c',
        backgroundColor: '#592f93'
    },
    menuItemText: { 
        padding: 13, 
        textAlign: 'center', 
        fontSize: 20,
        fontWeight: 'bold', 
        color: '#7e6aaf' 
    },
    menuItem: { 
        borderBottomWidth: 1,
        borderBottomColor: '#00acac' 
    },
    customText: {
        color: '#7e6aaf',
        fontSize: 16
    },
    textInput: {
        width: 300,
        textAlign: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center'
    }
});

export default styles;