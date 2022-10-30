const { createBrowserHistory } = require("@remix-run/router");

const router = createBrowserHistory([
    {
        path: '/',
    }
])

export default router;