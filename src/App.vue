<template>
  <div class="safe-top safe-left safe-right safe-bottom">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
</script>

<style lang="less">
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.page {
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
}
img.cover {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
}
h1 {
  font-size: 24px !important;
  color: #111827;
  margin-bottom: 12px !important;
}
h1.center {
  text-align: center;
  margin-bottom: 20px !important;
}
p {
  font-size: 18px;
  color: #64748b;
}
.btn {
  width: 100%;
  height: 48px;
  color: #ffffff;
  background: #3b82f6;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}
.input-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.input-label {
  margin-bottom: 4px;
  color: #111827;
  font-weight: bold;
  font-size: 18px;
}
.input-container {
  position: relative;
}
.input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64748b;
  background: transparent;
}
.input-text {
  height: 48px;
  width: 100%;
  padding-left: 48px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  color: #64748b;
  box-sizing: border-box;
  font-size: 18px;
}
.profile {
  display: flex;
  align-items: center;
  padding: 20px 16px;
}
img.profile-image {
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
}
.profile-name {
  font-size: 24px !important;
  color: #111827;
}
.menulist {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  margin: 0 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
.toggle-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid #e2e8f0;
  margin-left: 16px;
  padding-right: 16px;
  font-size: 18px;
  color: #111827;
}
.toggle-menu:last-child {
  border-bottom: 0;
}
</style>
