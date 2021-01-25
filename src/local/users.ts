import { UserI } from "@/types/User"
import Knex, { QueryBuilder } from "knex";

const electron = window.require("electron");
const db: Knex = electron.remote.getGlobal("$db");

const userdb: QueryBuilder = db("users");

export default class UserRepository {

    async insert(user: UserI) {
        const res = await userdb.insert(user)
        if (!res) {
            throw new Error(res)
        }
        user.id = await this.getLastId(db)
        return res
    }

    update(user: UserI) {
        return userdb.where('id', user.id).update(user)
    }

    del(user: UserI) {
        if (!user.id)
            return {
                success: false,
                msg: "can't delete IDless user"
            }
        return userdb.where("id", user.id,).del()
    }


    getAt(offset: number, limit: number) {
        return userdb
            .offset(offset * limit)
            .orderBy('created_at', 'desc')
            .limit(limit)
    }
    all() { userdb.select("*") }

    async  getLastId(_db: Knex) {
        const idRes = await _db.raw("SELECT last_insert_rowid() as id")
        return idRes[0]["id"]
    }
    
};


