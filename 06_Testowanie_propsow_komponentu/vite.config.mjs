import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';

export defineConfig({
    plugins: [react()],
    test: {
        coverage:{
            reporter:["cobertura", "json", "html"],
        },
        environment: "jsdom",
        globals: true,
        include:["src/**/*.{spec,test}.{js,jsx}"],
        setupFiles:["setupTest.mjs"],
    }
})