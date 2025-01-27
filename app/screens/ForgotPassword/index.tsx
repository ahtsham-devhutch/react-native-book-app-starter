import images from 'config/images';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Dimensions, Image, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { useStyles } from 'screens/ForgotPassword/styles';
import forgotPassword from 'services/forgotPassword';
import * as snackbarActions from 'store/actions/snackbarActions';
import { useTheme } from 'react-native-paper';
const ForgotPassword: React.FC = () => {
    //defining states
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const theme = useTheme();
    const styles = useStyles();
    const { t } = useTranslation();

    //fetching data from store
    const [isLoading, setIsLoading] = useState<boolean>();

    const window = Dimensions.get('window');
    const screen = Dimensions.get('screen');
    const [dimensions, setDimensions] = useState({ window, screen });
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
            setDimensions({ window, screen });
        });
        return () => subscription?.remove();
    });

    const sendResetLink = () => {
        if (email === '') {
            Toast.show('Enter email address');
        } else {
            // dispatch(loginActions.IForgotPasswordRequest(email));
            try {
                setIsLoading(true);
                forgotPassword(email).then((response) => {
                    dispatch(snackbarActions.enableSnackbar(response.message));
                    setIsLoading(false);
                });
                setTimeout(() => {
                    dispatch(snackbarActions.disableSnackbar());
                }, 4000);
            } catch {
                dispatch(snackbarActions.enableSnackbar('Operation failed, please try again'));
            }
        }
    };

    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#00416A', '#E4E5E6']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.1, y: 3.0 }}
                locations={[0, 0.5, 0.6]}
                style={{
                    height: dimensions.window.height * 0.15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: dimensions.window.width,
                }}
            />
            <View
                style={{
                    backgroundColor: 'white',
                    width: dimensions.window.width * 0.9,
                    zIndex: 5,
                    borderRadius: 20,
                    marginTop: -30,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}>
                <Image
                    source={images.app.logo}
                    style={{ alignSelf: 'center', position: 'relative' }}
                />
                <Text style={styles.headingText}>{t('Forgot Password')}</Text>
                <View
                    style={{
                        marginBottom: 10,
                        borderColor: theme.colors.text,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: dimensions.window.width * 0.8,
                        height: 50,
                    }}>
                    <TextInput
                        style={{ width: dimensions.window.width * 0.5, height: 40 }}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        placeholder={t('Enter your email')}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.editView}>
                    <Button onPress={sendResetLink} style={styles.button}>
                        <Text style={{ color: 'white' }}>{t('Submit')}</Text>
                    </Button>

                    {isLoading && <ActivityIndicator style={styles.activityIndicator} />}
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default ForgotPassword;
