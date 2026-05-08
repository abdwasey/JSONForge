document.getElementById("generateBtn").addEventListener("click", () => {

    const jsonText = document.getElementById("jsonInput").value.trim();
    const languageType = document.getElementById("language").value;
    const outputElement = document.getElementById("output");

    try {

        const parsed = JSON.parse(jsonText);

        const obj = Array.isArray(parsed)
            ? parsed[0]
            : parsed;

        if (!obj) {
            outputElement.textContent = "Array is empty";
            return;
        }

        let output = "";

        if (languageType === "java") {
            output += "public class Model {\n\n";
        } else if (languageType === "typescript") {
            output += "export interface Model {\n";
        }

        Object.keys(obj).forEach((key) => {

            const value = obj[key];

            let type = "String";

            if (typeof value === "number") {
                type = languageType === "java"
                    ? "int"
                    : "number";
            } else if (typeof value === "boolean") {
                type = languageType === "java"
                    ? "boolean"
                    : "boolean";
            } else if (Array.isArray(value)) {
                type = languageType === "java"
                    ? "List<Object>"
                    : "any[]";
            } else if (typeof value === "object" && value !== null) {
                type = languageType === "java"
                    ? "Object"
                    : "object";
            } else {
                type = languageType === "java"
                    ? "String"
                    : "string";
            }

            // Generate fields
            if (languageType === "java") {
                output += `    private ${type} ${key};\n`;
            } else if (languageType === "typescript") {
                output += `    ${key}: ${type};\n`;
            }

        });

        output += "\n}";

        outputElement.textContent = output;

    } catch (e) {
        outputElement.textContent = `Invalid JSON: ${e.message}`;
    }

});