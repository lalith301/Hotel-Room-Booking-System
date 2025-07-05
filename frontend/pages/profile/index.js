import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from '../../components/layout';
import PrivateRoute from '../../components/routes/PrivateRoute';

// Dynamic imports to avoid build issues
const Tabs = dynamic(() => import('antd').then(mod => ({ default: mod.Tabs })), {
  ssr: false
});

const UserOutlined = dynamic(() => import('@ant-design/icons').then(mod => ({ default: mod.UserOutlined })), {
  ssr: false
});

const HistoryOutlined = dynamic(() => import('@ant-design/icons').then(mod => ({ default: mod.HistoryOutlined })), {
  ssr: false
});

const BookingHistory = dynamic(() => import('../../components/profile/BookingHistory'), {
  ssr: false
});

const MyProfile = dynamic(() => import('../../components/profile/MyProfile'), {
  ssr: false
});

function Profile() {
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.tab === 'my-profile') {
      setActiveTab(1);
    } else if (router?.query?.tab === 'booking-history') {
      setActiveTab(2);
    } else {
      setActiveTab(1);
    }
  }, [router]);

  const handleTabClick = (key) => {
    if (key === 1) {
      router.push({ pathname: '/profile', query: { tab: 'my-profile' } });
    } else if (key === 2) {
      router.push({ pathname: '/profile', query: { tab: 'booking-history' } });
    } else {
      router.push('/profile');
    }
  };

  return (
    <PrivateRoute>
      <MainLayout title='Beach Resort ― My Profile'>
        <div className='profile-container'>
          <Tabs
            tabPosition='left'
            activeKey={activeTab}
            onTabClick={handleTabClick}
            size='large'
            type='line'
            items={[
              {
                key: 1,
                label: (
                  <span>
                    <UserOutlined />
                    {' '}
                    My Profile
                  </span>
                ),
                children: <MyProfile />
              },
              {
                key: 2,
                label: (
                  <span>
                    <HistoryOutlined />
                    {' '}
                    Booking History
                  </span>
                ),
                children: <BookingHistory />
              }
            ]}
          />
        </div>
      </MainLayout>
    </PrivateRoute>
  );
}

export default Profile;
