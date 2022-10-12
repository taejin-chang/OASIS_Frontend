// assets
import { CalendarOutlined, FormOutlined, BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
    CalendarOutlined,
    FormOutlined,
    BarChartOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const work = {
    id: 'work',
    title: '업무',
    type: 'group',
    children: [
        {
            id: 'calendar',
            title: '캘린더',
            type: 'item',
            url: '/sample-page',
            icon: icons.CalendarOutlined,
            breadcrumbs: false
        },
        {
            id: 'work-log',
            title: '업무일지',
            type: 'item',
            url: '/sample-page',
            icon: icons.FormOutlined,
        },
        {
            id: 'statistics',
            title: '통계',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.BarChartOutlined
        },
    ]
};

export default work;
