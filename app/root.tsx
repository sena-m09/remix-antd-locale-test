import { type PropsWithChildren } from "react";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { ConfigProvider, App as AntdApp, theme, Button, Empty } from "antd";
import jaJP from "antd/lib/locale/ja_JP.js";
import "antd/dist/reset.css";
import "../public/antd.min.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];


export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <RootProvider>
          <Empty />
          <Outlet />
        </RootProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider
      locale={jaJP}
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
      renderEmpty={() => <Empty />}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
};
