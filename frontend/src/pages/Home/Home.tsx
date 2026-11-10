import { useState , useEffect} from 'react';
import './Home.scss';
import { dataDto } from '@/types/data/data.type';
import { dataController } from '@/services/api/controllers/data-controller';

const Home = () => {

    const [data, setData] = useState<dataDto[]>();

    
    useEffect(()=>{
        dataController.getData()
        .then((res)=>{
            console.log(res)
        })
    }, [])

    return <div className="home-page">
        <div className="container">
            <h1>Главная страница</h1>
            <p>Здесь будет контент главной страницы</p>
        </div>
    </div>
};



export default Home;