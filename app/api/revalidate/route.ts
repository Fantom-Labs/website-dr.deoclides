import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Webhook de revalidação do Sanity.
 *
 * Configuração no Sanity (manage.sanity.io → projeto → API → Webhooks):
 * - URL: https://drdeoclides.com.br/api/revalidate
 * - Dataset: production
 * - Trigger on: Create, Update, Delete
 * - Filter: _type == "post"
 * - HTTP method: POST
 * - HTTP Headers: Authorization: <valor de SANITY_REVALIDATE_SECRET>
 */

function isValidSecret(received: string | null, expected: string | undefined) {
  if (!received || !expected) return false;

  const receivedBuffer = Buffer.from(received);
  const expectedBuffer = Buffer.from(expected);
  if (receivedBuffer.length !== expectedBuffer.length) return false;

  return timingSafeEqual(receivedBuffer, expectedBuffer);
}

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get("authorization");

    if (!isValidSecret(secret, process.env.SANITY_REVALIDATE_SECRET)) {
      return NextResponse.json({ message: "Secret inválido" }, { status: 401 });
    }

    revalidateTag("posts", { expire: 0 });

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 500 },
    );
  }
}
