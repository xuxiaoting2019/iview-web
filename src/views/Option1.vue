<template>
  <div class="wrapper">
    <!-- 标签 -->
    <Tabs :value="currentTab" :animated="false">
        <TabPane v-for="item in tabs"
          :key="item.label"
          :label="item.label"
          :name="item.name">
          <component :is="item.componentId" :type="item.name"></component>
        </TabPane>
    </Tabs>
    <!-- 表单 -->
    <Form ref="formInline" :model="formItem" :label-width="80">
      <Row>
        <Col span="12">
          <FormItem label="Input">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="Select">
            <Select v-model="formItem.select">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="6" offset="9">
          <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <!-- 列表 -->
    <Table :columns="tableData.columns1" :data="tableData.data1"></Table>
  </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      tabs: [
        {
          label: '标签一',
          name: 'name1',
          componentId: 'HelloWorld'
        },
        {
          label: '标签二',
          name: 'name2',
          componentId: 'HelloWorld'
        },
        {
          label: '标签三',
          name: 'name3',
          componentId: 'HelloWorld'
        }
      ],
      currentTab: 'name1',
      formItem: {
        input: "",
        select: ""
      },
      tableData: {
        columns1: [
          {
            title: "Name",
            key: "name"
          },
          {
            title: "Age",
            key: "age"
          },
          {
            title: "Address",
            key: "address"
          }
        ],
        data1: [
          {
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park",
            date: "2016-10-03"
          },
          {
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park",
            date: "2016-10-01"
          },
          {
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park",
            date: "2016-10-02"
          },
          {
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park",
            date: "2016-10-04"
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>

