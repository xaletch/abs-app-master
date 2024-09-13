import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

export const ChakraThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const theme = extendTheme({
        fonts: {
            heading: `Inter', sans-serif`,
            body: `Inter, sans-serif`,
        },
    });

    return (
        <ChakraProvider theme={theme}>
            <Global
                styles={`
   @font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Inter";
    src: url("./assets/fonts/Inter-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
     body {
        font-family:"Inter"
    }
      `}
            />
            {children}
        </ChakraProvider>
    );
};
