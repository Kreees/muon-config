module.exports = {
    useAppLayout: true,
    pages: ["*"],
    models: ["*"],
    middleware: [],
    routes: [
        {
            route: "/admin",
            package: "admin"
        },
        {
            route: "*a",
            page: "error"
        }
    ],
    surrogate: {}
}
