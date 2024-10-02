import fs from "fs";
import { extractStyle } from "@ant-design/static-style-extract";

/**
 * Remix x Ant Design: FOUC 対策
 * https://ant.design/docs/react/server-side-rendering#whole-export
 */
const outputPath = "./public/antd.min.css";

const css = extractStyle();

fs.writeFileSync(outputPath, css);
