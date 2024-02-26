import {Alert, Button, Card, Col, Form, Input, InputNumber, Row} from "antd";
import {useCallback, useState} from "react";
import baseApi from "../../http/appApi";
import LocationDataChart from "./LocationDataChart";
import LocationDataTable from "./LocationDataTable/LocationDataTable";

const Events = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataByLocation, setDataByLocation] = useState([]);
    const [error, setError] = useState(null);

    const onSubmit = useCallback(async (formData) => {
        setError(null);
        setIsLoading(true);
        try {
            const response = await baseApi.post('/events', formData);

        } catch (e) {
            setError(e.response.data);
        } finally {
            setIsLoading(false);
        }
    }, [])

    return <Row gutter={[24, 24]}>
        <Col span={12}>
            <Card>
                {error && <Alert message={error} type="error" showIcon style={{marginBottom: 10}}/>}
                <Form
                    onFinish={onSubmit}
                    validateTrigger="onBlur"
                    layout="inline"
                    initialValues={{
                        "city": "Shanghai"
                    }}
                >

                    <Form.Item
                        label="city"
                        name="city"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{flex: 1}}
                    >
                        <Input style={{width: '100%'}}/>
                    </Form.Item>
                    <Form.Item wrapperCol={{span: 14, offset: 4}}>
                        <Button type="primary" htmlType="submit" loading={isLoading}>Find</Button>
                    </Form.Item>
                </Form>
            </Card>
        </Col>
        <Col span={24}>
            <Card>
                <LocationDataTable/>
            </Card>
        </Col>
        <Col span={24}>
            <Card>
                <LocationDataChart/>
            </Card>
        </Col>
    </Row>
}

export default Events;