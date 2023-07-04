import Checkbox from 'antd/es/checkbox/Checkbox';
import { Card, Space, Radio } from 'antd';



const Page = ()=> {
    return(
        <Space direction='vertical'>
            <Card title={'Question x'}>
                <Radio.Group value={1}>
                    <Space direction='vertical'>
                        <Radio value={1}>answ 1</Radio>
                        <Radio value={2}>answ 2</Radio>
                        <Radio value={3}>answ 3</Radio>
                        <Radio value={4}>answ 4</Radio>
                    </Space>
                </Radio.Group>
            </Card>
            <Card title={'Question x'}>
                <Radio.Group value={1}>
                    <Space direction='vertical'>
                        <Radio value={1}>answ 1</Radio>
                        <Radio value={2}>answ 2</Radio>
                        <Radio value={3}>answ 3</Radio>
                        <Radio value={4}>answ 4</Radio>
                    </Space>
                </Radio.Group>
            </Card>
            <Card title={'Question x'}>
                <Radio.Group value={1}>
                    <Space direction='vertical'>
                        <Radio value={1}>answ 1</Radio>
                        <Radio value={2}>answ 2</Radio>
                        <Radio value={3}>answ 3</Radio>
                        <Radio value={4}>answ 4</Radio>
                    </Space>
                </Radio.Group>
            </Card>
        </Space>
    )
}

export default Page