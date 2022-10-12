// assets
import { SettingOutlined, TeamOutlined, ReconciliationOutlined } from '@ant-design/icons';

// icons
const icons = {
    SettingOutlined,
    TeamOutlined,
    ReconciliationOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const setting = {
    id: 'setting',
    title: '설정',
    type: 'group',
    children: [
        {
            id: 'environment-setting',
            title: '환경설정',
            type: 'item',
            url: '/sample-page',
            icon: icons.SettingOutlined,
            breadcrumbs: false
        },
        {
            id: 'user-setting',
            title: '사용자설정',
            type: 'item',
            url: '/sample-page',
            icon: icons.TeamOutlined,
        },
        {
            id: 'operation-setting',
            title: '운영설정',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.ReconciliationOutlined
        },
    ]
};

export default setting;
