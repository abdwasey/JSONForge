document.getElementById("generateBtn").addEventListener("click", () => {
    const jsonText = document.getElementById("jsonInput").value;
    const languageType = document.getElementById("language").value;

    try {
        const obj = JSON.parse(jsonText);

        let output = "";

        if (Array.isArray(obj)) {
            Object.keys(obj?.[0]).forEach((key)=>{
                if(languageType === 'java'){
                    output += `private String ${key};\n`;
                } else if(languageType === 'typescript'){
                    output += `${key} : string; \n`;
                }
            })

        } else {
            for (const key in obj) {
                output += `private String ${key};\n`;
            }
        }

        document.getElementById("output").textContent = output;

    } catch (e) {
        document.getElementById("output").textContent = "Invalid JSON";
    }
});