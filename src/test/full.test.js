import { strict as assert } from "node:assert";
import { fileURLToPath } from "url";
import path from "path";
import { validateSchema } from "../index.js";
import { readFile } from "../fs.utils.js";
import { describe, test } from "vitest";

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));
const JSON_SCHEMA_FILE = path.resolve(__dirname, "../json-schema.json");
const JSON_SCHEMA = readFile(JSON_SCHEMA_FILE);

// Happy path == schemas we expect to pass
describe("Full graph schema tests happy path tests", () => {
    test("Full graph schema test", () => {
        const minimalGraphSchema = readFile(
            path.resolve(__dirname, "./test-schemas/full.json")
        );
        const valid = validateSchema(JSON_SCHEMA, minimalGraphSchema);
        assert.strictEqual(valid, true);
    });
});
