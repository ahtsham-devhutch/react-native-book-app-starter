import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import getBooks from 'services/getBooks';
import BookCard from '../../components/BookCard/BookCard';
import { useStyles } from './styles';
import { Props } from './types';

const Container: React.FC<Props> = (props) => {
    const dummyImages = [
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sad-romance-kindle-book-cover-flyer-template-539b5fdf2dd2f6602c25ce81fbb5d877.jpg?ts=1589326539',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4yGwkz128dpVHBztwERbm6Z6kIXwQ03V0A&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB-3-cJ6tpQ6cFUjCach0R1dTiXdhXI0AtA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaVjRvjIZAO6XIsd0eHS22Q949ke7r-KZFg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIVlYNBoYdfq1FGWs_dx_k8Irvjmdu64p7A&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwor6J4qPx1WWN27GYiZEFP-NAoWSstn-YrQ&usqp=CAU',
    ];

    const generateRandomURL = () => {
        const number = Math.random() * 6;
        const index = Math.floor(number);
        return dummyImages[index];
    };
    //theme handling
    const styles = useStyles();
    const { books } = props;
    const author = 'Dummy author';
    const genre = 'Dummy Genre';
    const pages = books.numberOfPages ?? '111';
    const launched = books.createdAt ?? '11-11-11';
    const title = books.title ?? 'Dummy Title';
    const { t } = useTranslation();
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text

    const toggleNumberOfLines = () => {
        //To toggle the show text or hide it
        setTextShown(!textShown);
    };
    return (
        <View style={styles.main}>
            <ScrollView>
                <BookCard
                    id={books?.id ?? 1}
                    styleSelect="ExtraLarge"
                    bookTitle={title}
                    authorName={author}
                    hideIcon={true}
                    url={generateRandomURL()}
                />

                <View style={styles.horizontalRuler} />

                <View style={styles.mainView}>
                    <View style={styles.subView}>
                        <Text style={styles.genreText}>{t('Genre')}</Text>
                        <Text style={styles.dynamicGenreText}>{genre}</Text>
                    </View>

                    <View style={styles.launchedSubView}>
                        <Text style={styles.launchedText}> {t('Launched')}</Text>
                        <Text style={styles.dynamicLaunchedText}>{launched.substring(0, 9)}</Text>
                    </View>

                    <View style={styles.pagesSubView}>
                        <Text style={styles.sizeText}>{t('Size')}</Text>
                        <Text style={styles.dynamicSize}>
                            {pages}
                            {t(' pages')}
                        </Text>
                    </View>
                </View>

                <View style={styles.synopseView}>
                    <Text style={styles.synopseText}>{t('Synopse')}</Text>
                    <Text
                        style={styles.dynamicSynopse}
                        onPress={toggleNumberOfLines}
                        numberOfLines={textShown ? undefined : 2}>
                        {books.shortSummary}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Container;
