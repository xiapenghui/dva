import { Card, Tabs } from 'antd';

 

const SalesCard = ({
    selectDate,
}) => (

    <Card
    >
        <div >
            <a onClick={() => selectDate('today')}>
                今日
            </a>
            <a onClick={() => selectDate('week')}>
                本周
            </a>
            <a onClick={() => selectDate('month')}>
                本月
            </a>
            <a onClick={() => selectDate('year')}>
                本年
            </a>
        </div>


    </Card>
);

export default SalesCard;
