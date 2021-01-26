<template>
	<AModal
		:visible="visible"
		:closable="false"
		:footer="null"
		:bodyStyle="{ padding: 0 }"
		wrapClassName="modal-container"
	>
		<div class="modal-header">
			<div class="image" />
			<h1>ADD USER</h1>
		</div>

		<div style="padding: 20px">
			<slot />
		</div>
	</AModal>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
	components: {},
})
export default class User extends Vue {
	@Prop(Boolean) readonly visible!: boolean;
}
</script>
<style lang="sass">
.modal-header

    height: 220px
    width: 100%
    display: flex
    position: relative

    .image
        background-image: url('../assets/10089.jpg')
        filter: brightness(0.5)
        background-size: cover
        background-position: center
        background-repeat: no-repeat
        height: 220px
        width: 100%
    h1
        margin: auto
        text-align: center
        font-weight: 900
        color: #fff
        background: #00000047
        border: 2px solid #fff
        padding: 2px 20px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

.modal-container .ant-modal-content
    overflow: hidden
</style>