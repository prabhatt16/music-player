import axios from "axios";

const intance =axios.create({
    baseURL:'https://new-music-app.herokuapp.com/',
    // method:'post',
    // body: {
    //     mode: 'raw',
    //     raw: "{\n    \"method\":\"augeoById\",\"id\":96,\"token\":\"74d6f2a25b80fdebd28f3bef0cfe04b5\"}"
    // },
})
export default intance;