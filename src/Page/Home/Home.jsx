import Categories from '../../components/Categories/Categories';
import Rooms from './Rooms/Rooms';

const Home = () => {
    return (
        <div className=' py-20'>
            <Categories></Categories>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;