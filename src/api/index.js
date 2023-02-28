import authRouter from "./routes/auth.router";
import testRouter from "./routes/test.router";


export default function api(){
    return [
        { path: '/test', controller: testRouter },
        { path: '/auth', controller: authRouter },
    ]
}