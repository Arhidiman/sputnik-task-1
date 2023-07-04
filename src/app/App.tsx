import Checkbox from 'antd/es/checkbox/Checkbox';
import { Pagination } from 'antd';
import Page from './components/page/Page';
import './styles/index.scss';


const onChange = ()=> {
    console.log('change')
}



export function App() {
    return (
        <div className='app'>
            <div className='header'>Тест</div>
            <Page/>
            <Pagination onChange={onChange} defaultCurrent={1} total={50}/>
        </div>
    );
}