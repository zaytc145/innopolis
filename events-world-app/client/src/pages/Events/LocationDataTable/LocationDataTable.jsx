import LOCATION_DATA_TABLE_COLUMNS from "./LocationDataTableColumns";
import {useState} from "react";
import {Table} from "antd";

const LocationDataTable = (props) => {
    const [data, setData] = useState([]);
    return <Table columns={LOCATION_DATA_TABLE_COLUMNS} dataSource={data} />
}

export default LocationDataTable