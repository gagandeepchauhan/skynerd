import axios from "axios";

export default axios.create({
    baseURL: "https://staging-api.tracknerd.io/v1",
    headers: {
        "Content-Type": "application/json"
    }
});