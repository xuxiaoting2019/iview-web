<template>
  <div class="wrapper">
    <!-- 标签 -->
    <Tabs
      :value="currentTab"
      :animated="false"
    >
      <TabPane
        v-for="item in tabs"
        :key="item.label"
        :label="item.label"
        :name="item.name"
      >
        <component
          :is="item.componentId"
          :type="item.name"
        ></component>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      tabs: [
        {
          label: "标签一",
          name: "name1",
          componentId: "HelloWorld"
        },
        {
          label: "标签二",
          name: "name2",
          componentId: "HelloWorld"
        },
        {
          label: "标签三",
          name: "name3",
          componentId: "HelloWorld"
        }
      ],
      currentTab: "name1",
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
    };
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
  },
  mounted() {
    var obj = new Object();
    function Parent(a, b) {
      (this.a = a), (this.b = b);
    }
    var child = new Parent("123", "456");
    console.log(child, "----child");
    console.log(Parent.prototype, "----Parent");
    console.log(obj, "-----obj");
  }
};
</script>
<style lang="stylus" scoped></style>

