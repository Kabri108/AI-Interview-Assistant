import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf"; // use legacy build

export async function parseResume(file) {
  const fileExtension = file.name.split(".").pop().toLowerCase();
  let text = "";

  if (fileExtension === "pdf") {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(" ");
      text += pageText + " ";
    }
  } else if (fileExtension === "docx") {
    // DOCX parsing for browser (optional, can skip for now)
  } else {
    throw new Error("Unsupported file type");
  }

  // Extract basic info
  const nameMatch = text.match(/Name[:\s]+([A-Za-z ]+)/i);
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/i);
  const phoneMatch = text.match(/\+?\d{10,14}/);

  return {
    name: nameMatch ? nameMatch[1].trim() : "",
    email: emailMatch ? emailMatch[0] : "",
    phone: phoneMatch ? phoneMatch[0] : "",
  };
}
