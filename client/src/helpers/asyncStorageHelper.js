import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (tokenFromDb) => {
    try {
        console.log('tokenhelper=', tokenFromDb)
        await AsyncStorage.setItem('Authorization', tokenFromDb)
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const getData = async () => {
    try {
        const token = await AsyncStorage.getItem('Authorization')
        console.log('token get data:', token)
        if (token !== null) {
            return token;
        }
    } catch (error) {
        console.log(error)
        return ''
    }
}

export const removeToken = async () => {
    console.log('disni')
    try {
        await AsyncStorage.removeItem('Authorization')

    } catch (error) {
        console.log(error);
    }
    console.log('remove succes');

}