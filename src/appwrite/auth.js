import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// we could directy use it by it mixes bussiness layer and view layer
// so to make quality code we use classes (more abstraction)

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        // done here as when a obj is called
        // it is done(to save resources)

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount) {
                // call login if account sucessfull made as we want auto login when successful signup
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }


    async login({email, password}) {
        try {
            console.log('running............................................')
            return this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // we can use this to handle the code as it return to us the error
            // in the console and code still runs
            console.log("Appwrite service :: getCurrentUser :: ERROR!! ", error)
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: ERROR!! ", error)
        }

    }
}

const authService = new AuthService()

export default authService