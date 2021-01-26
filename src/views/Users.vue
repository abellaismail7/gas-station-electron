<template>
	<div class="home">
		<APageHeader
			title="Title"
			sub-title="This is a subtitle"
			@back="() => null"
		>
			<template slot="extra">
				<AButton type="primary" key="1" @click="showEmptyModal">
					Add new user
				</AButton>
				<AButton
					key="2"
					type="primary"
					style="background: #52c41a; border-color: #52c41a"
					@click="showEditModal"
				>
					Edit
				</AButton>
				<APopconfirm
					key="3"
					:title="`Are you sure delete ${
						selectedUser ? selectedUser.name : 'No one'
					}`"
					ok-text="Yes"
					cancel-text="No"
					okType="danger"
					@confirm="deluser"
				>
					<AButton type="danger"> Delete </AButton>
				</APopconfirm>
			</template>
		</APageHeader>
		<ATabs default-active-key="1">
			<ATabPane key="1" tab="Table">
				<ATable
					style="background: white"
					rowKey="id"
					:pagination="pagination"
					:columns="cols"
					:data-source="data"
					:row-selection="rowSelection"
					@change="onPageChanged"
				>
				</ATable>
			</ATabPane>
			<ATabPane key="2" tab="Stats"> Content of Tab Pane 1 </ATabPane>
		</ATabs>

		<UserForm
			:visible="visible"
			:toggle="toggle"
			:user="selectedUser"
			:saveUser="saveUser"
		/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserRepository from "@/local/users";
import { emptyUser, UserI } from "@/types/User";
import UserForm from "@/form/User.vue";
import { UserRowSelection, UserTableCols } from "@/types/Table";

@Component({
	components: { UserForm },
})
export default class Users extends Vue {
	pagination = { pageSize: 4, total: 9 };
	cols = UserTableCols;
	visible = false;
	selectedUser: UserI = emptyUser;
	data: UserI[] = [];
	rowSelection: UserRowSelection = {
		type: "radio",
		onChange: this.onSelect,
		selectedRowKeys: [],
	};
	userdb: UserRepository;
	constructor() {
		super();
		this.userdb = new UserRepository();
	}
	async getUsersAt(offset: number) {
		this.userdb.getAt(offset, 4).then((_users: UserI[]) => {
			this.data = _users;
		});
	}

	async saveUser(_user: UserI) {
		_user.id ? this.updateUser(_user) : this.insertUser(_user);
	}

	async insertUser(_user: UserI) {
		const res = await this.userdb.insert(_user);
		this.data.unshift(_user);
		if (res) this.$message.success(`${_user.name} added successfully`);
		else this.$message.error("Error:can't add user");
	}
	async updateUser(_user: UserI) {
		console.log(_user);
		const res = await this.userdb.update(_user);
		if (res) this.$message.success(`${_user.name} updated successfully`);
		else this.$message.error("Error:can't update user");
	}

	async deluser() {
		if (this.selectedUser) {
			const res = await this.userdb.del(this.selectedUser);
		}
	}
	onSelect(_key: string[], _users: UserI[]) {
		this.selectedUser = _users[0];
		this.rowSelection.selectedRowKeys = [_key[0]];
	}
	showEmptyModal() {
		this.rowSelection.selectedRowKeys = [];
		this.selectedUser = emptyUser;
		this.visible = true;
	}
	showEditModal() {
		if (!this.selectedUser.id) {
			this.$message.warning("please pick a user first", 5);
			return;
		}
		this.visible = true;
	}
	toggle(show: boolean) {
		this.visible = show === null ? !this.visible : show;
	}

	onPageChanged(pagination: any) {
		this.userdb.getAt(pagination.current - 1, 4).then((_users: UserI[]) => {
			this.data = _users;
		});
	}

	mounted() {
		this.getUsersAt(0);
	}
}
</script>
