import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const rules = {
    rules: {
        "indent": ["error", 4],
    }
}

const ignores = globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
])

const settings = {
    settings: {
        react: { version: '19' }
    }
}

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    rules,
    ignores,
    settings,
]);

export default eslintConfig;
