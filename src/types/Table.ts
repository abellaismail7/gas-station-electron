import { UserI } from "./User";

export interface UserRowSelection {
    type: string;
	onChange: (_key: string[], _users: UserI[]) => any;
	selectedRowKeys: string[];
}


export const UserTableCols = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Own",
        dataIndex: "own",
        key: "own",
    },
    {
        title: "Disown",
        dataIndex: "disown",
        key: "disown",
    },
];