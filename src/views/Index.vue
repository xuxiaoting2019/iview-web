<template>
  <div id="index">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu
          active-name="1-2"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
          @on-select="onSelect"
        >
          <MenuItem v-for="item in menuList" :key="item.name" :name="item.name" :to="item.path">
            <Icon :type="item.icon"></Icon>
            <span>{{ item.name }}</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Content
          :style="{margin: '20px', background: '#fff', height: `${height}px`, overflow: 'auto'}"
        >
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      menuList: [
        {
          name: "option1",
          icon: "ios-navigate",
          path: "option1"
        },
        {
          name: "option2",
          icon: "ios-search",
          path: "option2"
        },
        {
          name: "option3",
          icon: "ios-settings",
          path: "option3"
        }
      ],
      isCollapsed: false,
      height: 0
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    initHeight() {
      this.height = document.documentElement.clientHeight - 64 - 40;
    },
    onSelect(name) {
      console.log(name, "----name");
    }
  },
  mounted() {
    this.initHeight();
    window.addEventListener("resize", () => this.initHeight(), false);
  }
};
</script>

<style lang="stylus" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  text-align: left;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
