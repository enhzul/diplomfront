import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { SearchOutlined } from "@ant-design/icons";
const Users = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const axiosPrivate = useAxiosPrivate();
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const CountList = async () => {
      setLoading(true);
      try {
        const response = await axiosPrivate.get("/users");
        setDataSource(response.data.users);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    CountList();
  }, []);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Овог",
      dataIndex: "first_name",
      key: "first_name",
      ...getColumnSearchProps("first_name"),
    },
    {
      title: "Нэр",
      dataIndex: "last_name",
      key: "last_name",
      ...getColumnSearchProps("last_name"),
    },
    {
      title: "Нэвтрэх нэр",
      dataIndex: "username",
      key: "username",
      ...getColumnSearchProps("username"),
    },
    {
      title: "Мэйл хаяг",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Огноо",
      dataIndex: "created_at",
      key: "created_at",
    },
  ];
  return (
    <>
      <Table loading={loading} dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Users;
