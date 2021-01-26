<template>
	<Modal title="Title" :visible="visible">
		<AForm class="userform" @submit="validate">
			<AFormItem label="Name">
				<AInput placeholder="Name" v-model="user.name" />
			</AFormItem>
			<AFormItem :wrapper-col="{ offset: j }">
				<AButton type="primary" @click="validate()">
					{{ user.id ? "Update" : "Create" }}
				</AButton>
				<AButton style="margin-left: 10px" @click="toggle(false)">
					Cancel
				</AButton>
			</AFormItem>
		</AForm>
	</Modal>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { UserI, emptyUser } from "@/types/User";
import userapi from "@/local/users";
import { PropType } from "vue";
import Modal from "@/components/Modal.vue";

@Component({
	components: { Modal },
})
export default class User extends Vue {
	@Prop(Boolean) readonly visible!: boolean;
	@Prop(Function) readonly toggle!: (a: boolean) => any;
	@Prop(Function) readonly saveUser!: (_user: UserI) => any;
	@Prop(Object) readonly user!: UserI;

	confirmLoading = false;

	validate(e: Event) {
		if (e) e.preventDefault();
		this.saveUser(this.user);
	}
}
</script>
