<template>
	<div id="app">
		<a-layout id="components-layout-demo-side" style="min-height: 100vh">
			<a-layout-sider v-model="collapsed" collapsible>
				<div class="logo">
					<img src="./assets/bonfire.svg" width="50px" />
					<h1 v-bind:class="{ hide: collapsed }">Gas Satation</h1>
				</div>
				<a-menu
					theme="dark"
					mode="inline"
					class="side-menu"
					:default-selected-keys="['1']"
				>
					<a-menu-item key="1">
						<router-link to="/">
							<AIcon type="home" /> <span>Home</span>
						</router-link>
					</a-menu-item>
					<a-menu-item key="2">
						<router-link to="/users">
							<AIcon type="user" /><span>Users</span>
						</router-link>
					</a-menu-item>
					<a-menu-item key="3">
						<router-link to="/about">
							<AIcon type="number" /><span>Bills</span>
						</router-link>
					</a-menu-item>
					<a-menu-item key="4">
						<router-link to="/user">
							<AIcon type="undo" /><span>Stocks</span>
						</router-link>
					</a-menu-item>
					<a-menu-item key="5">
						<router-link to="/user">
							<AIcon type="pie-chart" /><span>Prices</span>
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

<style lang="sass">
.side-menu svg
    font-size: 16px

.logo
    text-align: center
    h1
        color: white
        font-size: 25px
        font-weight: 900
        text-align: center
        white-space: nowrap
        opacity: 1
        transition: opacity .5s

h1.hide
    opacity: 0
</style>
