<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- 切换按钮 -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 折叠内容 -->
      <div
        class="offcanvas-nav"
        :class="{ show: navOpen }"
        id="navbarNav"
        @click.stop
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">页面2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">页面3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">页面4</a>
          </li>
        </ul>
      </div>
      <!-- 品牌标志 -->
      <div class="navbar-brand-container">
        <a class="navbar-brand" href="#">夏福鑫</a>
      </div>

      <RouterLink to="/user/">
        <el-avatar class="avatar" :size="60" src="https://empty" @error="UserFilled">
        <img
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </el-avatar>
    </RouterLink>
    </div>

    <!-- 背景遮罩，用于点击关闭导航栏 -->
    <div class="overlay" :class="{ active: navOpen }" @click="toggleNav"></div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const navOpen = ref(false);

function toggleNav() {
  navOpen.value = !navOpen.value;
}
</script>

<style scoped>
.container-fluid{
  display: flex;
  align-items: center;
  justify-content: space-between; /* 使元素在容器内均匀分布 */
}
.navbar-toggler {
  
  left: 10px;
  top: 10px;
}

.navbar-brand-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
.avatar {
  justify-content: center;
}

/* 默认的 offcanvas-nav 样式，仅在移动设备上有效 */
.offcanvas-nav {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #f8f9fa;
  transition: left 0.3s ease;
  z-index: 1045;
}

.offcanvas-nav.show {
  left: 0;
}

/* 覆盖移动设备上 offcanvas-nav 的样式，在桌面设备上正常显示 */
@media (min-width: 992px) {
  .offcanvas-nav {
    position: static;
    width: auto;
    height: auto;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    margin-left: 0;
  }

  .navbar-nav {
    margin-left: 100px;
    display: flex;
    flex-direction: row;
  }

  .overlay {
    display: none;
  }
  .navbar-nav .nav-link.active {
    font-weight: bold;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
  display: none;
}

.overlay.active {
  display: block;
}

.navbar-nav {
  margin-top: 0px;
}

.navbar-nav .nav-item {
  margin: 1rem 0;
  text-align: center;
}

.navbar-nav .nav-link {
  color: #333;
}

.navbar-nav .nav-link.active {
  font-weight: bold;
}
</style>
