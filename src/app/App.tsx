import React from 'react';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { Pagination, Divider, List, Typography, ConfigProvider, } from 'antd';
import Page from './components/page/Page';
import './styles/index.scss';


const onChange = ()=> {
    console.log('change')
}


const data = [
    // <Checkbox key={1}>answ 1</Checkbox>,
    <div key={1}></div>,
    <Checkbox key={2}>answ 2</Checkbox>,
    <Checkbox key={3}>answ 3</Checkbox>,
    <Checkbox key={4}>answ 4</Checkbox>
]


export function App() {
    return (

        <ConfigProvider
            theme={{
                components: {
                    Pagination: {
                        paddingContentHorizontal: 30
                    }
                },
            }}
        >
            <div className='app'>
                <div className='header'>Тест</div>
                <Page/>
                <Pagination onChange={onChange} defaultCurrent={1} total={30}/>
            </div>
        </ConfigProvider>
   
    );
}