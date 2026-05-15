import { useState } from "react"
import 'animate.css'
import { Button, Checkbox, Drawer, Form, Input, InputNumber, Select, Space } from "antd";
import { ArrowRightOutlined, EyeOutlined } from "@ant-design/icons";

function App() {
  const [signupForm] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const options = [
    {
      label: 'Happy',
      value: 'happy',
      emoji: '😄',
      desc: 'Feeling Good',
    },
    {
      label: 'Sad',
      value: 'sad',
      emoji: '😢',
      desc: 'Feeling Blue',
    },
    {
      label: 'Angry',
      value: 'angry',
      emoji: '😡',
      desc: 'Furious',
    },
    {
      label: 'Cool',
      value: 'cool',
      emoji: '😎',
      desc: 'Chilling',
    },
    {
      label: 'Sleepy',
      value: 'sleepy',
      emoji: '😴',
      desc: 'Need Sleep',
    },
  ];

  const signup = (values: any) => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
      signupForm.resetFields();
    }, 5000);
  }

  return (
    <div className="p-16">
      <Button type="primary" size="large" onClick={() => setOpen(true)}>Register</Button>
      <Drawer 
        open={open}
        onClose={() => setOpen(false)}
        title="Sign Up"
        size={600}
      >
        <Form layout="vertical" onFinish={signup} form={signupForm} initialValues={{
          email: "test@gmail.com",
          accept: false
        }}>
          <div className="grid grid-cols-2 gap-6">
            <Form.Item
              name="email"
              label="Email"
              rules={[{
                required: true,
                type: "email"
              }]}
              >
              <Input
                size="large"
                placeholder="Enter your age here"
                />
            </Form.Item>
            <Form.Item
              name="age"
              label="Age"
              >
              <InputNumber
                size="large"
                placeholder="Enter your age here"
                />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Form.Item
                name="password"
                label="Password"
                rules={[{
                  required: true,
                  min: 8,
                }]}
              >
                <Input 
                  type={isPasswordVisible ? "string" : "password"}
                  placeholder="********"
                  size="large"
                  suffix={

                    <EyeOutlined onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                  }
                />
            </Form.Item>

            <Form.Item
              label="Mood"
            >
              <Select size="large" placeholder="Please select your current mood."
              options={options} optionRender={(option) => (
                <Space>
                  <span role="img" aria-label=    {option.data.label}>
                    {option.data.emoji}
                  </span>
        {`${option.data.label} (${option.data.desc})`}
                </Space>
              )}>
              </Select>
            </Form.Item>
          </div>
          <Form.Item 
            name="accept"
            valuePropName="checked"  
          >
            <Checkbox>I accept</Checkbox>
          </Form.Item>
          <div className="grid grid-cols-2 gap-6">
            <Form.Item>
              <Button loading={loading} htmlType="submit" icon={<ArrowRightOutlined/>}>Submit</Button>
            </Form.Item>
          </div>
        </Form>
      </Drawer>
    </div>
  )
}

export default App
