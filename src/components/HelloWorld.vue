<template>
  <div class="hello">
    <p>{{ type }}</p>
    <!-- 数组去重 -->
    <p>选择：{{ selectVal }}</p>
    <Dropdown @on-click.native="select()">
      <a href="javascript:void(0)">
          下拉菜单
          <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
          <DropdownItem name="1">驴打滚</DropdownItem>
          <DropdownItem name="2">炸酱面</DropdownItem>
          <DropdownItem name="3">豆汁儿</DropdownItem>
          <DropdownItem name="4">冰糖葫芦</DropdownItem>
          <DropdownItem name="5">北京烤鸭</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    type: String
  },
  data() {
    return {
      list: [1, 3, 5, 2, 4, 6, 567, 123, 45, 24],
      objList: [
        {
          name: 'a',
          code: 123
        },
        {
          name: 'b',
          code: 23
        },
        {
          name: 'c',
          code: 3
        },
        {
          name: 'd',
          code: 43
        }
      ],
      obj: {
        a: '23',
        b: '34',
        c: '45',
        d: '56',
        e: '67'
      },
      selectVal: ''
    }
  },
  created() {
    // const a = this.quickSort(this.list)
    // console.log(a)
    this.traverseObj()
    console.log(this.type, '----type')
  },
  methods: {
    select(name) {
      this.selectVal = name
    },
    quickSort(arr) {
      const centerIndex = Math.floor(arr.length / 2) // 获取中间项索引
      const centerValue = arr[centerIndex] // 获取中间项值
      const left = []
      const right = []
      arr.forEach(item => {
        if (item < centerValue) {
          left.push(item)
        } else if (item > centerValue) {
          right.push(item)
        }
      })
      return left.concat(centerValue, right)
      // return this.quickSort(left).concat([centerValue], this.quickSort(right))
    },
    traverseObj() {
      // const obj = Object.getOwnPropertyNames(this.obj)
      // for (let item in this.obj) {
      //   console.log(item)
      // }
      // console.log(obj)
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
