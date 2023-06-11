
import Header from '../../Header/Header';
import Category from './Category/Category';
import PopularClass from './PopularClass/PopularClass';
import PopularInst from './PopularClass/PopularInst';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Category></Category>
            <PopularClass></PopularClass>
            <PopularInst></PopularInst>
        </div>
    );
};

export default Home;