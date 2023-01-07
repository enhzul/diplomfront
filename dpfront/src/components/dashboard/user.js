import React,{useState, useEffect} from 'react';
import { Table } from 'antd';
import useAxiosPrivate from '../../hook/useAxiosPrivate';


const Users = () => {
    const axiosPrivate = useAxiosPrivate();
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const CountList  = async () => {
            setLoading(true)
            try {
                const response = await axiosPrivate.get("/users")
                setDataSource(response.data.users)
                setLoading(false)
            }
            catch(err) {
                console.error(err);
            }
        }
        CountList();
   },[])
   const Lists = dataSource
      
      const columns = [
        {
          title: 'Овог',
          dataIndex: 'first_name',
          key: 'first_name',
        },
        {
          title: 'Нэр',
          dataIndex: 'last_name',
          key: 'ner',
        },
        {
          title: 'Нэвтрэх нэр',
          dataIndex: 'username',
          key: 'username',
        },
        {
            title: 'Мэйл хаяг',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Огноо',
            dataIndex: 'created_at',
            key: 'created_at',
          },

      ];
  return(
    <>
  <Table loading={loading} dataSource={dataSource} columns={columns} />
    </>
  )  

}

export default Users;
 