import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (tokenFromDb) => {
    try {
        await AsyncStorage.setItem('Authorization', tokenFromDb)
    } catch (e) {
        console.log(e);
        return null;
    }
};

export const getData = async () => {
    try {
        const token = await AsyncStorage.getItem('Authorization')
        if (token !== null) {
            return token;
        }
    } catch (error) {
        console.log(error)
        return null
    }
}