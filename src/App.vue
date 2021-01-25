<template>
	<div id="app">
		<a-layout id="components-layout-demo-side" style="min-height: 100vh">
			<a-layout-sider v-model="collapsed" collapsible>
				<div class="logo" />
				<a-menu
					theme="dark"
					mode="inline"
					:default-selected-keys="['1']"
				>
					<a-menu-item key="1">
						<router-link to="/">
							<a-icon type="user" />Home
						</router-link>
					</a-menu-item>
					<a-menu-item key="2">
						<router-link to="/about">
							<a-icon type="video-camera" />About
						</router-link>
					</a-menu-item>
				</a-menu>
			</a-layout-sider>
			<a-layout>
				<a-layout-content style="margin: 0 16px">
					<router-view />
				</a-layout-content>
			</a-layout>
		</a-layout>
	</div>
</template>

<script>
export default {
	data() {
		return {
			collapsed: false,
		};
	},
};
</script>
