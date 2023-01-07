import React,{useState, useEffect} from 'react';
import {Table} from 'antd';
import useAxiosPrivate from '../../hook/useAxiosPrivate';


const TableList = () => {
    const axiosPrivate = useAxiosPrivate();
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const CountList  = async () => {
            setLoading(true)
            try {
                const response = await axiosPrivate.get("/school/list")
                setDataSource(response.data.list)
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
          title: 'Мэйл хаяг',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title: 'Утас',
            dataIndex: 'phone',
            key: 'phone',
          },
        {
            title: 'Сургууль',
            dataIndex: 'branch_name',
            key: 'branch_name',
          },
          {
            title: 'Тэнхим',
            dataIndex: 'dp_name',
            key: 'dp_name',
          },
          {
            title: 'Мэргэжил',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Боловсрол',
            dataIndex: 'zeregName',
            key: 'zeregName',
          },
          {
            title: 'Элсэн орсон огноо',
            dataIndex: 'school_startDate',
            key: 'zeregName',
          },
          {
            title: 'Төгсөн огноо',
            dataIndex: 'school_startEnd',
            key: 'zeregName',
          },
      ];
  return(
    <>
  <Table loading={loading} dataSource={dataSource} columns={columns} />
    </>
  )  

}

export default TableList;
 