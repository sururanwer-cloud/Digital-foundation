const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export async function sendContactForm(
  fields: Record<string, string>
): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Missing VITE_WEB3FORMS_ACCESS_KEY. Add it to your .env.local file."
    );
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ access_key: accessKey, ...fields }),
  });

  const result: Web3FormsResponse = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Failed to send message. Please try again.");
  }
}
