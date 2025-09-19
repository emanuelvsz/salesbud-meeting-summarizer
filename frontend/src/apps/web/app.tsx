import { App as AntdApp, ConfigProvider, Empty } from "antd";

import { css } from "@emotion/react";
import HomePage from "./pages/home";
import { theme } from "./lib/theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React from "react";

const queryClient = new QueryClient();

const styles = {
	antAppRoot: css`
		height: 100vh;
	`
};

const App = () => (
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ConfigProvider theme={theme} renderEmpty={() => <Empty />}>
				<AntdApp css={styles.antAppRoot} message={{ maxCount: 1 }}>
					<HomePage />
				</AntdApp>
			</ConfigProvider>
		</QueryClientProvider>
	</React.StrictMode>
);

export default App;
