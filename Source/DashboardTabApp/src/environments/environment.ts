export const environment = {
    production: false,
    apiBaseUrl: "https://qbotukedugbuniversity.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "df885acb-d720-4961-9da9-11776e2e5b79",
        clientId: "8dc0b4be-20c6-4fed-816c-d0876b0492d4",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
