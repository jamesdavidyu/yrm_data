import axios, { AxiosInstance } from "axios";

interface LoginPayload {
    id: string;
    name: string;
    email: string;
    image: string;
    emailVerified: boolean;
    sessionToken: string;
    userId: string;
    expires: Date;
} // what is the payload when using google?

export const getYRMDataApiHttpClient = (accessToken?: string) => {
    const instance: AxiosInstance = axios.create({
        baseURL: process.env.YRM_DATA_API_URL,
        timeout: 18000,
        headers: {
            ...(accessToken ? { Authorization: `${accessToken}` } : {}),
        },
    });

    const client = new YRMDataApiHttpClient(instance);

    return client;
};

class YRMDataApiHttpClient {
    constructor(private client: AxiosInstance) {}

        public async loginUser(payload: LoginPayload) {
            const response = await this.client
                .post("/api/v1/auth/login", payload)
                .catch((e) => {
                    throw new Error(e);
                });
            
            return response;
        }
};