export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { amount, customerName, customerPhone, customerDocument, description } = req.body;

  // Configurações da Paradise
  const API_KEY = "sk_2d08e24064aa451e4911685e55532a7b8a9d07cae11bd1f8e18dcad050defde8";
  const API_URL = "https://multi.paradisepags.com/api/v1/transaction.php";

  try {
    // 1. Converter valor para centavos (Ex: 25.90 -> 2590)
    const amountInCents = Math.round(parseFloat(amount) * 100);

    // 2. Preparar o corpo da requisição conforme a documentação
    const paradisePayload = {
      amount: amountInCents,
      description: description || "Pedido Online",
      reference: `REF_${Date.now()}`, // Gerando ID único de referência
      source: "api_externa", // Ignora a necessidade de productHash
      customer: {
        name: customerName,
        email: "cliente@email.com", // Obrigatório pela API, usando fallback se vazio
        phone: customerPhone.replace(/\D/g, ""),
        document: customerDocument.replace(/\D/g, "")
      }
    };

    // 3. Chamada para a API da Paradise
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY
      },
      body: JSON.stringify(paradisePayload)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro na Paradise");
    }

    // Retorna os dados para o seu componente frontend (T)
    // O seu frontend espera: qr_code, qr_code_base64 e transaction_id
    return res.status(200).json(data);

  } catch (error) {
    console.error("Erro no Checkout:", error);
    return res.status(500).json({ error: error.message });
  }
}